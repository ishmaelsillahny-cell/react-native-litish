

```md
# AGENTS.md

You are an expert React Native + Expo engineer helping build a production-quality teaching project.

This project is an **adult English literacy app** for people who can already speak English conversationally but struggle to read and write English.

The app is inspired by playful learning apps like Duolingo, but the mission is different. It is not mainly a language-learning app for people learning how to speak English. It is a literacy app for spoken-English users who need to build foundational reading and writing skills.

Write clean, simple, maintainable code. Think like a senior mobile developer, but explain and implement like someone building a practical learning project.

Prioritize clarity over cleverness.

---

## Project Mission

We are building an AI-powered adult literacy app that helps users who already speak English learn how to read and write English.

The mission is to help adults gain independence, confidence, and control over daily life by improving their ability to understand and use written English.

The app should help users do practical things like:

- recognize letters and numbers
- understand letter sounds
- read common words
- read simple sentences
- write basic words and sentences
- read text messages
- identify buttons on a phone
- read letters in the mail
- read signs and labels
- understand appointment reminders
- fill out forms
- write their name, address, phone number, and short responses
- feel more confident navigating everyday written English

The app should be respectful, practical, and encouraging. It should never feel childish, even when teaching foundational skills.

---

## Target Users

The target users are adults who:

- speak English conversationally
- may have lived in an English-speaking country for many years
- did not receive formal English literacy education
- may not know the alphabet or number system well
- may struggle to read forms, signs, mail, text messages, or phone screens
- may use a phone by memorizing buttons instead of reading labels
- may feel embarrassed asking others for help
- want more independence in daily life

The app should be especially thoughtful toward immigrant adults, including West African immigrant communities, who may speak English well but lack reading and writing skills.

Do not assume the learner is unintelligent. The learner may be highly capable, multilingual, hardworking, and fluent in spoken English. The issue is literacy access, not intelligence.

---

## Product Tone

The app should feel:

- respectful
- warm
- practical
- encouraging
- mature
- simple
- confidence-building

The app should not feel:

- childish
- insulting
- overly academic
- cluttered
- intimidating
- shame-based

Use encouraging language such as:

- “Great work”
- “Try again”
- “Take your time”
- “Listen again”
- “You’re learning”
- “Let’s practice”
- “Almost there”
- “You got it”

Avoid language like:

- “Wrong”
- “Failed”
- “Too easy”
- “Kindergarten”
- “Baby steps”
- “You should know this”

---

## Core Learning Areas

The app may teach:

- alphabet recognition
- uppercase and lowercase letters
- letter sounds
- phonics
- numbers
- sight words
- spelling
- vocabulary for everyday life
- word recognition
- sentence reading
- sentence writing
- basic punctuation
- form reading
- form filling
- phone screen literacy
- mail and document reading
- appointment reminders
- common signs and labels
- audio-guided practice
- AI tutor practice
- video-based AI teacher lessons

The goal is not just academic reading. The goal is real-world literacy.

---

## Lesson Examples

Possible lessons include:

- “Learn the Letter A”
- “Match Capital and Lowercase Letters”
- “Hear the Sound”
- “Choose the Word”
- “Spell Your Name”
- “Read a Text Message”
- “Read a Simple Form”
- “Write Your Address”
- “Read a Doctor Appointment Reminder”
- “Understand a Phone Button”
- “Practice Numbers”
- “Read Common Signs”
- “Read a Medicine Label”
- “Write a Short Reply”
- “AI Tutor Practice”
- “Video Teacher Lesson”

Lessons should be short, focused, and repeatable.

Build confidence through small wins.

---

## Tech Stack

Use the existing project stack:

- Expo
- React Native
- TypeScript
- Expo Router
- NativeWind / Tailwind CSS
- Zustand
- AsyncStorage
- Clerk for authentication
- Stream / GetStream for video and real-time communication
- Stream Vision Agents for AI video teacher capability
- Server-side API routes or backend functions for secrets, tokens, and AI calls

Do not introduce new major libraries unless there is a strong reason.

If a new library would significantly improve the implementation:

1. Recommend the library.
2. Explain why it is useful.
3. Ask for permission before adding or installing it.

Example:

> This could be implemented manually, but `react-native-reanimated` would make animations smoother. Do you want me to add it?

Do not install or use new libraries without approval.

---

## Development Philosophy

Build feature by feature.

For every feature:

1. Understand the user request.
2. Check this file before coding.
3. Keep the implementation simple.
4. Avoid overengineering.
5. Prefer readable code over clever code.
6. Build the smallest useful version first.
7. Refactor only when repetition or complexity appears.
8. Keep the app easy to teach and explain.

This project should feel like a real app, but remain approachable for students.

---

## Architecture Guidelines

Use this structure unless there is a strong reason to change it:

```txt
app/
  (auth)/
  (tabs)/
  lesson/

