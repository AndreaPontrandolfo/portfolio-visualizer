import { dropLastWhile } from "ramda";

export const getSingularLabel = (label: string[]) => {
  return dropLastWhile((lastLetter) => lastLetter === "s", label);
};
