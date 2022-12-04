export function getPrioritiesSum(fileLines: string[], alg: string): number {
  let commonCharList;
  if (alg === 'a') commonCharList = fileLines.map((line) => getCommonCharacterA(line));
  else commonCharList = getCommonCharacterB(fileLines);
  const priorityList = commonCharList.map((char) => getCharPriority(char));

  return getSum(priorityList);
}

export function getCommonCharacterA(line: string): string {
  const afterMiddleIndex = line.length / 2;
  const firstLineHalf = line.substring(0, afterMiddleIndex);
  const secondLineHalF = line.substring(afterMiddleIndex);

  for (let i = 0; i < line.length; i++) {
    if (secondLineHalF.includes(firstLineHalf[i])) return firstLineHalf[i];
  }

  return 'no common character';
}

export function getCommonCharacterB(lineList: string[]): string[] {
  const commonCharList: string[] = [];

  for (let i = 0; i < lineList.length; i += 3) {
    const firstRuckSack = lineList[i];
    const secondRuckSack = lineList[i + 1];
    const thirdRuckSack = lineList[i + 2];
    const threeLines: string[] = [firstRuckSack];
    secondRuckSack.length > threeLines[0].length ? threeLines.unshift(secondRuckSack) : threeLines.push(secondRuckSack);
    thirdRuckSack.length > threeLines[0].length ? threeLines.unshift(thirdRuckSack) : threeLines.push(thirdRuckSack);

    for (let j = 0; j < threeLines[0].length; j++) {
      if (threeLines[1].includes(threeLines[0][j]) && threeLines[2].includes(threeLines[0][j])) {
        commonCharList.push(threeLines[0][j]);
        break;
      }
    }
  }
  console.log(commonCharList.length);

  return commonCharList;
}

export function getCharPriority(character: string): number {
  const priorityMap = '#abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return priorityMap.indexOf(character);
}

export function getSum(numberList: number[]): number {
  return numberList.reduce((a, b) => a + b, 0);
}
