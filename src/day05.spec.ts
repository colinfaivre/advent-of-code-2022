import syncReadFile from './utils/syncReadFile';
import { parseLine, getResult, executeCommand9000 } from './day05';

test('getResult() with 9000', () => {
  const lines = syncReadFile('src/day05-input.txt');
  expect(getResult(lines, 9000)).toEqual('JRVNHHCSJ');
});

test('getResult() with 9000 and two moves', () => {
  const lines = ['move 1 from 6 to 7', 'move 2 from 8 to 1'];
  expect(getResult(lines, 9000)).toEqual('JFJVVCMSM');
});

test('getResult() with 9001', () => {
  const lines = syncReadFile('src/day05-input.txt');
  expect(getResult(lines, 9001)).toEqual('GNFBSBJLH');
});

test('parseLine()', () => {
  const expected = {
    totalMoves: 2,
    fromStack: 1,
    toStack: 6,
  };

  expect(parseLine('move 2 from 2 to 7')).toStrictEqual(expected);
});

test('executeCommand()', () => {
  const stackList = [
    ['W', 'D', 'G'],
    ['J', 'N', 'G', 'C'],
  ];
  const command = {
    totalMoves: 2,
    fromStack: 0,
    toStack: 1,
  };

  const expected = [['W'], ['J', 'N', 'G', 'C', 'G', 'D']];

  executeCommand9000(command, stackList);
  expect(stackList).toStrictEqual(expected);
});
