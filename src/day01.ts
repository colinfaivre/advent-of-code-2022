export function getMaxTotalCalories(fileLines: string[]): number {
  const caloriesList = fileLines.map((line) => parseInt(line) || 0);
  let max = 0;
  let temp = 0;

  for (let i = 0; i < caloriesList.length; i++) {
    if (caloriesList[i] !== 0) {
      temp += caloriesList[i];
    } else {
      temp = 0;
    }

    if (temp > max) max = temp;
  }

  return max;
}

export function getThreeMaxTotalCalories(fileLines: string[]): number {
  const caloriesList = fileLines.map((line) => parseInt(line) || 0);
  let elvesCalories = [];
  let temp = 0;

  for (let i = 0; i < caloriesList.length; i++) {
    if (caloriesList[i] !== 0) {
      temp += caloriesList[i];
    } else {
      elvesCalories.push(temp);
      temp = 0;
    }
  }

  elvesCalories.sort((a, b) => b - a);

  return elvesCalories[0] + elvesCalories[1] + elvesCalories[2];
}
