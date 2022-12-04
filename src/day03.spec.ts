import syncReadFile from './utils/syncReadFile';
import { getCommonCharacterA, getPrioritiesSum, getCharPriority } from './day03';

test('getCommonCharacterA()', () => {
  expect(getCommonCharacterA('azertyqsdfga')).toEqual('a');
  expect(getCommonCharacterA('azertyqsdfgy')).toEqual('y');
  expect(getCommonCharacterA('azertyqsdfgh')).toEqual('no common character');
  expect(getCommonCharacterA('azertyAsdfgh')).toEqual('no common character');
});

test('getCharPriority()', () => {
  expect(getCharPriority('a')).toEqual(1);
  expect(getCharPriority('z')).toEqual(26);
  expect(getCharPriority('A')).toEqual(27);
  expect(getCharPriority('Z')).toEqual(52);
});

test('getPrioritiesSum() with alg a', () => {
  const lines = syncReadFile('src/day03-input.txt');
  expect(getPrioritiesSum(lines, 'a')).toEqual(7821);
});

test('getPrioritiesSum() with alg b', () => {
  const lines = syncReadFile('src/day03-input.txt');
  expect(getPrioritiesSum(lines, 'b')).toEqual(2752);
});
