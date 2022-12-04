export function getResult(lineList: string[], alg: string): number {
  let containedList;
  if (alg === 'a') containedList = lineList.map((line) => isFullyContained(line));
  else containedList = lineList.map((line) => isAtLeastPartiallyContained(line));

  return containedList.filter((item) => item === true).length;
}

export function isFullyContained(line: string): boolean {
  const [firstStart, firstEnd, secondStart, secondEnd] = parseLine(line);

  return (
    isFirstContainedBySecond(firstStart, firstEnd, secondStart, secondEnd) ||
    isSecondContainedByFirst(firstStart, firstEnd, secondStart, secondEnd)
  );
}

export function isAtLeastPartiallyContained(line: string): boolean {
  const [firstStart, firstEnd, secondStart, secondEnd] = parseLine(line);

  return (
    isFirstContainedBySecond(firstStart, firstEnd, secondStart, secondEnd) ||
    isSecondContainedByFirst(firstStart, firstEnd, secondStart, secondEnd) ||
    isOverlapping(firstStart, firstEnd, secondStart, secondEnd)
  );
}

function parseLine(line: string): number[] {
  const [firstAssignment, secondAssignment] = line.split(',');
  const [firstStart, firstEnd] = firstAssignment.split('-').map((item) => parseInt(item));
  const [secondStart, secondEnd] = secondAssignment.split('-').map((item) => parseInt(item));

  return [firstStart, firstEnd, secondStart, secondEnd];
}

function isFirstContainedBySecond(
  firstStart: number,
  firstEnd: number,
  secondStart: number,
  secondEnd: number,
): boolean {
  return firstStart >= secondStart && firstEnd <= secondEnd;
}

function isSecondContainedByFirst(
  firstStart: number,
  firstEnd: number,
  secondStart: number,
  secondEnd: number,
): boolean {
  return firstStart <= secondStart && firstEnd >= secondEnd;
}

function isOverlapping(firstStart: number, firstEnd: number, secondStart: number, secondEnd: number): boolean {
  return (
    (firstStart <= secondStart && firstEnd >= secondStart && firstEnd <= secondEnd) ||
    (firstStart >= secondStart && firstStart <= secondEnd && firstEnd >= secondEnd)
  );
}
