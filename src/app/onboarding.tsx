import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <View className="flex-1 px-6 pt-2">
        <View className="flex-row items-center gap-2">
          <Image
            source={images.mascotLogo}
            className="h-7 w-7 rounded-full"
            resizeMode="cover"
          />
          <View>
            <Text className="font-sans-bold text-base text-ink">LitIsh</Text>
            <Text className="font-sans text-xs text-secondary">
              Read and write everyday English
            </Text>
          </View>
        </View>

        <View className="mt-4">
          <Text className="font-sans-bold text-h2 text-ink">
            Read the English
          </Text>
          <Text className="font-sans-bold text-h2 text-indigo">
            you use every day.
          </Text>
        </View>

        <Text className="mt-2 font-sans text-sm text-secondary">
          Learn names, numbers, messages, forms, and phone words—one small
          step at a time.
        </Text>

        <View className="mt-4 h-[300px] w-full">
          <Image
            source={images.mascotWelcome}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>

        <View className="mt-4 flex-row items-center gap-3">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-indigo">
            <Text className="ml-0.5 text-sm text-white">▶</Text>
          </View>
          <View>
            <Text className="font-sans-bold text-sm text-ink">
              Hear this screen
            </Text>
            <Text className="font-sans text-xs text-secondary">
              Tap anywhere to listen
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="mt-4 flex-row items-center justify-center rounded-full bg-indigo py-4"
          activeOpacity={0.85}
          onPress={() => router.back()}
        >
          <Text className="font-sans-bold text-base text-white">
            Start learning
          </Text>
          <Text className="ml-2 text-base text-white">→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
