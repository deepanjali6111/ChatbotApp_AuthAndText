// screens/Register.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfi";

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.reset({ index: 0, routes: [{ name: "Home" }] }); // Reset stack and navigate
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    input: { height: 40, borderBottomWidth: 1, marginBottom: 10 },
});

export default Register;
