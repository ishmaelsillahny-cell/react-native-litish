Read AGENTS.md first and follow it strictly.

Create the learning content system using hardcoded TypeScript data. Add `types/learning.ts`, `data/units.ts`, and `data/lessons.ts`. Define supported english language, units, lessons, activities, vocabulary, phrases, lesson goals, and AI teacher prompts for future audio-based Vision Agent lessons. Include a small beginner-friendly sample dataset for a few languages and keep it simple, typed, and easy to extend.

# 06 — Content System

## Purpose

LitIsh is an English literacy app for adults and non-native English speakers who can already speak some English but need help learning to read and write it.

The app is not a general language-learning product. It does not teach multiple target languages, prioritize conversation practice, or organize lessons around travel phrases and vocabulary translation. LitIsh teaches learners how spoken English connects to written English so they can read, write, type, and understand the English they use in everyday life.

The content system must support a clear progression from print awareness to practical independence:

1. Recognize English letters and numbers.
2. Connect letters and letter groups to English sounds.
3. Blend sounds to read words.
4. Segment words into sounds to spell them.
5. Recognize common words automatically.
6. Read and build useful sentences.
7. Write and type personal information.
8. Understand forms, messages, signs, and everyday documents.
9. Navigate common phone and app interfaces written in English.
10. Apply literacy skills independently in real situations.

---

## Learner Profile

### Primary learner

The primary learner:

- is an adult or older teen;
- can speak and understand some everyday English;
- may have limited reading and writing ability in English;
- may be fully literate, partly literate, or not literate in another language;
- may not know English letter names, letter sounds, spelling patterns, or punctuation;
- may need to read forms, texts, schedules, medicine labels, workplace notices, school messages, and phone screens;
- may have limited experience with keyboards, forms, or app conventions; and
- may feel embarrassment or anxiety about asking other people for help.

### Content assumptions

Content must never assume that a learner:

- can read instructions before hearing them;
- knows alphabetical order;
- understands uppercase and lowercase letters;
- knows that one English sound can have multiple spellings;
- knows that one letter can represent different sounds;
- can identify a word boundary, sentence, space, period, or question mark;
- knows how to use a keyboard, Shift key, Backspace key, text field, dropdown, checkbox, or Submit button;
- understands common document abbreviations such as `DOB`, `Apt.`, `Dr.`, or `N/A`; or
- has a large English vocabulary simply because they can hold a conversation.

Use familiar spoken words to introduce unfamiliar print whenever possible. The learner should usually know what a word means before being asked to decode or spell it.

---

## Content Principles

### 1. English literacy is the subject

Every activity must strengthen English reading, writing, spelling, typing, or print navigation. Speaking and listening support literacy; they are not separate course goals.

Good: Hear **name**, look at `NAME`, and select the matching word.

Not appropriate: Practice ordering food through an open-ended spoken conversation.

### 2. Spoken English is the bridge to print

Instructions and new examples should be available as audio. Highlight written words while audio plays so learners can connect speech to print.

Audio serves three distinct purposes:

- **Instruction audio:** explains what to do.
- **Model audio:** demonstrates a letter sound, word, or sentence.
- **Meaning audio:** reads a practical message or document aloud for comprehension.

Do not use letter names when the learning goal is a letter sound. Keep the two explicit:

- Letter name: “This letter is M.”
- Letter sound: “M usually says /m/, as in map.”

### 3. Teach the code explicitly

Do not rely on learners to infer phonics patterns through exposure alone. Teach English print conventions directly and in a planned sequence.

Content should explicitly cover:

- letter names and shapes;
- uppercase and lowercase pairs;
- left-to-right directionality;
- spaces between words;
- consonant and short-vowel sounds;
- blending and segmenting;
- common consonant digraphs such as `sh`, `ch`, `th`, and `ck`;
- common vowel patterns such as silent `e`, vowel teams, and r-controlled vowels;
- common endings such as `-s`, `-es`, `-ed`, and `-ing`;
- high-frequency irregular words; and
- sentence capitalization and punctuation.

Use a consistent pronunciation model, but acknowledge common, valid English accent differences when they affect a task. Avoid exercises that depend on distinguishing sounds that are merged in many accents unless the distinction is essential to reading or spelling and is carefully taught.

### 4. Practical value should be visible

Foundational skills should lead quickly to adult uses. A lesson on the letter `A` can connect to **address**. A lesson on numbers can lead to reading a phone number, price, date, time, or bus route.

Each unit must state a functional outcome, such as:

- “Read and write your full name.”
- “Type your address into a form.”
- “Read the date and time of an appointment.”
- “Find the button to reset a password.”

### 5. Adult, respectful, and relevant

Use simple language without making the subject childish. Prefer adult names, places, objects, responsibilities, and situations.

Use:

- work schedules;
- school messages from a child’s teacher;
- rent notices;
- appointment reminders;
- transit signs;
- grocery labels;
- job applications;
- contact forms;
- prescription instructions; and
- phone settings.

