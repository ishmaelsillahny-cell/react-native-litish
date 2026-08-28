import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthForm } from "@/components/AuthForm";
import { VerificationModal } from "@/components/VerificationModal";
import { colors } from "@/constants/theme";

export default function SignIn() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(values: { email: string; password: string }) {
    setEmail(values.email);
    setIsVerifying(true);
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
            title="Log in to your account"
            subtitle="Continue your lessons on any device."
            primaryButtonLabel="Log in"
            footerPrompt="Don't have an account?"
            footerLinkLabel="Sign up"
            footerLinkHref="/sign-up"
            onSubmit={handleSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={isVerifying}
        email={email}
        onClose={() => setIsVerifying(false)}
      />
    </SafeAreaView>
  );
}
