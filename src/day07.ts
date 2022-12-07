type IFileName = string;
type IFileSize = number;
type INewNode = [IFileSize, IFileName];

interface ICommand {
  action: 'navigateTo' | 'create';
  argument: string;
}

export class Node {
  name: IFileName;
  size: IFileSize;
  totalSize: IFileSize;
  children: Node[];
  parent: Node | null;

  constructor(newNode: INewNode, parent: Node | null) {
    this.size = newNode[0];
    this.totalSize = 0;
    this.name = newNode[1];
    this.children = [];
    this.parent = parent;
  }

  childExists(name: string): boolean {
    return this.children.some((child) => child.name === name);
  }

  addChild(newNode: INewNode): void {
    if (!this.childExists(newNode[1])) this.children.push(new Node(newNode, this));
  }
}

export function getResult(lineList: string[], alg: string): number {
  const commandList = generateCommandList(lineList);
  const rootNode = generateFileTree(commandList);
  generateNodeTotalSize(rootNode);

  const dirNodeList: Node[] = [];
  traverse(rootNode, dirNodeList);
  const dirList = dirNodeList.map((dir) => dir.totalSize);

  if (alg === 'a') {
    return dirList.filter((dir) => dir <= 100000).reduce((a, b) => a + b, 0);
  } else {
    const dirListSize = rootNode.totalSize;
    const minmumDelete = dirListSize - 70000000 + 30000000;
    const dirsToDelete = dirList.filter((dir) => dir > minmumDelete);

    return Math.min(...dirsToDelete);
  }
}

export function generateCommandList(lineList: string[]): ICommand[] {
  const commandList: ICommand[] = [];
  const lineListWithoutLs = lineList.filter((line) => line !== '$ ls');
  const cleanLines = lineListWithoutLs.map((line) => line.replace('$ ', ''));

  for (let i = 0; i < cleanLines.length; i++) {
    commandList.push(parseCommand(cleanLines[i]));
  }

  // Remove first line : 'cd /'
  commandList.shift();

  return commandList;
}

export function parseCommand(line: string): ICommand {
  const [first, second] = line.split(' ');
  let command: ICommand;

  if (first === 'cd') {
    command = {
      action: 'navigateTo',
      argument: second,
    };
  } else {
    command = {
      action: 'create',
      argument: line,
    };
  }

  return command;
}

export function parseCreateArgument(argument: string): INewNode {
  const [first, second] = argument.split(' ');

  if (first === 'dir') {
    return [0, second];
  } else {
    return [parseInt(first), second];
  }
}

export function generateFileTree(commandList: ICommand[]): Node {
  const rootNode = new Node([0, '/'], null);
  let currentNode = rootNode;

  for (let i = 0; i < commandList.length; i++) {
    if (commandList[i].action === 'create') {
      const parsedCreateArgs = parseCreateArgument(commandList[i].argument);
      currentNode.addChild(parsedCreateArgs);
    }
    if (commandList[i].action === 'navigateTo') {
      if (commandList[i].argument === '..' && currentNode.parent) {
        currentNode = currentNode.parent;
      } else {
        currentNode = currentNode.children.filter((child) => child.name === commandList[i].argument)[0];
      }
    }
  }

  return rootNode;
}

export function generateNodeTotalSize(node: Node): number {
  if (node.children.length !== 0) {
    node.children.forEach((child) => (node.totalSize += generateNodeTotalSize(child)));
  }

  return node.totalSize + node.size;
}

export function traverse(node: Node, array: Node[]): void {
  if (node.children.length !== 0) {
    node.children.forEach((child) => {
      array.push(child);
      traverse(child, array);
    });
  }
}