Avoid nursery themes, baby talk, cartoonish praise, public leaderboards, countdown timers, shame, and failure language.

### 6. One new demand at a time

An activity should isolate its main learning goal. Do not test decoding, unfamiliar vocabulary, document navigation, and typing accuracy all at once.

For example, when the goal is typing an address:

- teach the address words first;
- show the learner where each part belongs;
- provide a model;
- then remove support gradually.

### 7. Review is cumulative and useful

New lessons should reuse previously taught letters, sound-spelling patterns, sight words, numbers, and interface words. Review should appear inside practical contexts, not only as flashcards.

### 8. Personal information stays private

Use fictional data by default. If the learner practices with real personal information, explain why it is requested, minimize storage, and provide a clearly labeled practice mode.

Never include real medical, immigration, financial, password, or government identification data in authored examples.

---

## Curriculum Architecture

Content is organized as:

`Course → Stage → Unit → Lesson → Activity → Prompt`

There is one target course: **English Reading and Writing**.

### Stages

#### Stage 1 — Print and Alphabet Foundations

Learner outcomes:

- follow English print from left to right and top to bottom;
- identify the 26 English letters;
- match uppercase and lowercase forms;
- hear and say common letter sounds;
- recognize spaces, words, and basic punctuation;
- write or trace letters; and
- find letters on a keyboard.

Example units:

- Print has meaning
- Letters in my name
- Uppercase and lowercase
- Consonant sounds
- Short vowel sounds
- The English alphabet
- Find and type letters

#### Stage 2 — Phonics and Word Reading

Learner outcomes:

- blend sounds to read simple words;
- segment spoken words to spell them;
- read common CVC words such as `map`, `sit`, and `job`;
- read common digraphs and consonant blends;
- use silent `e` and common vowel teams;
- read common word endings; and
- notice syllables in longer words.

Example units:

- Read short-vowel words
- `sh`, `ch`, `th`, and `ck`
- Beginning and ending blends
- Silent `e`
- Common vowel teams
- Word endings
- Read longer everyday words

#### Stage 3 — Sight Words and Spelling

Learner outcomes:

- read high-frequency words automatically;
- spell useful regular words from sounds;
- remember common irregular words;
- use word families and spelling patterns;
- distinguish commonly confused words in context; and
- check and correct a short word.

Prioritize words that are both frequent and useful in adult life, including:

`I`, `you`, `my`, `name`, `is`, `the`, `a`, `to`, `from`, `at`, `in`, `on`, `no`, `yes`, `date`, `time`, `phone`, `address`, `work`, `school`, `help`, `open`, and `closed`.

#### Stage 4 — Sentences and Short Messages

Learner outcomes:

- identify where a sentence begins and ends;
- use a capital letter and ending punctuation;
- build sentences in standard English word order;
- read short statements, questions, and instructions;
- write a short sentence using a model;
- read and write simple text messages; and
- understand common contractions and abbreviations.

Example units:

- My name is…
- I live at…
- Questions on a form
- Read a short text message
- Write a reply
- Capital letters and periods
- Dates, times, and appointments

#### Stage 5 — Personal Information, Numbers, and Forms

Learner outcomes:

- read, say, write, and type digits `0–9`;
- distinguish number words from digits;
- read phone numbers, prices, dates, times, ages, addresses, and postal codes;
- enter personal details in labeled fields;
- understand required and optional fields;
- use checkboxes, dropdowns, signatures, and Submit buttons; and
- review a form for missing or incorrect information.

Example units:

- My first and last name
- My address
- My phone number
- My date of birth
- Emergency contact
- Complete a simple form
- Check and submit a form

#### Stage 6 — Everyday Documents

Learner outcomes:

- identify the purpose of a document;
- scan for a name, date, time, place, amount, or action;
- follow short written instructions;
- recognize headings, labels, lists, tables, and warnings;
- distinguish important information from supporting detail; and
- decide what to do next.

Example document types:

- appointment reminder;
- work schedule;
- school notice;
- bill or payment notice;
- receipt;
- medicine label;
- transit schedule;
- simple job posting;
- application form;
- letter or email; and
- safety sign.

Health, legal, financial, and government examples must teach reading skills without presenting professional advice. Use fictional organizations and clearly fictional details.

#### Stage 7 — Phone and App Literacy

Learner outcomes:

- recognize common interface words and icons;
- open, close, scroll, tap, select, search, and go back;
- read notification and permission messages;
- enter text into a field;
- understand username, email, password, code, and verification;
- recover from a simple error; and
- identify suspicious or unsafe requests.

Priority interface words:

`Back`, `Next`, `Continue`, `Cancel`, `Save`, `Delete`, `Edit`, `Search`, `Send`, `Reply`, `Call`, `Settings`, `Menu`, `Log in`, `Log out`, `Create account`, `Email`, `Password`, `Show`, `Hide`, `Allow`, `Don’t allow`, `Try again`, `Required`, and `Submit`.

