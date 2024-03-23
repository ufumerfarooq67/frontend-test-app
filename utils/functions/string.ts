export function toTitleCase(sentence: string): string {
  // Split the sentence into words
  const words = sentence.toLowerCase().split(" ");

  // Capitalize the first letter of each word
  const titleCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back into a sentence
  return titleCaseWords.join(" ");
}
