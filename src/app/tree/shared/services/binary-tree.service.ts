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

  add<T>(tree: BinaryTree<T>, ...values: Array<T>): void {

    for (let value of values) {

      let node = new BinaryTreeNode(value);
      if (tree.root == null) {
        tree.root = node;
        continue;
      }

      let current = tree.root;

      while (true) {
        //when the new value is less than node value, go left young man
        if (node.value < current.value) {
          if (current.left == null) {
            //if there is no left - hey that's our spot!
            current.left = node;
            break;
          } else {
            //if there is a left we need to keep going
            current = current.left;
          }
        } else if (node.value > current.value) {
          if (current.right == null) {
            //if there is no right - well pardner, we'll take it
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break; //they're equal nothing to do
        }
      }
    }
  
  }

  traverse<T>(tree: BinaryTree<T>, process: (node: BinaryTreeNode<T>) => void) {

    function inOrder(node: BinaryTreeNode<T>)
    {
      if (!node) return;

      if (node.left) {
        inOrder(node.left);
      }

      process(node);

      if (node.right) {
        inOrder(node.right);
      }
    }

    inOrder(tree.root);
  }

  toArray<T>(tree: BinaryTree<T>): Array<T> {
    let array = new Array<T>();
    this.traverse(tree, (node: BinaryTreeNode<T>) => array.push(node.value));
    return array;
  }
  
  toString<T>(tree: BinaryTree<T>): string {
    let array = this.toArray(tree);
    return array.join(","); 
  }
  
  size<T>(tree: BinaryTree<T>): number {
    let array = this.toArray(tree);
    return array.length; 
  }
}