#### Stage 8 — Independent Practical Literacy

Learner outcomes:

- combine reading, writing, numbers, forms, and digital navigation;
- complete a realistic task with reduced support;
- check work and correct mistakes;
- use built-in help tools appropriately; and
- transfer learned skills to a new but similar situation.

Example capstones:

- read an appointment message and add the date to a calendar;
- complete a basic contact form;
- read a work schedule and identify the next shift;
- find a school event’s date, time, and location;
- create an account with fictional information; and
- read a short notice and choose the correct next action.

---

## Lesson Types

Every lesson type has one primary literacy goal. A lesson may contain multiple activity types, but it should not introduce more than one major new skill.

### 1. Letter lesson

Teaches a letter’s name, shape, common sound, uppercase/lowercase pair, handwriting motion, and keyboard location.

Example objective: “Recognize, hear, write, and type M and m.”

Recommended flow:

1. Hear the letter name.
2. See uppercase and lowercase forms.
3. Hear the target sound.
4. Connect the sound to familiar words.
5. Distinguish the letter from visually similar letters.
6. Trace or write it.
7. Find it on the keyboard.

### 2. Phonics lesson

Teaches a sound-spelling relationship and uses controlled words containing only previously taught patterns plus explicitly identified sight words.

Example objective: “Blend /m/ /a/ /p/ to read `map`.”

### 3. Sight-word lesson

Teaches a frequent word that the learner needs to recognize quickly. If part of the word is irregular, mark the regular and unexpected parts explicitly.

Example: In `the`, explain that `th` is familiar but the final sound is not the short sound learners may expect from `e`.

### 4. Spelling lesson

Moves from a known spoken word to its sounds, letters, and written form.

Recommended flow:

1. Hear and identify the word.
2. Stretch or segment its sounds.
3. Choose letters for each sound.
4. Build the word.
5. Write or type it from memory.
6. Compare it with the model and correct it.

### 5. Sentence-building lesson

Teaches word order, capitalization, spacing, punctuation, and meaning through useful sentences.

Example objective: “Build and write: `My name is Amina.`”

### 6. Numbers lesson

Teaches digits and number strings in context. Keep the learning target clear: recognizing a digit, typing a sequence, reading a date, or interpreting an amount are different skills.

Example objective: “Read and type a 10-digit phone number.”

### 7. Form lesson

Teaches labels, fields, response formats, and form actions. Begin with one field, then build toward a complete short form.

Example objective: “Enter a first name and last name in the correct fields.”

### 8. Everyday-document lesson

Uses a realistic but simplified document. The learner first identifies its purpose, then scans for key information, and finally chooses or writes an appropriate response.

Example objective: “Find the date and time in an appointment reminder.”

### 9. Phone/app navigation lesson

Uses a simulated interface so learners can practice safely. Teach both icon and text labels; never assume icons are universally understood.

Example objective: “Find `Settings`, open it, and select `Text size`.”

### 10. Review lesson

Mixes previously taught material through spaced retrieval. Review should include recognition, recall, and one practical application.

### 11. Real-life practice

Combines multiple mastered skills in a realistic task with limited hints. Real-life practice is untimed and can be repeated.

---

## Activity Types

Use stable activity names in content data and analytics.

| Activity type | Learner action | Best used for |
| --- | --- | --- |
| `listen_and_choose` | Hear a sound, word, or sentence and select its written match | Sound-print mapping, word recognition |
| `look_and_choose` | View a letter, word, sign, or field and select its meaning or match | Print recognition, document navigation |
| `match_pairs` | Match uppercase/lowercase, word/image, label/field, or sentence/meaning | Associations |
| `sound_sort` | Sort words by beginning, middle, or ending sound | Phonemic awareness and phonics |
| `blend_word` | Combine displayed sounds or letter tiles to read a word | Decoding |
| `segment_word` | Break a spoken word into sounds | Encoding and spelling |
| `build_word` | Arrange letter tiles to spell a word | Spelling |
| `trace_letter` | Follow a modeled letter path | Letter formation |
| `write_response` | Handwrite or draw a letter, word, or short response | Writing practice |
| `type_response` | Type a letter, word, number, or sentence | Keyboard literacy |
| `build_sentence` | Arrange words into a sentence | Syntax and sentence conventions |
| `complete_sentence` | Choose or type a missing word | Meaning, grammar, sight words |
| `read_and_answer` | Read a short text and answer a literal question | Comprehension |
| `scan_document` | Find a requested detail in a practical document | Document literacy |
| `fill_field` | Enter appropriate information in a simulated field | Form literacy |
| `complete_form` | Fill, check, and submit multiple fields | Integrated form use |
| `tap_interface_target` | Find and tap a labeled UI element | Phone/app navigation |
| `sequence_steps` | Put instructions or actions in order | Procedural literacy |
| `correct_mistake` | Find and fix a spelling, number, or form error | Self-correction |
| `practical_task` | Complete a multi-step scenario | Transfer and independence |

