import { readInput } from "../utils.ts";

async function countCalories(): Promise<number> {
  const text = await readInput("calorieCountingInput.txt");

  const arr = text.split("\n");
  let maxCals = 0;
  let runningCalCount = 0;

  arr.forEach((num) => {
    if (num !== "") {
      runningCalCount = runningCalCount + parseInt(num);
    } else {
      maxCals = runningCalCount > maxCals ? runningCalCount : maxCals;

      console.log(maxCals);
      runningCalCount = 0;
    }
  });

  return maxCals;
}

console.log(await countCalories());