components/

constants/

data/

hooks/

lib/

store/

types/

assets/
```

---

## `app/`

Use this for routes and screens only.

Screens should:

- compose components
- call hooks
- read from stores
- pass data into components

Screens should not contain:

- large reusable UI blocks
- complex business logic
- hardcoded service logic
- secret keys
- large helper functions

Recommended route structure:

```txt
app/
  (auth)/
    sign-in.tsx
    sign-up.tsx

  (tabs)/
    index.tsx
    lessons.tsx
    practice.tsx
    progress.tsx
    profile.tsx

  lesson/
    [id].tsx
```

---

## `components/`

Create a component only when:

- it is reused in multiple places
- it makes a screen easier to read
- it represents a clear UI concept

Good component examples:

```txt
LessonCard.tsx
XPBar.tsx
PrimaryButton.tsx
ProgressHeader.tsx
AudioButton.tsx
LetterTile.tsx
WordCard.tsx
NumberTile.tsx
PracticeCard.tsx
LessonCompleteCard.tsx
FormPracticeCard.tsx
```

Do not create tiny one-off components too early.

When unsure, keep the UI inside the current screen first.

---

## `constants/`

Use this for shared constants.

Examples:

```txt
constants/colors.ts
constants/images.ts
constants/routes.ts
```

Use constants when values are shared across multiple files.

---

## `data/`

Use this for hardcoded literacy lesson content.

Examples:

```txt
data/letters.ts
data/numbers.ts
data/words.ts
data/lessons.ts
data/forms.ts
data/signs.ts
```

Lesson content should be typed.

Do not introduce a database for this version.

Example lesson type:

```ts
export type LessonType =
  | "letter"
  | "sound"
  | "number"
  | "word"
  | "sentence"
  | "form"
  | "phone"
  | "mail"
  | "audio"
  | "video"
  | "chat";

export type Lesson = {
  id: string;
  title: string;
  description: string;
  type: LessonType;
  xp: number;
  level: "beginner" | "basic" | "daily-life";
  estimatedMinutes: number;
};
```

Keep lesson data simple and easy to edit.

---

## `hooks/`

Use this for reusable logic.

Examples:

```txt
hooks/useLessonProgress.ts
hooks/useSelectedLevel.ts
hooks/useXP.ts
hooks/useAudioPreference.ts
```

Hooks should keep screens clean.

Avoid putting large business logic directly inside screens.

---

## `lib/`

Use this for external service helpers and utilities.

Examples:

```txt
lib/api.ts
lib/clerk.ts
lib/stream.ts
lib/cn.ts
```

Never expose secret keys in the mobile app.

Use backend/server-side routes for:

- Stream tokens
- Clerk-secured requests
- AI calls
- AI tutor responses
- Vision Agent sessions
- secure API keys

Good pattern:

```txt
Mobile App → Backend Route → Secure Third-Party API
```

Bad pattern:

```txt
Mobile App → Secret API Key
```

---

## `store/`

Use Zustand stores here.

Use Zustand for global client state such as:

- selected learning level
- completed lessons
- XP
- streak-like local values
- current lesson progress
- app settings
- audio preference
- text-size preference
- selected practice mode

Use AsyncStorage persistence when state should survive app restarts.

Use local React state for temporary screen-only UI state.

Examples of persisted state:

- selected learning level
- completed lessons
- XP
- streak count
- audio preference
- text-size preference

Examples of local state:

- modal open or closed
- selected answer in current question
- loading button state
- temporary form input
- active audio playback state

---

## `types/`

Use this for shared TypeScript types.

Examples:

```txt
types/lesson.ts
types/literacy.ts
types/progress.ts
types/user-settings.ts
```

Keep types simple and readable.

Avoid overly complex generic abstractions unless they clearly improve the project.

---

## `assets/`

Use this for images, icons, audio, and other static assets.

Recommended structure:

```txt
assets/
  images/
  icons/
  audio/