Avoid activities based only on translation, decontextualized grammar terminology, or speech scoring. A spoken response may support a reading task, but pronunciation accuracy should not block literacy progress.

---

## Standard Lesson Structure

A standard lesson lasts about 5–10 minutes and contains 6–10 short activities.

### 1. Goal

State one useful outcome in plain language.

Example:

> Today you will read and write your phone number.

### 2. Connect to spoken English

Play a familiar word, phrase, or situation. Confirm meaning before focusing on print.

### 3. Teach

Model the new letter, spelling pattern, word, sentence convention, document feature, or interface action. Make the critical print feature visually clear.

### 4. Guided practice

Provide audio, highlighting, examples, and immediate feedback.

### 5. Independent practice

Reduce hints and ask the learner to retrieve or apply the skill.

### 6. Practical use

Place the skill in a realistic adult context.

### 7. Review

Revisit one or two previously learned items alongside the new skill.

### 8. Completion

Describe what the learner can now do and offer a relevant next step.

Example:

> You read and typed a phone number. Next, you’ll use it in a form.

---

## Content Data Model

The content model is English-literacy-specific. Do not include generic target-language fields such as `sourceLanguage`, `targetLanguage`, `translation`, `conversationTopic`, or `grammarGender`.

### Course

```ts
type Course = {
  id: "english-literacy";
  title: "English Reading and Writing";
  description: string;
  contentVersion: string;
  pronunciationModel: "general-american" | "general-british";
  stages: StageRef[];
};
```

The pronunciation model controls recorded examples and phoneme labels; it does not imply that one learner accent is superior.

### Stage and unit

```ts
type Stage = {
  id: string;
  order: number;
  title: string;
  description: string;
  outcomes: LiteracyOutcome[];
  prerequisiteStageIds: string[];
  units: UnitRef[];
};

type Unit = {
  id: string;
  stageId: string;
  order: number;
  title: string;
  functionalGoal: string;
  literacyDomains: LiteracyDomain[];
  prerequisiteSkillIds: string[];
  newSkillIds: string[];
  reviewSkillIds: string[];
  lessons: LessonRef[];
  realLifePracticeLessonId?: string;
};
```

### Lesson

```ts
type LessonType =
  | "letter"
  | "phonics"
  | "sight-word"
  | "spelling"
  | "sentence-building"
  | "numbers"
  | "form"
  | "everyday-document"
  | "phone-navigation"
  | "review"
  | "real-life-practice";

type LiteracyDomain =
  | "print-awareness"
  | "alphabet"
  | "phonemic-awareness"
  | "phonics"
  | "word-reading"
  | "sight-words"
  | "spelling"
  | "handwriting"
  | "typing"
  | "sentences"
  | "numbers"
  | "forms"
  | "documents"
  | "digital-literacy"
  | "comprehension";

type Lesson = {
  id: string;
  unitId: string;
  order: number;
  type: LessonType;
  title: string;
  estimatedMinutes: number;
  goalCopy: string;
  completionCopy: string;
  literacyDomains: LiteracyDomain[];
  teachesSkillIds: string[];
  reviewsSkillIds: string[];
  vocabularyIds: string[];
  activities: Activity[];
  mastery: MasteryRule;
  accessibility: AccessibilityContent;
  authoringStatus: "draft" | "review" | "published" | "retired";
  contentVersion: string;
};

type MasteryRule = {
  requiredIndependentAccuracy: number;
  minimumIndependentItems: number;
  requirePracticalApplication: boolean;
};

type AccessibilityContent = {
  allInstructionsHaveAudio: true;
  allAudioHasVisibleText: true;
  minimumTextSize: "large";
  requiresColorToUnderstand: false;
};

type StageRef = Pick<Stage, "id" | "order" | "title">;
type UnitRef = Pick<Unit, "id" | "order" | "title">;
type LessonRef = Pick<Lesson, "id" | "order" | "title" | "type">;
type LiteracyOutcome = {
  id: string;
  statement: string;
};
```

### Skills

Skills are reusable, measurable literacy capabilities rather than vocabulary topics.

```ts
type Skill = {
  id: string;
  domain: LiteracyDomain;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  prerequisiteSkillIds: string[];
  graphemes?: string[];
  phonemes?: string[];
  wordPatterns?: string[];
  functionalUses?: string[];
};
```

Example:

```json
{
  "id": "phonics.cvc.short-a.blend",
  "domain": "phonics",
  "title": "Blend short-a CVC words",
  "description": "Blend three phonemes to read familiar words such as map and bag.",
  "difficulty": 1,
  "prerequisiteSkillIds": [
    "sound.consonants.m-b-g-p-t",
    "sound.vowel.short-a",
    "phonemic.blend.three-sounds"
  ],
  "graphemes": ["a", "m", "b", "g", "p", "t"],
  "phonemes": ["/æ/", "/m/", "/b/", "/g/", "/p/", "/t/"],
  "wordPatterns": ["CVC"],
  "functionalUses": ["read map", "read bag tag"]
}
```

