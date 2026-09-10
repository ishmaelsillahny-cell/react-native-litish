import { useSignUp } from "@clerk/expo";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthForm } from "@/components/AuthForm";
import { VerificationModal } from "@/components/VerificationModal";
import { colors } from "@/constants/theme";

export default function SignUp() {
  const { signUp } = useSignUp();

  const [isVerifying, setIsVerifying] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(values: { email: string; password: string }) {
    setErrorMessage(null);
    setIsSubmitting(true);

    const { error } = await signUp.password({
      emailAddress: values.email,
      password: values.password,
    });

    if (error) {
      setIsSubmitting(false);
      setErrorMessage(error.longMessage ?? error.message);
      return;
    }

    const { error: sendError } = await signUp.verifications.sendEmailCode();

    setIsSubmitting(false);

    if (sendError) {
      setErrorMessage(sendError.longMessage ?? sendError.message);
      return;
    }

    setEmail(values.email);
    setIsVerifying(true);
  }

  async function handleVerify(code: string) {
    const { error } = await signUp.verifications.verifyEmailCode({ code });

    if (error) {
      return error.longMessage ?? error.message;
    }

    if (signUp.status !== "complete") {
      return "We couldn't finish creating your account. Please try again.";
    }

    const { error: finalizeError } = await signUp.finalize();

    if (finalizeError) {
      return finalizeError.longMessage ?? finalizeError.message;
    }

    router.replace("/");

    return null;
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
            showCaptcha
            primaryButtonLabel="Create account"
            footerPrompt="Already have an account?"
            footerLinkLabel="Log in"
            footerLinkHref="/sign-in"
            errorMessage={errorMessage}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={isVerifying}
        email={email}
        onClose={() => setIsVerifying(false)}
        onVerify={handleVerify}
      />
    </SafeAreaView>
  );
}
