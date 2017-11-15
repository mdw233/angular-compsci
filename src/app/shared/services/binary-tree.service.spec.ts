import { TestBed, inject } from '@angular/core/testing';

import { BinaryTreeService } from './binary-tree.service';
import { BinaryTreeNode } from '../models/binary-tree-node';
import { BinaryTree } from '../models/binary-tree';

describe('BinaryTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BinaryTreeService]
    });
  });

  it('should be created', inject([BinaryTreeService], (service: BinaryTreeService) => {
    expect(service).toBeTruthy();
  }));


  it('should add an element correctly', inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    let result = service.contains(tree, 4);

    expect(result).toBe(false);
  }));
});
