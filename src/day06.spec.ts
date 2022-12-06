import syncReadFile from './utils/syncReadFile';
import { getResultA, getResultB, generateSubList } from './day06';

test('getResultA()', () => {
  const lines = syncReadFile('src/day06-input.txt');
  expect(getResultA(lines)).toEqual(1953);
});

test('getResultB()', () => {
  const lines = syncReadFile('src/day06-input.txt');
  expect(getResultB(lines)).toEqual(2301);
});

test('generateSubList()', () => {
  expect(generateSubList(['A', 'B', 'C', 'D'], 0, 2)).toStrictEqual(['A', 'B']);
  expect(generateSubList(['A', 'B', 'C', 'D'], 2, 2)).toStrictEqual(['C', 'D']);
});
