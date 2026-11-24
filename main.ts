import * as fs from "node:fs";

const ENTRY = "My agent burned 200,000 tokens reading my README, then asked me where it was — it can grep, it just can't remember.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