### Word entries

```ts
type WordEntry = {
  id: string;
  display: string;
  normalized: string;
  partOfSpeech?: string;
  plainMeaning: string;
  meaningAudioId: string;
  wordAudioId: string;
  slowAudioId?: string;
  phonemes: string[];
  graphemePhonemeMap?: Array<{
    grapheme: string;
    phonemes: string[];
    regularity: "expected" | "unexpected";
  }>;
  syllables?: string[];
  decodability: "decodable" | "partially-decodable" | "irregular";
  requiredSkillIds: string[];
  tags: Array<
    | "high-frequency"
    | "sight-word"
    | "personal-information"
    | "number"
    | "form-word"
    | "document-word"
    | "interface-word"
    | "safety-word"
  >;
  exampleSentence?: string;
  imageAssetId?: string;
};
```

Do not use improvised pronunciation spellings such as `/ nām /` as the canonical pronunciation field. Store a standard phoneme representation and provide a separate learner-facing audio model. If a simplified visual pronunciation hint is used, it must be reviewed for consistency and must never replace audio.

### Activity

```ts
type Activity = {
  id: string;
  type: ActivityType;
  order: number;
  skillIds: string[];
  prompt: PromptContent;
  stimulus: Stimulus;
  response: ResponseDefinition;
  feedback: FeedbackContent;
  support: SupportOptions;
  analyticsTag: string;
};

type ActivityType =
  | "listen_and_choose"
  | "look_and_choose"
  | "match_pairs"
  | "sound_sort"
  | "blend_word"
  | "segment_word"
  | "build_word"
  | "trace_letter"
  | "write_response"
  | "type_response"
  | "build_sentence"
  | "complete_sentence"
  | "read_and_answer"
  | "scan_document"
  | "fill_field"
  | "complete_form"
  | "tap_interface_target"
  | "sequence_steps"
  | "correct_mistake"
  | "practical_task";

type PromptContent = {
  text: string;
  audioId: string;
  replayable: true;
  highlightMode?: "word" | "grapheme" | "field" | "none";
};

type SupportOptions = {
  instructionReplay: boolean;
  slowModelAudio?: boolean;
  showExample?: boolean;
  revealHintAfterAttempts?: number;
  allowTryAgain: boolean;
  maxAttemptsBeforeGuidedMode?: number;
};

type Stimulus = {
  text?: string;
  audioId?: string;
  imageAssetId?: string;
  documentId?: string;
  choices?: string[];
  tiles?: string[];
  fields?: Array<{
    id: string;
    label: string;
    inputType: "text" | "number" | "date" | "select" | "checkbox";
  }>;
};

type ResponseDefinition = {
  kind:
    | "single-choice"
    | "multiple-choice"
    | "ordered-tiles"
    | "typed-text"
    | "written-input"
    | "field-entry"
    | "interface-action";
  correctValue?: string | string[];
  acceptedValues?: string[];
  caseSensitive?: boolean;
  punctuationSensitive?: boolean;
};

type FeedbackContent = {
  correct: string;
  incorrect: string;
  guided: string;
  correctAudioId?: string;
  incorrectAudioId?: string;
  guidedAudioId?: string;
};
```

### Practical documents

```ts
type PracticalDocument = {
  id: string;
  documentType:
    | "message"
    | "form"
    | "schedule"
    | "notice"
    | "label"
    | "receipt"
    | "email"
    | "sign"
    | "listing";
  title: string;
  purpose: string;
  fictional: true;
  plainText: string;
  visualAssetId: string;
  readingOrder: string[];
  keyInformation: Array<{
    label: string;
    value: string;
    skillIds: string[];
  }>;
  vocabularyIds: string[];
  complexity: {
    wordCount: number;
    sentenceCount: number;
    layoutLevel: 1 | 2 | 3;
  };
  altText: string;
};
```

### Learner progress

Progress should be recorded against skills, not a generic language level.

```ts
type SkillProgress = {
  learnerId: string;
  skillId: string;
  status: "not-started" | "learning" | "practicing" | "mastered";
  attempts: number;
  successfulIndependentAttempts: number;
  lastPracticedAt?: string;
  nextReviewAt?: string;
  supportUsed: Array<"replay" | "slow-audio" | "hint" | "example" | "guided-mode">;
};
```

Do not reduce learner progress to a single fluency score. Report meaningful capabilities such as “Can read a phone number” or “Learning short-a words.”

---

## Example Lesson Object

