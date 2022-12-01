import { readFileSync } from 'fs';

export default function syncReadFile(filename: string) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);

  return arr;
}
