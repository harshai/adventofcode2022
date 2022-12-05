import { readInput } from "../utils.ts";

async function countCalories(): Promise<number> {
  const text = await readInput("calorieCountingInput.txt");

  const arr = text.split("\n");

  let runningCalCount = 0;
  const totalCals: number[] = [];

  arr.forEach((num) => {
    if (num !== "") {
      runningCalCount = runningCalCount + parseInt(num);
    } else {
      totalCals.push(runningCalCount);

      runningCalCount = 0;
    }
  });

  return totalCals
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prevSum, currVal) => prevSum + currVal, 0);
}

console.log(await countCalories());
