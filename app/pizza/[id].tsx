import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { pizzas } from "../../data/pizzas";
import { usePizzaLikes } from "../../hooks/usePizzaLikes";

export default function PizzaDetail() {
  const { id } = useLocalSearchParams();
  const pizza = pizzas.find((p) => p.id === id);
  const { likes, hasLiked, loading, toggleLike } = usePizzaLikes(id as string);

  if (!pizza) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Pizza no encontrada</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: pizza.name,
          headerStyle: { backgroundColor: "#fff" },
          headerTitleStyle: { fontFamily: "InterBold" },
          headerBackTitle: "Volver",
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />
        
        {/* Imagen de la pizza */}
        <Image
          source={pizza.image}
          style={styles.pizzaImage}
          resizeMode="cover"
        />

        {/* Contenido */}
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.pizzaName}>{pizza.name}</Text>
          </View>

          {/* Sección de likes */}
          <View style={styles.likesSection}>
            <Pressable
              style={({ pressed }) => [
                styles.likeButton,
                pressed && styles.likeButtonPressed,
              ]}
              onPress={toggleLike}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#E63946" />
              ) : (
                <Text style={styles.likeIcon}>{hasLiked ? "❤️" : "🤍"}</Text>
              )}
              <Text style={styles.likeCount}>
                {likes} {likes === 1 ? "me gusta" : "me gusta"}
              </Text>
            </Pressable>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            <Text style={styles.ingredients}>{pizza.ingredients}</Text>
          </View>

          {/* Espacio inferior para mejor scroll */}
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    fontFamily: "InterBold",
    color: "#6C757D",
  },
  pizzaImage: {
    width: "100%",
    height: 320,
    backgroundColor: "#E9ECEF",
  },
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    paddingTop: 24,
    paddingHorizontal: 20,
    minHeight: 400,
  },
  titleContainer: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },
  pizzaName: {
    fontSize: 32,
    fontFamily: "InterBold",
    color: "#212529",
    marginBottom: 8,
  },
  likesSection: {
    marginBottom: 24,
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF5F5",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#FED7D7",
    gap: 8,
  },
  likeButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  likeIcon: {
    fontSize: 24,
  },
  likeCount: {
    fontSize: 16,
    fontFamily: "InterBold",
    color: "#E63946",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "InterBold",
    color: "#212529",
    marginBottom: 12,
  },
  ingredients: {
    fontSize: 16,
    fontFamily: "InterRegular",
    color: "#495057",
    lineHeight: 24,
  },
  spacer: {
    height: 40,
  },
});