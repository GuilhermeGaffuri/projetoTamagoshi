import React, { useState } from "react";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    padding: 16,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#424242",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#7B1FA2",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginTop: 10,
    overflow: "hidden", 
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },
  loading: {
    marginTop: 20,
  },
});

export default function Index() {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); 

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("../tabs/home"); 
    }, 1000); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem Vindo ao Tamagoshi!!!</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.8 },
        ]}
        onPress={handlePress}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
      {loading && <ActivityIndicator size="large" color="#7B1FA2" style={styles.loading} />}
    </View>
  );
}
