import { ActivityIndicator, View } from "react-native";

import { colors } from "@/constants/theme";

export default function SSOCallback() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surface,
      }}
    >
      <ActivityIndicator size="large" color={colors.indigo} />
    </View>
  );
}
