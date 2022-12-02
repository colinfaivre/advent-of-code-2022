export function getTotalScore(fileLines: string[], algo: 'a' | 'b'): number {
  if (algo === 'a') {
    return fileLines.map((line) => getScoreA(line)).reduce((a, b) => a + b, 0);
  }
  if (algo === 'b') {
    return fileLines.map((line) => getScoreB(line)).reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
}

function getScoreA(round: string): number {
  const LOST_SCORE = 0;
  const DRAW_SCORE = 3;
  const WON_SCORE = 6;
  const ROCK_SCORE = 1;
  const PAPER_SCORE = 2;
  const SCISSORS_SCORE = 3;

  let roundScore = 0;

  if (round === 'A X') roundScore = DRAW_SCORE + ROCK_SCORE;
  if (round === 'A Y') roundScore = WON_SCORE + PAPER_SCORE;
  if (round === 'A Z') roundScore = LOST_SCORE + SCISSORS_SCORE;

  if (round === 'B X') roundScore = LOST_SCORE + ROCK_SCORE;
  if (round === 'B Y') roundScore = DRAW_SCORE + PAPER_SCORE;
  if (round === 'B Z') roundScore = WON_SCORE + SCISSORS_SCORE;

  if (round === 'C X') roundScore = WON_SCORE + ROCK_SCORE;
  if (round === 'C Y') roundScore = LOST_SCORE + PAPER_SCORE;
  if (round === 'C Z') roundScore = DRAW_SCORE + SCISSORS_SCORE;

  return roundScore;
}

function getScoreB(round: string): number {
  const LOST_SCORE = 0;
  const DRAW_SCORE = 3;
  const WON_SCORE = 6;
  const ROCK_SCORE = 1;
  const PAPER_SCORE = 2;
  const SCISSORS_SCORE = 3;

  let roundScore = 0;

  if (round === 'A X') roundScore = LOST_SCORE + SCISSORS_SCORE;
  if (round === 'A Y') roundScore = DRAW_SCORE + ROCK_SCORE;
  if (round === 'A Z') roundScore = WON_SCORE + PAPER_SCORE;

  if (round === 'B X') roundScore = LOST_SCORE + ROCK_SCORE;
  if (round === 'B Y') roundScore = DRAW_SCORE + PAPER_SCORE;
  if (round === 'B Z') roundScore = WON_SCORE + SCISSORS_SCORE;

  if (round === 'C X') roundScore = LOST_SCORE + PAPER_SCORE;
  if (round === 'C Y') roundScore = DRAW_SCORE + SCISSORS_SCORE;
  if (round === 'C Z') roundScore = WON_SCORE + ROCK_SCORE;

  return roundScore;
}
