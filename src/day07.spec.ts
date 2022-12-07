import syncReadFile from './utils/syncReadFile';
import { getResult } from './day07';

test('getResult() with alg a', () => {
  const lines = syncReadFile('src/day07-input.txt');
  expect(getResult(lines, 'a')).toEqual(1084134);
});

test('getResult() with alg b', () => {
  const lines = syncReadFile('src/day07-input.txt');
  expect(getResult(lines, 'b')).toEqual(6183184);
});
