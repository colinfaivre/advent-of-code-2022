//                 [V]     [C]     [M]
// [V]     [J]     [N]     [H]     [V]
// [R] [F] [N]     [W]     [Z]     [N]
// [H] [R] [D]     [Q] [M] [L]     [B]
// [B] [C] [H] [V] [R] [C] [G]     [R]
// [G] [G] [F] [S] [D] [H] [B] [R] [S]
// [D] [N] [S] [D] [H] [G] [J] [J] [G]
// [W] [J] [L] [J] [S] [P] [F] [S] [L]
//  1   2   3   4   5   6   7   8   9

interface ICommand {
  totalMoves: number;
  fromStack: number;
  toStack: number;
}

export function getResult(lineList: string[], alg: number): string {
  const stackList = [
    ['W', 'D', 'G', 'B', 'H', 'R', 'V'],
    ['J', 'N', 'G', 'C', 'R', 'F'],
    ['L', 'S', 'F', 'H', 'D', 'N', 'J'],
    ['J', 'D', 'S', 'V'],
    ['S', 'H', 'D', 'R', 'Q', 'W', 'N', 'V'],
    ['P', 'G', 'H', 'C', 'M'],
    ['F', 'J', 'B', 'G', 'L', 'Z', 'H', 'C'],
    ['S', 'J', 'R'],
    ['L', 'G', 'S', 'R', 'B', 'N', 'V', 'M'],
  ];

  const commandList = lineList.map((line) => parseLine(line));
  if (alg === 9000) {
    commandList.forEach((value: ICommand) => executeCommand9000(value, stackList));
  } else {
    commandList.forEach((value: ICommand) => executeCommand9001(value, stackList));
  }

  return getTopOfStackList(stackList);
}

export function parseLine(line: string): ICommand {
  const numberString = line.replace('move ', '').replace('from ', '').replace('to ', '');
  const [totalMoves, fromStack, toStack] = numberString.split(' ');

  return {
    totalMoves: parseInt(totalMoves),
    fromStack: parseInt(fromStack) - 1,
    toStack: parseInt(toStack) - 1,
  };
}

export function executeCommand9000(command: ICommand, stackList: string[][]): void {
  for (let moves = 1; moves <= command.totalMoves; moves++) {
    if (stackList[command.fromStack][stackList[command.fromStack].length - 1]) {
      stackList[command.toStack].push(stackList[command.fromStack].pop() as string);
    }
  }
}

export function executeCommand9001(command: ICommand, stackList: string[][]): void {
  const tempStack: string[] = [];

  for (let moves = 1; moves <= command.totalMoves; moves++) {
    if (stackList[command.fromStack][stackList[command.fromStack].length - 1]) {
      tempStack.push(stackList[command.fromStack].pop() as string);
    }
  }

  for (let moves = 1; moves <= command.totalMoves; moves++) {
    if (tempStack[tempStack.length - 1]) {
      stackList[command.toStack].push(tempStack.pop() as string);
    }
  }
}

export function getTopOfStackList(stackList: string[][]): string {
  return [
    stackList[0].pop() as string,
    stackList[1].pop() as string,
    stackList[2].pop() as string,
    stackList[3].pop() as string,
    stackList[4].pop() as string,
    stackList[5].pop() as string,
    stackList[6].pop() as string,
    stackList[7].pop() as string,
    stackList[8].pop() as string,
  ].join('');
}
