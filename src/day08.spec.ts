import syncReadFile from './utils/syncReadFile';
import { getResult } from './day08';

test('getResult()', () => {
  const lines = syncReadFile('src/day08-input.txt');
  expect(getResult(lines)).toEqual(1789);
});
