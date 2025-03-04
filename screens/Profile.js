import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../themes/colors";
import typography from "../themes/typography";

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Profile</Text>
            <Text style={styles.text}>This is the profile screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.background },
    heading: { fontSize: typography.fontSizeLarge, fontWeight: "bold", color: colors.primary, fontFamily: typography.fontFamily },
    text: { fontSize: typography.fontSizeMedium, color: colors.textSecondary, fontFamily: typography.fontFamily },
});

export default Profile;
