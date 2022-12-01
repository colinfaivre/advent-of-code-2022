import syncReadFile from './utils/syncReadFile';
import { getMaxTotalCalories, getThreeMaxTotalCalories } from './day01';

test('getMaxTotalCalories', () => {
  const lines = syncReadFile('src/day01-input.txt');
  expect(getMaxTotalCalories(lines)).toEqual(72511);
});

test('getThreeMaxTotalCalories', () => {
  const lines = syncReadFile('src/day01-input.txt');
  expect(getThreeMaxTotalCalories(lines)).toEqual(212117);
});
