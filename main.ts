import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: setup (the meeting that could have been an email)
// turns on itself — the only meeting that escapes the rule is the one
// defending the rule. Punchline lands last.
const joke =
  "At last, a meeting that couldn't have been an email: the meeting about why the last meeting couldn't have been an email.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
