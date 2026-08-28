import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthForm } from "@/components/AuthForm";
import { VerificationModal } from "@/components/VerificationModal";
import { colors } from "@/constants/theme";

export default function SignUp() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [pendingCredentials, setPendingCredentials] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(values: { email: string; password: string }) {
    setPendingCredentials(values);
    setIsVerifying(true);
  }

  function handleVerified(credentials: { email: string; password: string }) {
    setPendingCredentials(credentials);
    router.replace("/");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingTop: 8,
            paddingBottom: 24,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <AuthForm
            title="Create your account"
            subtitle="Save your lessons and continue on any device."
            showPassword
            primaryButtonLabel="Create account"
            footerPrompt="Already have an account?"
            footerLinkLabel="Log in"
            footerLinkHref="/sign-in"
            onSubmit={handleSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={isVerifying}
        email={pendingCredentials.email}
        password={pendingCredentials.password}
        onClose={() => setIsVerifying(false)}
        onVerified={handleVerified}
      />
    </SafeAreaView>
  );
}
