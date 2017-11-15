import { Injectable } from '@angular/core';

import { BinaryTree } from '../models/binary-tree';
import { BinaryTreeNode } from '../models/binary-tree-node';

@Injectable()
export class BinaryTreeService {

  constructor() { }

  contains<T>(tree: BinaryTree<T>, value: T): boolean {
    let found: boolean = false;
    let current: BinaryTreeNode<T> = tree.root;

    while (!found && current != null) {
      if (current.value == value) found = true;
      else if (current.value > value) current = current.left;
      else current = current.right;
    }

    return found;
  }
}
