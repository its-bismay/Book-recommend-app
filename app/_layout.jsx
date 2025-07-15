import { Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "../components/SafeScreen";
import { useAuthStore } from "../store/authStore"
import { useEffect, useState } from "react";

export default function RootLayout() {

  const router = useRouter();
  const segments = useSegments();

  const { checkAuth, user, token} = useAuthStore();

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      await checkAuth();
      setIsAuthChecked(true);
    };
    initAuth();
  },[]);

  useEffect(() => {
    if (!isAuthChecked) return;
    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = user && token;

    if(!isSignedIn && !inAuthScreen){
      router.replace("/(auth)")
    }
    else if(isSignedIn && inAuthScreen) {
      router.replace("/(tabs)")
    }
  },[user, token, segments, isAuthChecked])
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
    </SafeAreaProvider>
  );
}
