export interface ITree {
  value: number;
  weEa: boolean;
  eaWe: boolean;
  noSo: boolean;
  soNo: boolean;
}

export type IDirection = 'weEa' | 'eaWe' | 'noSo' | 'soNo';

export class Forest {
  forestMatrix: ITree[][];

  constructor(lineList: string[]) {
    this.forestMatrix = this.generateForestMatrix(lineList);
    this.watchWeEa();
    this.watchEaWe();
    this.watchNoSo();
    this.watchSoNo();
  }

  generateForestMatrix(lineList: string[]): ITree[][] {
    return lineList.map((line) =>
      line.split('').map((treeSize) => {
        return {
          value: parseInt(treeSize),
          weEa: false,
          eaWe: false,
          noSo: false,
          soNo: false,
          weEaView: 0,
          eaWeView: 0,
          noSoView: 0,
          soNoView: 0,
        };
      }),
    );
  }

  getVisibleTreesTotal(): number {
    return this.forestMatrix.flat().filter((tree) => tree.weEa || tree.eaWe || tree.noSo || tree.soNo).length;
  }

  getRowTotal(): number {
    return this.forestMatrix.length;
  }

  getColumnTotal(): number {
    return this.forestMatrix[0].length;
  }

  updateTreeVisibility(direction: IDirection, x: number, y: number, max: number): number {
    if (this.forestMatrix[y][x].value > max) {
      this.forestMatrix[y][x][direction] = true;
      max = this.forestMatrix[y][x].value;
    }

    return max;
  }

  watchWeEa(): void {
    for (let y = 0; y < this.getRowTotal(); y++) {
      let max = -1;
      for (let x = 0; x < this.getColumnTotal(); x++) {
        max = this.updateTreeVisibility('weEa', x, y, max);
      }
    }
  }

  watchEaWe(): void {
    for (let y = 0; y < this.getRowTotal(); y++) {
      let max = -1;
      for (let x = this.getColumnTotal() - 1; x >= 0; x--) {
        max = this.updateTreeVisibility('eaWe', x, y, max);
      }
    }
  }

  watchNoSo(): void {
    for (let x = 0; x < this.getColumnTotal(); x++) {
      let max = -1;
      for (let y = 0; y < this.getRowTotal(); y++) {
        max = this.updateTreeVisibility('noSo', x, y, max);
      }
    }
  }

  watchSoNo(): void {
    for (let x = 0; x < this.getColumnTotal(); x++) {
      let max = -1;
      for (let y = this.getRowTotal() - 1; y >= 0; y--) {
        max = this.updateTreeVisibility('soNo', x, y, max);
      }
    }
  }
}

export function getResult(lineList: string[]): number {
  const forest = new Forest(lineList);

  return forest.getVisibleTreesTotal();
}
