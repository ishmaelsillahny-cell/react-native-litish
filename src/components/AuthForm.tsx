import { useSSO } from "@clerk/expo/experimental";
import { Link, router, type Href } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

type SocialStrategy = "oauth_google" | "oauth_facebook" | "oauth_apple";

const SOCIAL_PROVIDERS: {
  strategy: SocialStrategy;
  label: string;
  icon: string;
  iconColor: string;
}[] = [
  { strategy: "oauth_google", label: "Continue with Google", icon: "G", iconColor: "#4285F4" },
  { strategy: "oauth_facebook", label: "Continue with Facebook", icon: "f", iconColor: "#1877F2" },
  { strategy: "oauth_apple", label: "Continue with Apple", icon: "", iconColor: "#000000" },
];

type AuthFormProps = {
  title: string;
  subtitle: string;
  showPassword?: boolean;
  primaryButtonLabel: string;
  footerPrompt: string;
  footerLinkLabel: string;
  footerLinkHref: Href;
  errorMessage?: string | null;
  isSubmitting?: boolean;
  showCaptcha?: boolean;
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
  errorMessage,
  isSubmitting = false,
  showCaptcha = false,
  onSubmit,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { startSSOFlow } = useSSO();
  const [socialError, setSocialError] = useState<string | null>(null);
  const [pendingStrategy, setPendingStrategy] = useState<SocialStrategy | null>(null);

  async function handleSocialPress(strategy: SocialStrategy) {
    setSocialError(null);
    setPendingStrategy(strategy);

    try {
      const { createdSessionId } = await startSSOFlow({ strategy });
      if (createdSessionId) {
        router.replace("/");
      }
    } catch {
      setSocialError("That sign-in didn't work. Please try again.");
    } finally {
      setPendingStrategy(null);
    }
  }

  const displayedError = errorMessage ?? socialError;

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
            editable={!isSubmitting}
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
                editable={!isSubmitting}
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

      {displayedError && (
        <Text className="mt-3 text-center font-sans text-xs text-red-500">
          {displayedError}
        </Text>
      )}

      <TouchableOpacity
        className="mt-5 flex-row items-center justify-center rounded-full bg-indigo py-4"
        activeOpacity={0.85}
        disabled={isSubmitting}
        onPress={() => onSubmit({ email, password })}
      >
        {isSubmitting ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text className="font-sans-bold text-base text-white">{primaryButtonLabel}</Text>
        )}
      </TouchableOpacity>

      {showCaptcha && <View nativeID="clerk-captcha" />}

      <View className="mt-5 flex-row items-center gap-3">
        <View className="h-px flex-1 bg-border" />
        <Text className="font-sans text-xs text-secondary">or continue with</Text>
        <View className="h-px flex-1 bg-border" />
      </View>

      <View className="mt-4 gap-3">
        {SOCIAL_PROVIDERS.map((provider) => (
          <TouchableOpacity
            key={provider.strategy}
            className="flex-row items-center justify-center gap-2 rounded-full border border-border bg-white py-4"
            activeOpacity={0.85}
            disabled={pendingStrategy !== null}
            onPress={() => handleSocialPress(provider.strategy)}
          >
            {pendingStrategy === provider.strategy ? (
              <ActivityIndicator size="small" color={colors.secondary} />
            ) : (
              <>
                <Text
                  className="font-sans-bold text-base"
                  style={{ color: provider.iconColor }}
                >
                  {provider.icon}
                </Text>
                <Text className="font-sans-bold text-base text-ink">{provider.label}</Text>
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

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
