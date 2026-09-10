import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

const CODE_LENGTH = 6;
const FOCUS_DELAY_MS = 400;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
  onVerify: (code: string) => Promise<string | null>;
};

export function VerificationModal({
  visible,
  email,
  onClose,
  onVerify,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const focusTimeout = setTimeout(() => inputRef.current?.focus(), FOCUS_DELAY_MS);
    return () => clearTimeout(focusTimeout);
  }, [visible]);

  function handleClose() {
    setCode("");
    setError(null);
    setIsVerifying(false);
    onClose();
  }

  async function handleChangeCode(value: string) {
    setError(null);
    const digitsOnly = value.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digitsOnly);

    if (digitsOnly.length === CODE_LENGTH) {
      setIsVerifying(true);
      const verifyError = await onVerify(digitsOnly);
      setIsVerifying(false);

      if (verifyError) {
        setError(verifyError);
        setCode("");
        inputRef.current?.focus();
      }
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
                    error
                      ? "border-red-400"
                      : index === code.length
                        ? "border-indigo"
                        : "border-border"
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
              editable={!isVerifying}
              className="absolute h-px w-px opacity-0"
            />

            {isVerifying ? (
              <View className="mt-6 flex-row items-center justify-center gap-2">
                <ActivityIndicator size="small" color="#6366F1" />
                <Text className="font-sans text-xs text-secondary">Verifying…</Text>
              </View>
            ) : error ? (
              <Text className="mt-6 text-center font-sans text-xs text-red-500">{error}</Text>
            ) : (
              <Text className="mt-6 text-center font-sans text-xs text-secondary">
                Take your time. Your code is valid for a few minutes.
              </Text>
            )}
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