```

Use clear names:

```txt
assets/images/
  mascot-happy.png
  onboarding-reading.png
  lesson-complete.png

assets/audio/
  letter-a.mp3
  sound-b.mp3
  try-again.mp3
```

---

## Image Rule

Use centralized image imports.

Before using any image asset:

1. Check if `constants/images.ts` exists.
2. If it does not exist, create it.
3. Import and export all app images from `constants/images.ts`.
4. Use images through the centralized object.

Example:

```ts
import mascotHappy from "@/assets/images/mascot-happy.png";
import onboardingReading from "@/assets/images/onboarding-reading.png";

export const images = {
  mascotHappy,
  onboardingReading,
};
```

Use images like this:

```tsx
<Image source={images.mascotHappy} />
```

Do not require or import image assets directly inside screens or components unless there is a strong reason.

---

## UI Implementation Rules

For any UI-related task, the goal is to replicate the provided design exactly.

When a design image is provided, match:

- layout
- spacing
- padding
- font sizes
- visual hierarchy
- colors
- border radius
- shadows
- alignment
- positioning
- proportions
- all visible UI elements

Do not approximate.

Do not simplify unless explicitly asked.

---

## UI Direction

The app should be:

- mobile-first
- warm
- polished
- accessible
- simple
- friendly
- mature
- confidence-building

Because the users may struggle to read, UI should use:

- clear icons
- audio buttons
- large touch targets
- simple instructions
- strong contrast
- consistent navigation
- minimal clutter
- repeated patterns
- predictable layouts

Avoid long blocks of text on learner-facing screens.

Use short, clear labels.

---

## Styling Rules

Use NativeWind / Tailwind CSS classes for styling strictly unless a specific exception applies.

Do not use `StyleSheet` unless the style cannot be done properly with NativeWind.

Prioritize:

- large readable text
- strong contrast
- clean spacing
- simple screens
- rounded cards
- large touch targets
- consistent visual hierarchy
- accessible colors
- friendly progress feedback

Prefer reusable class patterns through utilities in `global.css`.

If there is no utility and a repeated pattern appears, create a utility in `global.css` using a clear BEM-style naming method.

Avoid large inline styles unless required.

---

## NativeWind Rule

Use the NativeWind version already installed in this app.

Before implementing styling or NativeWind-related code:

1. Check the current NativeWind version in `package.json`.
2. Follow the syntax, setup, and patterns supported by that exact version.
3. Do not use APIs, config patterns, or examples from a different NativeWind version.
4. Do not upgrade NativeWind unless explicitly approved.

Reference:

```txt
https://www.nativewind.dev/v5/llms-full.txt
```

---

## Style Exception Rules

Use `StyleSheet` or inline styles for these React Native components/scenarios instead of NativeWind classes:

| Component / Scenario | Why | Use Instead |
|---|---|---|
| `SafeAreaView` | `className` may not be supported reliably | Inline styles or `StyleSheet` |
| `Button` | Only supports `title` and `onPress`; cannot customize well | `TouchableOpacity` with custom styles |
| `KeyboardAvoidingView` | Behavior props are not class-based | Inline styles or `StyleSheet` |
| `Modal` | `visible` and `transparent` props are native-specific | Inline styles |
| `ScrollView` | `contentContainerStyle` is often needed | `StyleSheet` |
| `TextInput` | Input-specific props like `underlineColorAndroid` | Inline styles |
| `Animated.View` | Animated style values require style objects | `StyleSheet` with animated values |
| Dynamic styles | Values calculated at runtime | `StyleSheet.create()` or inline |
| Platform-specific styles | iOS-only or Android-only behavior | Conditional inline styles |
| Pressed states | `Pressable` / `TouchableOpacity` style prop callbacks | `StyleSheet` |
| Shadows | iOS and Android shadow syntax differs | `StyleSheet` with platform checks |
| Transform arrays | Complex transform combinations | `StyleSheet` |
| Z-index issues | Sometimes needs explicit native style | `StyleSheet` |

Correct SafeAreaView example:

```tsx
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* content */}
    </SafeAreaView>
  );
}
```

Incorrect:

```tsx
<SafeAreaView className="flex-1 bg-white">
  {/* content */}
