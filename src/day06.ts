export function getResultA(lineList: string[]): number {
  const charList = lineList[0].split('');

  for (let i = 0; i < charList.length - 4; i++) {
    //const charSubList = [charList[i], charList[i + 1], charList[i + 2], charList[i + 3]];
    const charSubList = generateSubList(charList, i, 4);
    if (areCharactersDifferent(charSubList)) return i + charSubList.length;
  }

  return 0;
}

export function getResultB(lineList: string[]): number {
  const charList = lineList[0].split('');

  for (let i = 0; i < charList.length - 4; i++) {
    const charSubList = generateSubList(charList, i, 14);
    if (areCharactersDifferent(charSubList)) return i + charSubList.length;
  }

  return 0;
}

export function areCharactersDifferent(charSubList: string[]): boolean {
  return charSubList.length === new Set(charSubList).size;
}

export function generateSubList(array: string[], startIndex: number, length: number): string[] {
  const subArray: string[] = [];

  for (let i = startIndex; i < startIndex + length; i++) {
    subArray.push(array[i]);
  }

  return subArray;
}
