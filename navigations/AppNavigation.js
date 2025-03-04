import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../firebase/FirebaseProvider";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Saved from "../screens/Saved";
import Welcome from "../screens/Welcome";
import colors from "../themes/colors"; // Import theme colors

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Main app navigation (only for authenticated users)
const MainTabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor: colors.primary },
            tabBarActiveTintColor: colors.buttonText,
            tabBarInactiveTintColor: colors.textSecondary,
        }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Saved" component={Saved} />
        <Tab.Screen name="Welcome" component={Welcome} />
    </Tab.Navigator>
);

export default function AppNavigation() {
    const { user } = useAuth(); // Check authentication state

    return (
        <NavigationContainer>
            {user ? (
                <MainTabNavigator /> // Show main app if authenticated
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
