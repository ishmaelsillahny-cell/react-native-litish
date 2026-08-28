import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Modal, Platform, Pressable, Text, TextInput, View } from "react-native";

const CODE_LENGTH = 6;
const NAVIGATE_DELAY_MS = 400;
const FOCUS_DELAY_MS = 400;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  password?: string;
  onClose: () => void;
  onVerified?: (credentials: { email: string; password: string }) => void;
};

export function VerificationModal({
  visible,
  email,
  password = "",
  onClose,
  onVerified,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);
  const completionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const focusTimeout = setTimeout(() => inputRef.current?.focus(), FOCUS_DELAY_MS);
    return () => clearTimeout(focusTimeout);
  }, [visible]);

  useEffect(() => {
    return () => {
      if (completionTimeoutRef.current) {
        clearTimeout(completionTimeoutRef.current);
      }
    };
  }, []);

  function clearCompletionTimeout() {
    if (completionTimeoutRef.current) {
      clearTimeout(completionTimeoutRef.current);
      completionTimeoutRef.current = null;
    }
  }

  function handleClose() {
    clearCompletionTimeout();
    setCode("");
    onClose();
  }

  function handleChangeCode(value: string) {
    clearCompletionTimeout();
    const digitsOnly = value.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digitsOnly);

    if (digitsOnly.length === CODE_LENGTH) {
      completionTimeoutRef.current = setTimeout(() => {
        completionTimeoutRef.current = null;
        handleClose();
        if (onVerified) {
          onVerified({ email, password });
          return;
        }

        router.replace("/");
      }, NAVIGATE_DELAY_MS);
    }
  }

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={handleClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Pressable className="flex-1 justify-end bg-ink/50" onPress={handleClose}>
          <Pressable
            className="rounded-t-3xl bg-white px-6 pb-10 pt-6"
            onPress={(event) => event.stopPropagation()}
          >
            <View className="mb-5 h-1.5 w-12 self-center rounded-full bg-border" />

            <Text className="text-center font-sans-bold text-h3 text-ink">
              Check your email
            </Text>
            <Text className="mt-2 text-center font-sans text-sm text-secondary">
              {email
                ? `We sent a 6-digit code to ${email}.`
                : "We sent a 6-digit code to your email."}
            </Text>

            <Pressable
              className="mt-6 flex-row justify-center gap-2"
              onPress={() => inputRef.current?.focus()}
            >
              {Array.from({ length: CODE_LENGTH }).map((_, index) => (
                <View
                  key={index}
                  className={`h-14 w-11 items-center justify-center rounded-2xl border bg-surface ${
                    index === code.length ? "border-indigo" : "border-border"
                  }`}
                >
                  <Text className="font-sans-bold text-xl text-ink">{code[index] ?? ""}</Text>
                </View>
              ))}
            </Pressable>

            <TextInput
              ref={inputRef}
              value={code}
              onChangeText={handleChangeCode}
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              className="absolute h-px w-px opacity-0"
            />

            <Text className="mt-6 text-center font-sans text-xs text-secondary">
              Take your time. Your code is valid for a few minutes.
            </Text>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
