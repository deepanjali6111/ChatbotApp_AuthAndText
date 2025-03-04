import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const SavedScreen = () => {
    // Dummy saved data (Replace with Firebase Firestore data)
    const savedItems = [
        { id: "1", type: "chat", content: "This is a saved chat message." },
        { id: "2", type: "image", uri: "https://via.placeholder.com/150" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saved Items</Text>
            <FlatList
                data={savedItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        {item.type === "chat" ? (
                            <Text style={styles.text}>{item.content}</Text>
                        ) : (
                            <Image source={{ uri: item.uri }} style={styles.image} />
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    item: { marginBottom: 15 },
    text: { fontSize: 16 },
    image: { width: 150, height: 150, borderRadius: 10 },
});

export default SavedScreen;
