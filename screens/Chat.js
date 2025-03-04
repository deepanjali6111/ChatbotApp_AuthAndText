// screens/Chat.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; //  Replace with your Google API Key

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: "user" };
            setMessages([...messages, userMessage]);

            try {
                const response = await axios.post(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,


                    {
                        contents: [{ parts: [{ text: input }] }]
                    }
                );

                const botMessage = {
                    text: response.data.candidates[0]?.content?.parts[0]?.text || "No response.",
                    sender: "bot"
                };
                setMessages([...messages, userMessage, botMessage]);
            } catch (error) {
                console.error("Error fetching AI response:", error.response?.data || error.message);
                setMessages([...messages, { text: "Error: Failed to get AI response.", sender: "bot" }]);
            }

            setInput("");
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={item.sender === "user" ? styles.userMessage : styles.botMessage}>
                        {item.text}
                    </Text>
                )}
            />
            <TextInput value={input} onChangeText={setInput} placeholder="Type a message..." style={styles.input} />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { height: 40, borderWidth: 1, marginBottom: 10, padding: 10 },
    userMessage: { alignSelf: "flex-end", backgroundColor: "#DCF8C6", padding: 10, borderRadius: 10, marginVertical: 5 },
    botMessage: { alignSelf: "flex-start", backgroundColor: "#EAEAEA", padding: 10, borderRadius: 10, marginVertical: 5 },
});

export default Chat;