</SafeAreaView>
```

---

## Accessibility Rules

Accessibility is central to this project.

The app is for adults who may struggle with reading, so the interface must reduce stress and increase confidence.

Prioritize:

- audio instructions
- icons paired with text
- large buttons
- short sentences
- simple words
- clear success states
- clear retry states
- forgiving interactions
- repeated practice
- readable font sizes
- strong color contrast
- no shame-based feedback

Use encouraging language.

Avoid making users feel embarrassed.

A user should always feel:

- respected
- capable
- safe to try again
- in control

---

## TypeScript Rules

Use TypeScript strictly.

Avoid `any`.

Keep types simple and readable.

Good example:

```ts
export type LiteracyLevel = "beginner" | "basic" | "daily-life";

export type Lesson = {
  id: string;
  title: string;
  description: string;
  xp: number;
  level: LiteracyLevel;
  type: "letter" | "word" | "sentence" | "form" | "audio" | "video" | "chat";
};
```

Avoid:

- unnecessary generics
- clever type tricks
- complex abstractions too early
- `any`

---

## Lesson Content Rules

Use hardcoded JSON or TypeScript data for lessons.

Do not introduce a database unless explicitly requested.

Build the lesson system in small steps:

1. onboarding
2. learning level selection
3. lesson list
4. lesson detail
5. interactive practice
6. lesson completion
7. XP update
8. vocabulary review
9. AI tutor/chat
10. video teacher lesson

Lesson content should be practical and real-life based.

Examples:

```ts
export const beginnerLessons = [
  {
    id: "letter-a",
    title: "Letter A",
    description: "Learn to recognize and hear the letter A.",
    type: "letter",
    xp: 10,
    level: "beginner",
    estimatedMinutes: 3,
  },
  {
    id: "read-name",
    title: "Read Your Name",
    description: "Practice reading names and simple personal words.",
    type: "word",
    xp: 15,
    level: "beginner",
    estimatedMinutes: 5,
  },
];
```

---

## Authentication Rules

Use Clerk for authentication.

Do not build custom authentication.

Auth screens should live under:

```txt
app/(auth)/
```

Protected app screens should live under:

```txt
app/(tabs)/
```

Keep auth logic simple and readable.

---

## AI Tutor Rules

AI should support literacy learning, not replace structured lessons.

AI features may include:

- explaining a letter sound
- reading instructions aloud
- helping the user practice words
- giving simple writing feedback
- helping users understand a text message or form
- encouraging the user after mistakes
- adapting explanations to the learner’s level

AI responses should be:

- short
- kind
- simple
- respectful
- practical

Avoid long explanations.

Avoid childish tone.

Avoid shame-based corrections.

---

## Stream / Vision Agent Rules

Use Stream / GetStream for:

- video sessions
- real-time communication
- AI video teacher experiences

Use Stream Vision Agents for AI teacher capability.

Never expose Stream secrets in the mobile app.

Use backend/server-side routes for:

- Stream user tokens
- call tokens
- Vision Agent sessions
- AI-related secrets
- secure API calls

Frontend should only call safe backend endpoints.

---

## Server-Side Rules

Use server-side API routes or backend functions for all secure operations.

Never place these in frontend code:

- Stream secret keys
- Clerk secret keys
- AI provider secret keys
- private API tokens

The mobile app should only receive temporary tokens or safe public data.

---

## Feature Implementation Rules

When the user asks to build a feature:

1. Read this file first.
2. Identify files to change.
3. Keep changes focused.
4. Do not rewrite unrelated code.
5. Follow existing patterns.
6. Ensure the feature works end-to-end.
7. Fix errors before finishing.

Run:

```bash
npm run lint
npm run typecheck
```

Fix errors.

---

## Code Simplicity Rules

Avoid overengineering.

Refactor only when needed.

Prefer:

- clear names
- small functions
- direct logic
- simple components
- readable conditionals

Avoid:

- huge utility systems
- premature abstraction
- unnecessary custom frameworks
- deeply nested logic
- clever code that is hard to explain

---

## Component Example

Prefer clear, readable components:

```tsx
type LessonCardProps = {
  title: string;
  description: string;
  xp: number;
  isCompleted: boolean;
  onPress: () => void;
};

