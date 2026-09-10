import { Text, TouchableOpacity, View } from "react-native";

type SpeechOptionCardProps = {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  controlType: "radio" | "checkbox" | "switch";
  onPress: () => void;
};

export function SpeechOptionCard({
  icon,
  title,
  description,
  selected,
  controlType,
  onPress,
}: SpeechOptionCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      accessibilityRole={controlType}
      accessibilityState={
        controlType === "radio" ? { selected } : { checked: selected }
      }
      className={`flex-row items-center gap-3 rounded-2xl border p-4 ${
        selected ? "border-indigo bg-indigo/5" : "border-border bg-white"
      }`}
    >
      <View className="h-10 w-10 items-center justify-center rounded-full bg-indigo/10">
        <Text className="font-sans-bold text-base text-indigo">{icon}</Text>
      </View>

      <View className="flex-1">
        <Text className="font-sans-bold text-base text-ink">{title}</Text>
        <Text className="mt-0.5 font-sans text-xs text-secondary">
          {description}
        </Text>
      </View>

      {selected ? (
        <View className="h-6 w-6 items-center justify-center rounded-full bg-indigo">
          <Text className="font-sans-bold text-xs text-white">✓</Text>
        </View>
      ) : (
        <View className="h-6 w-6 rounded-full border border-border" />
      )}
    </TouchableOpacity>
  );
}
