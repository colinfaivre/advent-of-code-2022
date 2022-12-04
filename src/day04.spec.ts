import syncReadFile from './utils/syncReadFile';
import { isFullyContained, getResult } from './day04';

test('getResult() with a algo', () => {
  const lines = syncReadFile('src/day04-input.txt');
  expect(getResult(lines, 'a')).toEqual(413);
});

test('getResult() with b algo', () => {
  const lines = syncReadFile('src/day04-input.txt');
  expect(getResult(lines, 'b')).toEqual(806);
});

test('isFullyContained()', () => {
  expect(isFullyContained('4-5,2-7')).toEqual(true);
  expect(isFullyContained('2-7,3-6')).toEqual(true);
  expect(isFullyContained('4-5,2-4')).toEqual(false);
});
