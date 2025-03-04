import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; //  Replace with your Google API Key

const Home = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const handleSend = async () => {
        if (!input.trim()) return;

        try {
            const res = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,

                {
                    contents: [{ parts: [{ text: input }] }]
                }
            );

            // Extract response
            setResponse(res.data.candidates[0]?.content?.parts[0]?.text || "No response.");
        } catch (error) {
            console.error("Error fetching AI response:", error.response?.data || error.message);
            setResponse("Error: Failed to get AI response.");
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                Chat with AI (Gemini)
            </Text>

            <TextInput
                style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                placeholder="Type your message..."
                value={input}
                onChangeText={setInput}
            />

            <Button title="Send" onPress={handleSend} />

            <ScrollView style={{ marginTop: 20, borderWidth: 1, padding: 10, borderRadius: 5 }}>
                <Text>{response || "AI response will appear here..."}</Text>
            </ScrollView>
        </View>
    );
};

export default Home;