```json
{
  "id": "personal-info.phone-number.03",
  "unitId": "personal-info.phone-number",
  "order": 3,
  "type": "numbers",
  "title": "Type a phone number",
  "estimatedMinutes": 7,
  "goalCopy": "Today you will read and type a phone number.",
  "completionCopy": "You read and typed a phone number. Next, you’ll use it in a form.",
  "literacyDomains": ["numbers", "typing", "forms"],
  "teachesSkillIds": ["numbers.type.phone-sequence"],
  "reviewsSkillIds": ["numbers.recognize.0-9", "interface.field-and-backspace"],
  "vocabularyIds": ["word.phone", "word.number"],
  "activities": [
    {
      "id": "phone-number.03.activity.01",
      "type": "listen_and_choose",
      "order": 1,
      "skillIds": ["numbers.recognize.0-9"],
      "prompt": {
        "text": "Tap the number you hear.",
        "audioId": "prompt.tap-number-heard",
        "replayable": true,
        "highlightMode": "none"
      },
      "stimulus": {
        "audioId": "number-sequence.2025550148",
        "choices": ["202-555-0148", "202-555-0184", "220-555-0148"]
      },
      "response": {
        "kind": "single-choice",
        "correctValue": "202-555-0148"
      },
      "feedback": {
        "correct": "That’s right: 202-555-0148.",
        "incorrect": "Listen again. Look at one group at a time.",
        "guided": "The first group is 2-0-2. Tap 202."
      },
      "support": {
        "instructionReplay": true,
        "slowModelAudio": true,
        "showExample": false,
        "revealHintAfterAttempts": 1,
        "allowTryAgain": true,
        "maxAttemptsBeforeGuidedMode": 2
      },
      "analyticsTag": "number_sequence_audio_match"
    }
  ],
  "mastery": {
    "requiredIndependentAccuracy": 0.8,
    "minimumIndependentItems": 5,
    "requirePracticalApplication": true
  },
  "accessibility": {
    "allInstructionsHaveAudio": true,
    "allAudioHasVisibleText": true,
    "minimumTextSize": "large",
    "requiresColorToUnderstand": false
  },
  "authoringStatus": "published",
  "contentVersion": "1.0.0"
}
```

All names, phone numbers, addresses, organizations, and appointment details in production examples must be fictional and reserved for test content.

---

## Copy System

### Voice

LitIsh copy is:

- clear;
- calm;
- respectful;
- direct;
- encouraging without exaggeration;
- useful to an adult learner; and
- easy to hear as well as read.

### Reading level

Interface and instruction copy should use short, common words and concrete verbs. A learner may understand a spoken instruction that they cannot yet read, so every essential instruction must also have audio.

Prefer:

- “Tap the word you hear.”
- “Listen. Then type the number.”
- “Find the date.”
- “Put the words in order.”
- “Check your answer.”
- “Tap Continue.”

Avoid:

- “Select the corresponding orthographic representation.”
- “Demonstrate mastery of the lexical item.”
- “You failed this question.”
- “That was easy!”
- “Only three more!”

### Prompt patterns

| Purpose | Approved pattern | Example |
| --- | --- | --- |
| Listen and identify | `Tap the [item] you hear.` | “Tap the word you hear.” |
| Visual identification | `Find [target].` | “Find the letter M.” |
| Matching | `Match [A] with [B].` | “Match the uppercase and lowercase letters.” |
| Building | `Put the [items] in order.` | “Put the words in order.” |
| Typing | `Type [target].` | “Type the phone number.” |
| Reading | `Read [text]. Then [action].` | “Read the message. Then find the date.” |
| Form entry | `Enter [information] in the [field] field.` | “Enter Amina in the First name field.” |
| Navigation | `Tap [label].` | “Tap Save.” |
| Correction | `Check [part]. Try again.` | “Check the last number. Try again.” |

Do not use “say” when the expected action is to read, spell, write, or type.

### Feedback patterns

Correct feedback should name the successful literacy action:

- “That’s right. M says /m/ in map.”
- “Yes. `NAME` matches the word you heard.”
- “You put the words in the correct order.”
- “The appointment is at 2:30 PM.”

Incorrect feedback should guide attention without judgment:

- “Listen again. The word starts with /m/.”
- “Look at the last two letters.”
- “Check the month and day.”
- “That field is for a last name. Try again.”

After repeated attempts, switch to guided practice rather than repeating the same error message.

### Completion copy

Completion messages should connect progress to independence:

- “You read and wrote your full name.”
- “You found the date and time in a message.”
- “You completed and checked a simple form.”
- “You can recognize common buttons on a phone.”
- “Practice builds independence.”

Avoid claims that are broader than the evidence, such as “You can read English now.”

### UI labels

Keep navigation labels stable across the app. Preferred labels include:

- Home
- Learn
- Practice
- Progress
- Continue lesson
- Hear this screen
- Hear again
- Slow audio
- Show example
- Get a hint
- Check answer
- Try again
- Continue
- Save
- Exit lesson

Teach the same labels as digital-literacy content when useful. The app interface itself can become a safe practice environment.

---

## Example Content

### Foundational example: letter and sound

**Goal:** Recognize `M` and `m` and connect them to /m/.

