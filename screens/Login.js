import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // 🚨 Watch this import
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfi";
import { useTheme } from "../contexts/ThemeContext";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { colors } = useTheme();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.reset({ index: 0, routes: [{ name: "Home" }] });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>Login</Text>

            <View style={[styles.inputContainer, { backgroundColor: colors.inputBackground }]}>
                <Ionicons name="mail-outline" size={20} color={colors.text} />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={colors.textSecondary}
                    style={[styles.input, { color: colors.text }]}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
            </View>

            <View style={[styles.inputContainer, { backgroundColor: colors.inputBackground }]}>
                <Ionicons name="lock-closed-outline" size={20} color={colors.text} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={colors.textSecondary}
                    secureTextEntry
                    style={[styles.input, { color: colors.text }]}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.primary }]}
                onPress={handleLogin}
            >
                <Text style={[styles.buttonText, { color: colors.buttonText }]}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={[styles.registerText, { color: colors.text }]}>
                    Don't have an account? <Text style={{ color: colors.primary }}>Register</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        // fontWeight: "bold", // Remove if using specific font weights
        marginBottom: 30,
        textAlign: "center",
        fontFamily: "Poppins-Bold", // Match the loaded names
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        height: 50,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    button: {
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
    },
    registerText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 14,
    },
});

export default Login;