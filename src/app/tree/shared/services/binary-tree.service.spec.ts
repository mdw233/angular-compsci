import { TestBed, inject } from '@angular/core/testing';
import { BinaryTreeService } from './binary-tree.service';
import { BinaryTree } from '../models/binary-tree';
import { BinaryTreeNode } from '../models/binary-tree-node';


describe('BinaryTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BinaryTreeService]
    });
  });

  it('should be created', inject([BinaryTreeService], (service: BinaryTreeService) => {
    expect(service).toBeTruthy();
  }));


  it('contains should return false when the element does not exist', inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    let result = service.contains(tree, 4);

    expect(result).toBe(false);
  }));

  it('contains should return false when the element does not exist', inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 4);
    service.add(tree, 9);
    service.add(tree, 21);

    let result = service.contains(tree, 8);
    expect(result).toBe(false);
  }));
  
  it('contains should return true when the element does exist', inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 4);
    service.add(tree, 9);
    service.add(tree, 21);

    let result = service.contains(tree, 9);
    expect(result).toBe(true);
  }));

  it('adding should not fail', inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 3);
    let result = service.contains(tree, 3);

    expect(result).toBe(true);
  }));
  
  it('adding via array should work', inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 7, 9, 1, 8, 12, 25, 19, 31, 4);
    let result = service.contains(tree, 1);

    expect(result).toBe(true);
  }));
  
  it("should traverse the tree correctly", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 7, 9, 1, 8, 12, 25, 19, 31, 4);

    let array = new Array<number>();

    service.traverse(tree, (node: BinaryTreeNode<number>) => { array.push(node.value) });

    expect(array).toEqual([1,4,7,8,9,12,19,25,31]);
  }));
  
  it("should print the array correctly", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 7, 9, 1, 8, 12, 25, 19, 31, 4);

    let array = service.toArray(tree);

    expect(array).toEqual([1,4,7,8,9,12,19,25,31]);
  }));
  
  it("should print the array string correctly", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 7, 9, 1, 8, 12, 25, 19, 31, 4);

    let array = service.toString(tree);

    expect(array).toEqual("1,4,7,8,9,12,19,25,31");
  }));
  
  it("should return the correct size", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = new BinaryTree<number>();
    service.add(tree, 7, 9, 1, 8, 12, 25, 19, 31, 4);

    let size = service.size(tree);

    expect(size).toEqual(9);
  }));
});
