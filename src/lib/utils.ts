import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToTop = (behavior: ScrollBehavior = "smooth") => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};

export const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior,
  });
};

export const scrollToSection = (sectionId: string, behavior: ScrollBehavior = "smooth") => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior });
  }
};
