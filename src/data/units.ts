import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "unit-letters-sounds",
    title: "Letters & Sounds",
    description: "Recognize letters and hear the sounds they make.",
    level: "beginner",
    order: 1,
    lessonIds: ["letter-a", "letter-b"],
  },
  {
    id: "unit-everyday-words",
    title: "Everyday Words",
    description: "Read your name and common words you see every day.",
    level: "basic",
    order: 2,
    lessonIds: ["read-your-name", "sight-words-1"],
  },
  {
    id: "unit-daily-life-reading",
    title: "Daily Life Reading",
    description: "Practice reading the messages and reminders you get every day.",
    level: "daily-life",
    order: 3,
    lessonIds: ["read-a-text-message", "read-an-appointment-reminder"],
  },
];

export function getUnitById(unitId: string): Unit | undefined {
  return units.find((unit) => unit.id === unitId);
}
