import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

// Constants for consistent styling
const COLORS = {
  white: "#FFFFFF",
  overlay: "rgba(0, 0, 0, 0.6)",
  buttonBackground: "rgba(255, 255, 255, 0.2)",
  buttonBorder: "rgba(255, 255, 255, 0.3)",
};

const SIZES = {
  titleFontSize: 32,
  subtitleFontSize: 18,
  logoSize: 120,
  buttonPadding: 16,
  spacing: 20,
  borderRadius: 12,
  minTouchTarget: 48,
};

const OPACITY = {
  subtitle: 0.85,
  pressedButton: 0.7,
};

export default function Home() {
  const [backgroundImageError, setBackgroundImageError] = useState(false);
  const [logoImageError, setLogoImageError] = useState(false);

  const handleBackgroundError = () => {
    setBackgroundImageError(true);
  };

  const handleLogoError = () => {
    setLogoImageError(true);
  };

  const renderContent = () => (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      
      {/* Dark overlay for better text readability */}
      <View style={styles.overlay} />
      
      <View style={styles.container}>
        {/* Logo or title fallback */}
        <View style={styles.logoContainer}>
          {!logoImageError ? (
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
              onError={handleLogoError}
            />
          ) : (
            <Text style={styles.logoFallback}>G</Text>
          )}
        </View>

        {/* Title */}
        <Text style={styles.title}>Giorgio's</Text>
        
        {/* Subtitle */}
        <Text style={styles.subtitle}>Tradizione di famiglia</Text>
        
        {/* CTA Button */}
        <Link href="/menu" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.ctaButton,
              pressed && styles.ctaButtonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="View menu"
            testID="go-to-menu"
          >
            <Text style={styles.ctaButtonText}>Ver carta</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );

  if (backgroundImageError) {
    // Fallback to solid background if image fails to load
    return (
      <View style={styles.fallbackBackground}>
        {renderContent()}
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/pizza-bg.jpg")}
      style={styles.backgroundImage}
      onError={handleBackgroundError}
    >
      {renderContent()}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  fallbackBackground: {
    flex: 1,
    backgroundColor: "#8B4513", // Brown fallback color
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.overlay,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.spacing,
  },
  logoContainer: {
    marginBottom: SIZES.spacing,
  },
  logo: {
    width: SIZES.logoSize,
    height: SIZES.logoSize,
  },
  logoFallback: {
    fontSize: 60,
    fontFamily: "InterBold",
    color: COLORS.white,
    textAlign: "center",
    width: SIZES.logoSize,
    height: SIZES.logoSize,
    lineHeight: SIZES.logoSize,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: SIZES.logoSize / 2,
  },
  title: {
    fontSize: SIZES.titleFontSize,
    fontFamily: "InterBold",
    color: COLORS.white,
    textAlign: "center",
    marginBottom: SIZES.spacing / 2,
  },
  subtitle: {
    fontSize: SIZES.subtitleFontSize,
    fontFamily: "InterRegular",
    color: COLORS.white,
    opacity: OPACITY.subtitle,
    textAlign: "center",
    marginBottom: SIZES.spacing * 2,
  },
  ctaButton: {
    backgroundColor: COLORS.buttonBackground,
    borderWidth: 1,
    borderColor: COLORS.buttonBorder,
    paddingHorizontal: SIZES.spacing * 2,
    paddingVertical: SIZES.buttonPadding,
    borderRadius: SIZES.borderRadius,
    minHeight: SIZES.minTouchTarget,
    minWidth: SIZES.minTouchTarget * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  ctaButtonPressed: {
    opacity: OPACITY.pressedButton,
  },
  ctaButtonText: {
    fontSize: SIZES.subtitleFontSize,
    fontFamily: "InterBold",
    color: COLORS.white,
    textAlign: "center",
  },
});