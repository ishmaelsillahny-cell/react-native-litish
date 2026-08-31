import { useAuth } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center bg-surface px-6">
      <Text className="font-sans-bold text-h1 text-ink">Welcome to LitIsh</Text>
      <Text className="mt-2 text-center font-sans text-body text-secondary">
        Read and write everyday English
      </Text>

      <TouchableOpacity
        className="mt-8 rounded-full bg-indigo px-6 py-4"
        activeOpacity={0.85}
        onPress={() => router.push("/onboarding")}
      >
        <Text className="font-sans-bold text-base text-white">
          View onboarding
        </Text>
      </TouchableOpacity>
    </View>
  );
}
