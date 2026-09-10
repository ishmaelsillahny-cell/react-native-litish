import type { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  {
    id: "letter-a",
    unitId: "unit-letters-sounds",
    title: "Letter A",
    description: "Learn to recognize and hear the letter A.",
    type: "letter",
    level: "beginner",
    xp: 10,
    estimatedMinutes: 3,
    goals: [
      { id: "goal-1", description: "Recognize the uppercase and lowercase letter A." },
      { id: "goal-2", description: "Hear and repeat the sound the letter A makes." },
    ],
    vocabulary: [
      {
        id: "vocab-apple",
        word: "Apple",
        audio: "word-apple",
        exampleSentence: "A is for Apple.",
      },
    ],
    activities: [
      {
        id: "letter-a-trace",
        type: "trace-letter",
        instruction: "Trace the letter A.",
        audioInstruction: "instruction-trace-letter",
        targetText: "A",
      },
      {
        id: "letter-a-listen",
        type: "listen-and-choose",
        instruction: "Listen to the sound. Choose the matching letter.",
        audioInstruction: "sound-a",
        options: [
          { id: "option-a", label: "A", audio: "sound-a", isCorrect: true },
          { id: "option-b", label: "B", audio: "sound-b", isCorrect: false },
          { id: "option-c", label: "C", audio: "sound-c", isCorrect: false },
        ],
      },
    ],
    aiTeacherPrompts: [
      {
        id: "letter-a-intro",
        trigger: "intro",
        text: "Hello! Today we're going to learn the letter A. Take your time.",
      },
      {
        id: "letter-a-encouragement",
        trigger: "encouragement",
        text: "You're doing great. Let's try again.",
      },
      {
        id: "letter-a-completion",
        trigger: "completion",
        text: "Great work! You've learned the letter A.",
      },
    ],
  },
  {
    id: "letter-b",
    unitId: "unit-letters-sounds",
    title: "Letter B",
    description: "Learn to recognize and hear the letter B.",
    type: "letter",
    level: "beginner",
    xp: 10,
    estimatedMinutes: 3,
    goals: [
      { id: "goal-1", description: "Recognize the uppercase and lowercase letter B." },
      { id: "goal-2", description: "Hear and repeat the sound the letter B makes." },
    ],
    vocabulary: [
      {
        id: "vocab-ball",
        word: "Ball",
        audio: "word-ball",
        exampleSentence: "B is for Ball.",
      },
    ],
    activities: [
      {
        id: "letter-b-trace",
        type: "trace-letter",
        instruction: "Trace the letter B.",
        audioInstruction: "instruction-trace-letter",
        targetText: "B",
      },
      {
        id: "letter-b-listen",
        type: "listen-and-choose",
        instruction: "Listen to the sound. Choose the matching letter.",
        audioInstruction: "sound-b",
        options: [
          { id: "option-a", label: "A", audio: "sound-a", isCorrect: false },
          { id: "option-b", label: "B", audio: "sound-b", isCorrect: true },
          { id: "option-c", label: "C", audio: "sound-c", isCorrect: false },
        ],
      },
    ],
    aiTeacherPrompts: [
      {
        id: "letter-b-intro",
        trigger: "intro",
        text: "Let's learn the letter B together.",
      },
      {
        id: "letter-b-completion",
        trigger: "completion",
        text: "Nice work! You've learned the letter B.",
      },
    ],
  },
  {
    id: "read-your-name",
    unitId: "unit-everyday-words",
    title: "Read Your Name",
    description: "Practice reading names and simple personal words.",
    type: "word",
    level: "basic",
    xp: 15,
    estimatedMinutes: 5,
    goals: [
      { id: "goal-1", description: "Recognize the word 'name' when you see it." },
      { id: "goal-2", description: "Read first name and last name as separate words." },
    ],
    vocabulary: [
      { id: "vocab-name", word: "Name", audio: "word-name", exampleSentence: "What is your name?" },
      { id: "vocab-first-name", word: "First Name", audio: "word-first-name" },
      { id: "vocab-last-name", word: "Last Name", audio: "word-last-name" },
    ],
    activities: [
      {
        id: "read-your-name-choose",
        type: "multiple-choice",
        instruction: "Which word means 'Name'?",
        options: [
          { id: "option-name", label: "Name", isCorrect: true },
          { id: "option-age", label: "Age", isCorrect: false },
          { id: "option-city", label: "City", isCorrect: false },
        ],
      },
      {
        id: "read-your-name-read-aloud",
        type: "read-aloud",
        instruction: "Read this word out loud.",
        targetText: "Name",
      },
    ],
    aiTeacherPrompts: [
      {
        id: "read-your-name-intro",
        trigger: "intro",
        text: "Let's practice reading your name and other personal words.",
      },
      {
        id: "read-your-name-completion",
        trigger: "completion",
        text: "Well done! You can now read these personal words.",
      },
    ],
  },
  {
    id: "sight-words-1",
    unitId: "unit-everyday-words",
    title: "Common Words",
    description: "Learn to read common words you see every day.",
    type: "word",
    level: "basic",
    xp: 15,
    estimatedMinutes: 5,
    goals: [
      { id: "goal-1", description: "Recognize five common everyday words." },
    ],
    vocabulary: [
      { id: "vocab-the", word: "the", audio: "word-the" },
      { id: "vocab-and", word: "and", audio: "word-and" },
      { id: "vocab-is", word: "is", audio: "word-is" },
      { id: "vocab-you", word: "you", audio: "word-you" },
      { id: "vocab-my", word: "my", audio: "word-my" },
    ],
    activities: [
      {
        id: "sight-words-1-listen",
        type: "listen-and-choose",
        instruction: "Listen to the word. Choose the word you hear.",
        audioInstruction: "word-my",
        options: [
          { id: "option-my", label: "my", audio: "word-my", isCorrect: true },
          { id: "option-the", label: "the", audio: "word-the", isCorrect: false },
          { id: "option-you", label: "you", audio: "word-you", isCorrect: false },
        ],
      },
      {
        id: "sight-words-1-match",
        type: "match-pairs",
        instruction: "Match each word to its sound.",
        options: [
          { id: "option-the", label: "the", audio: "word-the", isCorrect: true },
          { id: "option-and", label: "and", audio: "word-and", isCorrect: true },
          { id: "option-is", label: "is", audio: "word-is", isCorrect: true },
        ],
      },
    ],
    aiTeacherPrompts: [
      {
        id: "sight-words-1-encouragement",
        trigger: "encouragement",
        text: "Take your time. Listen again if you need to.",
      },
    ],
  },
  {
    id: "read-a-text-message",
    unitId: "unit-daily-life-reading",
    title: "Read a Text Message",
    description: "Practice reading short text messages you might get from friends or family.",
    type: "chat",
    level: "daily-life",
    xp: 20,
    estimatedMinutes: 6,
    goals: [
      { id: "goal-1", description: "Read a short text message from start to finish." },
      { id: "goal-2", description: "Understand what the message is asking you to do." },
    ],
    phrases: [
      {
        id: "phrase-text-1",
        text: "Hi, are you coming today?",
        context: "text-message",
        audio: "phrase-text-1",
      },
      {
        id: "phrase-text-2",
        text: "Call me when you can.",
        context: "text-message",
        audio: "phrase-text-2",
      },
    ],
    activities: [
      {
        id: "read-a-text-message-read-aloud",
        type: "read-aloud",
        instruction: "Read this message out loud.",
        targetText: "Hi, are you coming today?",
      },
      {
        id: "read-a-text-message-comprehension",
        type: "multiple-choice",
        instruction: "What is this message asking you to do?",
        options: [
          { id: "option-call", label: "Come today", isCorrect: true },
          { id: "option-ignore", label: "Ignore it", isCorrect: false },
          { id: "option-delete", label: "Delete it", isCorrect: false },
        ],
      },
    ],
    aiTeacherPrompts: [
      {
        id: "read-a-text-message-intro",
        trigger: "intro",
        text: "Text messages are a great thing to practice. Let's read one together.",
      },
      {
        id: "read-a-text-message-completion",
        trigger: "completion",
        text: "Great job reading that message on your own.",
      },
    ],
  },
  {
    id: "read-an-appointment-reminder",
    unitId: "unit-daily-life-reading",
    title: "Read a Doctor Appointment Reminder",
    description: "Practice reading appointment reminders so you never miss one.",
    type: "form",
    level: "daily-life",
    xp: 20,
    estimatedMinutes: 6,
    goals: [
      { id: "goal-1", description: "Find the date and time in an appointment reminder." },
    ],
    phrases: [
      {
        id: "phrase-appointment-1",
        text: "Your appointment is on Monday at 10:00 AM.",
        context: "appointment",
        audio: "phrase-appointment-1",
      },
    ],
    activities: [
      {
        id: "read-an-appointment-reminder-comprehension",
        type: "multiple-choice",
        instruction: "What day is the appointment?",
        options: [
          { id: "option-monday", label: "Monday", isCorrect: true },
          { id: "option-tuesday", label: "Tuesday", isCorrect: false },
          { id: "option-friday", label: "Friday", isCorrect: false },
        ],
      },
      {
        id: "read-an-appointment-reminder-read-aloud",
        type: "read-aloud",
        instruction: "Read the appointment reminder out loud.",
        targetText: "Your appointment is on Monday at 10:00 AM.",
      },
    ],
    aiTeacherPrompts: [
      {
        id: "read-an-appointment-reminder-intro",
        trigger: "intro",
        text: "Appointment reminders can be tricky. Let's practice reading one.",
      },
      {
        id: "read-an-appointment-reminder-completion",
        trigger: "completion",
        text: "You got it! Now you know how to find the date and time.",
      },
    ],
  },
];

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === lessonId);
}

export function getLessonsByUnitId(unitId: string): Lesson[] {
  return lessons.filter((lesson) => lesson.unitId === unitId);
}
