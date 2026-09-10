import { router } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SpeechOptionCard } from "@/components/SpeechOptionCard";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

type SpeechSpeed = "normal" | "slower";

export default function SpokenInstructions() {
  const [speechSpeed, setSpeechSpeed] = useState<SpeechSpeed>("normal");
  const [replayEachInstruction, setReplayEachInstruction] = useState(false);
  const [highlightWordsWhileSpeaking, setHighlightWordsWhileSpeaking] =
    useState(false);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const handlePreviewPress = () => {
    if (isPreviewPlaying) {
      Speech.stop();
      setIsPreviewPlaying(false);
      return;
    }

    setIsPreviewPlaying(true);
    Speech.speak("Tap Continue to begin.", {
      rate: speechSpeed === "slower" ? 0.65 : 1,
      onDone: () => setIsPreviewPlaying(false),
      onStopped: () => setIsPreviewPlaying(false),
      onError: () => setIsPreviewPlaying(false),
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingTop: 8,
          paddingBottom: 24,
        }}
      >
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            hitSlop={12}
            className="h-10 w-10 items-center justify-center"
          >
            <Text className="text-2xl text-ink">‹</Text>
          </TouchableOpacity>

          <View className="ml-1 flex-1">
            <Text className="font-sans-bold text-lg text-ink">
              Set up spoken instructions
            </Text>
            <Text className="font-sans text-xs text-secondary">
              LitIsh speaks every screen in English
            </Text>
          </View>

          <TouchableOpacity
            onPress={handlePreviewPress}
            activeOpacity={0.85}
            className="h-12 w-12 items-center justify-center rounded-full bg-indigo"
          >
            <Text className="text-lg text-white">
              {isPreviewPlaying ? "❚❚" : "▶"}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 rounded-2xl bg-blue/10 px-4 py-3">
          <Text className="font-sans text-sm text-ink">
            Choose the English speaking speed that is easiest to follow. You
            can replay instructions anytime.
          </Text>
        </View>

        <View className="mt-4 gap-3">
          <View accessibilityRole="radiogroup" className="gap-3">
            <SpeechOptionCard
              icon="▶"
              title="Normal speed"
              description="Clear everyday spoken English"
              selected={speechSpeed === "normal"}
              controlType="radio"
              onPress={() => setSpeechSpeed("normal")}
            />

            <SpeechOptionCard
              icon="½"
              title="Slower speed"
              description="More time between words"
              selected={speechSpeed === "slower"}
              controlType="radio"
              onPress={() => setSpeechSpeed("slower")}
            />
          </View>

          <SpeechOptionCard
            icon="↻"
            title="Replay each instruction"
            description="Automatically say it twice"
            selected={replayEachInstruction}
            controlType="switch"
            onPress={() => setReplayEachInstruction((current) => !current)}
          />

          <SpeechOptionCard
            icon="Aa"
            title="Highlight words while speaking"
            description="Connect spoken English to print"
            selected={highlightWordsWhileSpeaking}
            controlType="switch"
            onPress={() =>
              setHighlightWordsWhileSpeaking((current) => !current)
            }
          />

          <View className="flex-row items-center gap-3 rounded-2xl border border-gold bg-gold/10 p-4">
            <Image
              source={images.mascotLogo}
              style={{ width: 40, height: 40, borderRadius: 20 }}
              resizeMode="cover"
            />
            <View className="flex-1">
              <Text className="font-sans-bold text-base text-ink">
                Try it now
              </Text>
              <Text className="mt-0.5 font-sans text-xs text-secondary">
                &ldquo;Tap Continue to begin.&rdquo;
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="px-6 pb-4">
        <TouchableOpacity
          className="flex-row items-center justify-center rounded-full bg-indigo py-4"
          activeOpacity={0.85}
          onPress={() => router.back()}
        >
          <Text className="font-sans-bold text-base text-white">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
