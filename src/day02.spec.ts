import syncReadFile from './utils/syncReadFile';
import { getTotalScore } from './day02';

test('getTotalScore() with a algo', () => {
  const lines = syncReadFile('src/day02-input.txt');
  expect(getTotalScore(lines, 'a')).toEqual(9241);
});

test('getTotalScore() with b algo', () => {
  const lines = syncReadFile('src/day02-input.txt');
  expect(getTotalScore(lines, 'b')).toEqual(14610);
});
