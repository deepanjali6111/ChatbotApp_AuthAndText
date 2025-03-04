// screens/ImageGeneration.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import axios from "axios";

const ImageGeneration = () => {
    const [prompt, setPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState(null);

    const generateImage = async () => {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/images/generations",
                { prompt, n: 1, size: "256x256" },
                { headers: { Authorization: `Bearer YOUR-API-KEY` } }
            );

            setImageUrl(response.data.data[0].url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Enter a prompt for AI-generated images:</Text>
            <TextInput value={prompt} onChangeText={setPrompt} placeholder="Describe the image..." style={styles.input} />
            <Button title="Generate Image" onPress={generateImage} />
            {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: "center" },
    input: { height: 40, borderWidth: 1, marginBottom: 10, padding: 10, width: "100%" },
    image: { width: 256, height: 256, marginTop: 20 },
});

export default ImageGeneration;