1. Audio: “This letter is M.”
2. Display: `M m`
3. Audio: “M usually says /m/, as in map.”
4. Activity: Match `M` with `m`.
5. Activity: Hear **map**, **name**, and **bus**; choose the word that starts with /m/.
6. Activity: Trace `M`, then `m`.
7. Activity: Find `M` on the keyboard.
8. Practical link: Find `M` at the start of `MOBILE` on a simple phone form.

### Phonics example: short `a`

**Goal:** Blend short-a words.

Controlled words: `map`, `man`, `bag`, `cap`, `tag`.

Do not include untaught patterns in decodable practice. A useful but not-yet-decodable word may appear only if it is identified as a sight word or supported by audio.

### Sight-word example: `my`

**Goal:** Read and write `my` automatically.

Example sentences:

- `My name is Luis.`
- `My phone number is 202-555-0148.`
- `My appointment is today.`

### Sentence example

**Goal:** Build a sentence with capitalization, spacing, and a period.

Word tiles:

`address` · `My` · `is` · `10 King St.`

Correct response:

`My address is 10 King St.`

### Everyday message example

**Document:**

> CITY HEALTH CENTER  
> Appointment reminder  
> Amina Diallo  
> Tuesday, May 12 at 2:30 PM  
> 100 Main Street  
> Call 202-555-0164 if you cannot come.

Questions progress from supported to independent:

1. “Find the date.”
2. “What time is the appointment?”
3. “Where is the appointment?”
4. “What should Amina do if she cannot come?”

### Phone navigation example

**Goal:** Understand a password field.

The learner practices:

1. finding the `Password` label;
2. tapping the field;
3. typing a fictional practice password;
4. using `Show` and `Hide`;
5. correcting one character with Backspace; and
6. tapping `Continue`.

Do not request or display the learner’s real password.

---

## Difficulty and Scaffolding

Increase difficulty along one dimension at a time.

### Recognition to production

1. See and hear a model.
2. Choose from two options.
3. Choose from three or four options.
4. Build from tiles.
5. Type with a visible model.
6. Type from audio or memory.
7. Apply in a new context.

### Print complexity

1. Single letter or digit.
2. Short word.
3. Short phrase.
4. One sentence.
5. Two or three connected sentences.
6. Simple document with labels.
7. Document with multiple sections or competing details.

### Support reduction

1. Audio plus synchronized highlighting.
2. Audio plus static text.
3. Text with optional audio.
4. Text with hint available.
5. Independent attempt.

Audio must always remain available for instructions, even when the learning task itself measures independent reading.

### Distractors

Distractors must diagnose a plausible literacy confusion:

- visually similar letters: `b`/`d`, `p`/`q`, `m`/`n`;
- nearby sounds: `/p/` and `/b/`;
- changed vowel: `map` and `mop`;
- transposed digits: `14` and `41`;
- wrong field label: `First name` and `Last name`;
- wrong date component: month and day; or
- nearby interface label: `Save` and `Cancel`.

Do not use trick questions or distractors that differ only through obscure knowledge.

---

## Mastery, Review, and Placement

### Mastery

A skill is mastered when the learner can perform it accurately more than once without a hint or model and can use it in at least one practical context.

Recommended minimum:

- at least 80% accuracy across five or more independent items;
- success on more than one day for foundational decoding and spelling skills; and
- at least one successful practical application.

Speed is not a mastery requirement for beginning learners. Measure automaticity only after accuracy and confidence are established.

### Spaced review

Schedule review based on skill performance. Bring a skill back sooner when the learner needed a hint, replay, example, or guided mode.

Reviews should mix:

- one recent skill;
- one developing skill;
- one older mastered skill; and
- one practical application.

### Placement

Placement must be optional, brief, audio-supported, and framed as finding the right starting point—not passing a test.

Sample copy:

> Let’s find the best place to begin. It is okay if you do not know an answer.

Placement may sample:

- letter recognition;
- common letter sounds;
- simple word reading;
- sight-word recognition;
- digit and number-string reading;
- sentence reading;
- name/address form fields; and
- common phone labels.

Do not assume that strong speaking ability means strong reading ability. Do not skip alphabet or phonics checks solely because a learner understands spoken English well.

---

## Accessibility Requirements

Content accessibility is part of authoring, not a later layer.

Every lesson must provide:

- replayable audio for all essential instructions;
- visible text for all instructional and model audio;
- synchronized highlighting when reading a sentence or document aloud;
- a slow-audio option for model words and short sentences;
- large, high-legibility type;
- clear uppercase and lowercase letterforms;
- meaning that does not depend on color alone;
- large touch targets;
- predictable button placement;
- plain alt text for meaningful images and documents;
- no required time limit;
- pause and resume support; and
- a guided path after repeated errors.

Images should clarify meaning or context, not decorate the screen with childlike characters. Avoid culturally specific visual clues when they are necessary to answer correctly.

For handwriting tasks, provide a non-handwriting alternative when motor or device limitations make tracing difficult.

