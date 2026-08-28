import { Link, router, type Href } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

type AuthFormProps = {
  title: string;
  subtitle: string;
  showPassword?: boolean;
  primaryButtonLabel: string;
  footerPrompt: string;
  footerLinkLabel: string;
  footerLinkHref: Href;
  onSubmit: (values: { email: string; password: string }) => void;
};

export function AuthForm({
  title,
  subtitle,
  showPassword = false,
  primaryButtonLabel,
  footerPrompt,
  footerLinkLabel,
  footerLinkHref,
  onSubmit,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View>
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={12}
          className="h-10 w-10 items-center justify-center"
        >
          <Text className="text-2xl text-ink">‹</Text>
        </TouchableOpacity>

        <Text className="ml-1 flex-1 font-sans-bold text-lg text-ink">
          {title}
        </Text>

      </View>

      <View className="mt-2 items-center">
        <Image source={images.mascotAuth} className="h-40 w-40" resizeMode="contain" />
      </View>

      <Text className="mt-1 text-center font-sans text-sm text-secondary">
        {subtitle}
      </Text>

      <View className="mt-5 gap-4">
        <View className="rounded-2xl border border-border bg-white px-4 py-2">
          <Text className="font-sans-bold text-[10px] uppercase tracking-wide text-secondary">
            Email address
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="py-0.5 font-sans text-base text-ink"
          />
        </View>

        {showPassword && (
          <View className="rounded-2xl border border-border bg-white px-4 py-2">
            <Text className="font-sans-bold text-[10px] uppercase tracking-wide text-secondary">
              Password
            </Text>
            <View className="flex-row items-center">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Create a password"
                placeholderTextColor={colors.secondary}
                secureTextEntry={!isPasswordVisible}
                className="flex-1 py-0.5 font-sans text-base text-ink"
              />
              <TouchableOpacity onPress={() => setIsPasswordVisible((v) => !v)} hitSlop={8}>
                <Text className="font-sans-bold text-xs text-indigo">
                  {isPasswordVisible ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      <TouchableOpacity
        className="mt-5 items-center justify-center rounded-full bg-indigo py-4"
        activeOpacity={0.85}
        onPress={() => onSubmit({ email, password })}
      >
        <Text className="font-sans-bold text-base text-white">{primaryButtonLabel}</Text>
      </TouchableOpacity>

      <Text className="mt-5 text-center font-sans text-sm text-secondary">
        {footerPrompt}{" "}
        <Link href={footerLinkHref} className="font-sans-bold text-indigo">
          {footerLinkLabel}
        </Link>
      </Text>

      <View className="mt-5 flex-row items-center gap-2 rounded-2xl bg-blue/10 px-4 py-3">
        <Text className="text-sm">🔒</Text>
        <Text className="flex-1 font-sans text-xs text-secondary">
          Your learning information stays private.
        </Text>
      </View>
    </View>
  );
}