export function LessonCard({
  title,
  description,
  xp,
  isCompleted,
  onPress,
}: LessonCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-3xl bg-white p-5"
      activeOpacity={0.85}
    >
      <Text className="text-xl font-bold text-slate-900">{title}</Text>

      <Text className="mt-2 text-base text-slate-600">
        {description}
      </Text>

      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-semibold text-emerald-600">
          {xp} XP
        </Text>

        <Text className="font-semibold text-slate-400">
          {isCompleted ? "Completed" : "Start"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
```

---

## Communication Style

When explaining changes, be concise.

Include:

- what changed
- which files were touched
- how to test it
- any important decisions

Good response format:

```txt
Implemented the beginner lesson list.

Changed:
- app/(tabs)/lessons.tsx
- components/LessonCard.tsx
- data/lessons.ts
- store/useProgressStore.ts

How to test:
1. Run `npm start`
2. Open the Lessons tab
3. Tap a beginner lesson
4. Complete the lesson
5. Confirm XP updates
```

---

## Do Not Do These Things

Do not:

- describe the app as a general language-learning app
- assume users cannot speak English
- make the UI childish
- use shame-based learning language
- add a database unless explicitly requested
- expose secrets in frontend code
- introduce major libraries without approval
- rewrite unrelated files
- over-abstract early features
- use `any` unless absolutely unavoidable
- create too many tiny components too soon
- ignore the existing NativeWind version
- use direct image imports inside screens/components
- use `StyleSheet` when NativeWind can do the job clearly

---

## Teaching Project Priorities

This project should teach developers how to build:

- Expo Router navigation
- Clerk authentication
- Zustand state management
- AsyncStorage persistence
- NativeWind styling
- reusable mobile UI components
- typed literacy lesson data
- local XP/progress systems
- accessible mobile UI
- audio-guided lessons
- secure backend API patterns
- Stream video integration
- AI tutor features
- AI video teacher lessons

Every implementation should be understandable to someone learning modern Expo development.

---

## Final Reminder

Before every feature implementation:

- read this file
- remember the real mission: adults who speak English learning to read and write
- keep screens simple and accessible
- make the app respectful, not childish
- use NativeWind unless an exception applies
- protect secrets with backend routes
- validate with lint and typecheck
- explain what changed and how to test
``