---

## Representation and Safety

Examples should reflect a broad adult community through varied names, ages, families, jobs, housing situations, and English accents. Do not tie limited literacy to intelligence, motivation, nationality, or immigration status.

Content must:

- use fictional personal data;
- avoid stereotypes;
- avoid requiring disclosure of legal or immigration status;
- avoid real account credentials;
- teach learners not to share passwords or one-time verification codes;
- clearly label simulated forms and interfaces as practice when confusion is possible;
- avoid giving medical, legal, or financial advice; and
- send crisis, emergency, or high-stakes decisions to appropriate real-world help rather than turning them into quiz content.

---

## Authoring and Review Workflow

### 1. Define the functional outcome

Write what the learner will be able to do outside the app.

### 2. Define the literacy skills

Identify exactly which letter, sound-spelling, word-reading, spelling, sentence, number, form, document, typing, or navigation skills the lesson teaches and reviews.

### 3. Check prerequisites

Confirm that decodable words use taught patterns and that all other words are pre-taught, marked as sight words, or supported without being tested as decodable.

### 4. Draft the lesson

Follow the standard structure and use approved prompt patterns.

### 5. Produce audio and visuals

Record instruction, model, slow-model, and document audio as required. Confirm that visual highlighting matches the spoken content.

### 6. Literacy review

An English literacy specialist reviews phonics accuracy, decodability, spelling explanations, scope and sequence, cognitive load, and adult relevance.

### 7. Plain-language and accessibility review

Review every instruction as both spoken and written language. Test screen-reader order, audio replay, target sizes, contrast, and non-color cues.

### 8. Safety and privacy review

Confirm that all data is fictional and that high-stakes examples are accurate, limited, and clearly educational.

### 9. Learner testing

Test with adults who match the learner profile. Observe whether they understand what to do without facilitator explanation and whether the content feels respectful.

### 10. Publish and monitor

Version content, monitor skill-level errors and support usage, and revise confusing items. A high replay rate may signal that audio is useful; it is not automatically a failure. Look for repeated wrong answers, abandonment, and guided-mode entry together.

---

## Content QA Checklist

Before publication, confirm:

### Learning design

- [ ] The lesson teaches English reading, writing, spelling, typing, or print navigation.
- [ ] The functional adult outcome is clear.
- [ ] The lesson has one primary new demand.
- [ ] Prerequisite skills are identified.
- [ ] Review items use previously taught content.
- [ ] Independent practice follows guided practice.
- [ ] Mastery requires practical use, not only recognition.

### English literacy accuracy

- [ ] Letter names and sounds are not confused.
- [ ] Phoneme and grapheme data is accurate for the selected pronunciation model.
- [ ] Decodable words contain only taught patterns.
- [ ] Irregular or not-yet-decodable words receive appropriate support.
- [ ] Sentence capitalization, spacing, punctuation, and spelling are correct.
- [ ] Accent variation does not create an unfair answer.
- [ ] Examples teach English literacy rather than general language conversation.

### Adult relevance and copy

- [ ] The context is useful and age-respectful.
- [ ] Instructions use short, direct language.
- [ ] The expected action is explicit.
- [ ] Feedback is specific and nonjudgmental.
- [ ] Completion copy describes an evidenced skill.
- [ ] No timer, shame, trick question, or childlike reward is used.

### Audio and accessibility

- [ ] Every essential instruction has replayable audio.
- [ ] Every audio item has visible text.
- [ ] Model and slow-model audio are correctly assigned.
- [ ] Highlight timing matches the audio.
- [ ] Meaning does not depend on color, sound, or an image alone.
- [ ] Images and document layouts have useful alt text.
- [ ] The lesson can be completed without fine motor precision or a time limit.

### Data, privacy, and safety

- [ ] Names and personal details are fictional.
- [ ] No real password, verification code, ID number, or sensitive record is requested.
- [ ] Practice forms and interfaces are clearly simulated where needed.
- [ ] Medical, legal, financial, and government examples do not imply advice.
- [ ] Analytics identify the skill and activity without storing unnecessary learner content.

---

## Content That Does Not Belong

Do not add:

- multiple target-language selection;
- translation-first lessons;
- tourist conversation units;
- open-ended speaking drills unrelated to print;
- pronunciation scoring as a core progression gate;
- abstract grammar courses disconnected from reading and writing;
- vocabulary lists selected only by topic rather than literacy sequence;
- children’s themes, school-grade labels, or childish rewards;
- timed reading as a beginner requirement;
- real personal or account information in examples; or
- claims that one lesson creates full literacy.

LitIsh may use spoken instructions, optional explanations in a learner’s familiar language, or human support to improve access. These supports do not change the course goal: learning to read and write English.

---

## North-Star Content Test

Before adding any piece of content, ask:

> Will this help an adult connect spoken English to print and use written English more independently in everyday life?

If the answer is not clearly yes, the content does not belong in the LitIsh literacy course.
