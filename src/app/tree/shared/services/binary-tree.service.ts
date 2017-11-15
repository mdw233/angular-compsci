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

  add<T>(tree: BinaryTree<T>, value: T): boolean {
    let node = new BinaryTreeNode(value);
    if (tree.root == null) {
      tree.root = node;
      return true;
    }

    let current = tree.root;

    while (true) {
      //when the new value is less than node value, go left young man
      if (node.value < current.value) {
        if (current.left == null) {
          //if there is no left - hey that's our spot!
          current.left = node;
          return true;
        } else {
          //if there is a left we need to keep going
          current = current.left;
        }
      } else if (node.value > current.value) {
        if (current.right == null) {
          //if there is no right - well pardner, we'll take it
          current.right = node;
        } else {
          current = current.right;
        }
      } else {
        return false; //they're equal nothing to do
      }
    }
  }
}
