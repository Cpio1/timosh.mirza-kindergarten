import { Baby, Clock3, Languages, UtensilsCrossed, type LucideIcon } from "lucide-react";

/** Icons for the «about» facts, keyed like the dictionary entries. */
export const factIcons: Record<string, LucideIcon> = {
  language: Languages,
  hours: Clock3,
  ages: Baby,
  meals: UtensilsCrossed,
};

/** Alternating surface tints for fact tiles, in order. */
export const factTints = ["bg-turquoise-soft text-turquoise-deep", "bg-sun-soft text-ink", "bg-sun-soft text-ink", "bg-turquoise-soft text-turquoise-deep"];
