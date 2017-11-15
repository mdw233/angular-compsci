import { TestBed, inject } from '@angular/core/testing';
import { BinaryTreeService } from './binary-tree.service';
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
    let result = service.add(tree, 3);

    expect(result).toBe(true);
  }));
});
