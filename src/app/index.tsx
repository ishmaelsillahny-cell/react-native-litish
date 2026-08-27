import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-surface">
      <Text className="font-sans-bold text-h1 text-ink">Welcome to LitIsh</Text>
      <Text className="mt-2 font-sans text-body text-secondary">
        Read and write everyday English
      </Text>
    </View>
  );
}
