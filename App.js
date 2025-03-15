import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import AppNavigation from "./navigations/AppNavigation";
import { FirebaseProvider } from "./firebase/FirebaseProvider";
import { ThemeProvider } from './contexts/ThemeContext';

const loadFonts = async () => {
    await Font.loadAsync({
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf")

    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        loadFonts().then(() => setFontsLoaded(true));
    }, []);

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
                <Text style={{ fontFamily: "CustomFont" }}>Loading...</Text>
            </View>
        );
    }

    return (
        <ThemeProvider>
            <FirebaseProvider>
                <AppNavigation />
            </FirebaseProvider>
        </ThemeProvider>
    );
}