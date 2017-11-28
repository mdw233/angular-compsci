import { TestBed, inject } from '@angular/core/testing';
import { BinaryTreeService } from './binary-tree.service';
import { BinaryTree } from '../models/binary-tree';
import { BinaryTreeNode } from '../models/binary-tree-node';


describe('BinaryTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BinaryTreeService]
    });
    console.log("xxxxxxx");
  });

  it('should be created', inject([BinaryTreeService], (service: BinaryTreeService) => {
    expect(service).toBeTruthy();
  }));

  describe("when adding elements to the array", () => {

    it('a single item should be added correctly', inject([BinaryTreeService], (service: BinaryTreeService) => {
      let tree = new BinaryTree<number>();
      let numAdded = service.add(tree, 3);

      expect(numAdded).toEqual(1);
    }));

    it('a list of items should be added corectly', inject([BinaryTreeService], (service: BinaryTreeService) => {
      let tree = new BinaryTree<number>();
      let numAdded = service.add(tree, 7, 9, 1, 19, 31, 4);

      expect(numAdded).toEqual(6);
    }));
  });



  describe("when checking to see if the tree contains an item", () => {
    
    it('an empty tree should always return false', inject([BinaryTreeService], (service: BinaryTreeService) => {
      let tree = new BinaryTree<number>();
      let result = service.contains(tree, 4);
  
      expect(result).toBe(false);
    }));
  
    it('a tree with items, but none that match, should return false', inject([BinaryTreeService], (service: BinaryTreeService) => {
      let tree = new BinaryTree<number>();
      service.add(tree, 4);
      service.add(tree, 9);
      service.add(tree, 21);
  
      let result = service.contains(tree, 8);
      expect(result).toBe(false);
    }));
  
    it('a tree with a matching items should return true', inject([BinaryTreeService], (service: BinaryTreeService) => {
      let tree = new BinaryTree<number>();
      service.add(tree, 4);
      service.add(tree, 9);
      service.add(tree, 21);
  
      let result = service.contains(tree, 9);
      expect(result).toBe(true);
    }));
  });

  function getTreeWithManyItems(service: BinaryTreeService) : BinaryTree<number> {
    let tree = new BinaryTree<number>();
    service.add(tree, 7, 9, 1, 8, 12, 25, 19, 31, 4);
    return tree;
  };
  
  it("should traverse the tree in the correct order", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = getTreeWithManyItems(service);

    let array = new Array<number>();

    service.traverse(tree, (node: BinaryTreeNode<number>) => { array.push(node.value) });

    expect(array).toEqual([1, 4, 7, 8, 9, 12, 19, 25, 31]);
  }));

  it("should print the array correctly", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = getTreeWithManyItems(service);

    let array = service.toArray(tree);

    expect(array).toEqual([1, 4, 7, 8, 9, 12, 19, 25, 31]);
  }));

  it("should print the array string correctly", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = getTreeWithManyItems(service);

    let array = service.toString(tree);

    expect(array).toEqual("1,4,7,8,9,12,19,25,31");
  }));

  it("should return the correct size", inject([BinaryTreeService], (service: BinaryTreeService) => {
    let tree = getTreeWithManyItems(service);

    let size = service.size(tree);

    expect(size).toEqual(9);
  }));
});
