export type LiteracyLevel = "beginner" | "basic" | "daily-life";

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

export type ActivityType =
  | "multiple-choice"
  | "listen-and-choose"
  | "match-pairs"
  | "trace-letter"
  | "read-aloud";

export type ActivityOption = {
  id: string;
  label: string;
  audio?: string;
  isCorrect: boolean;
};

export type Activity = {
  id: string;
  type: ActivityType;
  instruction: string;
  audioInstruction?: string;
  /** Choices for multiple-choice, listen-and-choose, and match-pairs activities. */
  options?: ActivityOption[];
  /** Text the learner traces or reads aloud, for trace-letter and read-aloud activities. */
  targetText?: string;
};

export type VocabularyWord = {
  id: string;
  word: string;
  audio?: string;
  exampleSentence?: string;
};

export type PhraseContext =
  | "greeting"
  | "text-message"
  | "form"
  | "sign"
  | "appointment"
  | "mail";

export type Phrase = {
  id: string;
  text: string;
  context: PhraseContext;
  audio?: string;
};

export type LessonGoal = {
  id: string;
  description: string;
};

export type AITeacherPromptTrigger =
  | "intro"
  | "encouragement"
  | "correction"
  | "completion";

/** Scripted line for the future audio-based Vision Agent AI teacher. */
export type AITeacherPrompt = {
  id: string;
  trigger: AITeacherPromptTrigger;
  text: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  title: string;
  description: string;
  type: LessonType;
  level: LiteracyLevel;
  xp: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  vocabulary?: VocabularyWord[];
  phrases?: Phrase[];
  activities: Activity[];
  aiTeacherPrompts?: AITeacherPrompt[];
};

export type Unit = {
  id: string;
  title: string;
  description: string;
  level: LiteracyLevel;
  order: number;
  lessonIds: string[];
};
