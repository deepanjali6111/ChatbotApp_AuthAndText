import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import axios from "axios";
const API_KEY = "API_KEY_HERE"; //  Replace with your Google API Key

const Home = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const { colors, toggleTheme, isDarkMode } = useTheme(); // Added missing destructuring

    const handleSend = async () => {
        if (!input.trim()) return;

        try {
            const res = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
                {
                    contents: [{ parts: [{ text: input }] }]
                }
            );

            setResponse(res.data.candidates[0]?.content?.parts[0]?.text || "No response.");
        } catch (error) {
            console.error("Error fetching AI response:", error.response?.data || error.message);
            setResponse("Error: Failed to get AI response.");
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: colors.text }]}>Chat with AI (Gemini)</Text>
                <TouchableOpacity onPress={toggleTheme}>
                    <Ionicons
                        name={isDarkMode ? "moon" : "sunny"}
                        size={24}
                        color={colors.text}
                    />
                </TouchableOpacity>
            </View>

            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: colors.inputBackground,
                        color: colors.text,
                        borderColor: colors.border
                    }
                ]}
                placeholder="Type your message..."
                placeholderTextColor={colors.textSecondary} // Changed to textSecondary for better visibility
                value={input}
                onChangeText={setInput}
            />

            <TouchableOpacity
                style={[styles.sendButton, { backgroundColor: colors.primary }]}
                onPress={handleSend}
            >
                <Text style={[styles.buttonText, { color: colors.buttonText }]}>Send</Text>
            </TouchableOpacity>

            <ScrollView style={[
                styles.responseContainer,
                { borderColor: colors.border }
            ]}>
                <Text style={{ color: colors.text }}>
                    {response || "AI response will appear here..."}
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    sendButton: {
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    responseContainer: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
    },
});


export default Home;