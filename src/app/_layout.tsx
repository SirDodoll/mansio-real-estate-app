import "../../global.css";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Geist-Regular": require("../../assets/fonts/Geist-Regular.ttf"),
    "Geist-Medium": require("../../assets/fonts/Geist-Medium.ttf"),
    "Geist-SemiBold": require("../../assets/fonts/Geist-SemiBold.ttf"),
    "Geist-Bold": require("../../assets/fonts/Geist-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
}
