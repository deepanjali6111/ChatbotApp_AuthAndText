import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../themes/colors";
import typography from "../themes/typography";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/logo.png")} style={styles.logo} />
            <Text style={styles.text}>Welcome to ChatGPT Clone!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.background },
    logo: { width: 150, height: 150, marginBottom: 20 },
    text: { fontSize: typography.fontSizeMedium, fontFamily: typography.fontFamily, color: colors.primary },
});

export default Welcome;
