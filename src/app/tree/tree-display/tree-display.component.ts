import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BinaryTree } from '../shared/models/binary-tree';
import { BinaryTreeService } from '../shared/services/binary-tree.service';

@Component({
  selector: 'app-tree-display',
  templateUrl: './tree-display.component.html',
  styleUrls: ['./tree-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeDisplayComponent implements OnInit {

  constructor(private btService: BinaryTreeService) { }

  public tree: BinaryTree<number> = new BinaryTree<number>();

  public treeForm: FormGroup = new FormGroup({
    numberToAdd: new FormControl()
  });

  get treeSize(): number {
    return this.btService.size(this.tree);
  };

  ngOnInit() {
  }

  onSubmit() {
    this.btService.add(this.tree, this.treeForm.value.numberToAdd);
    this.treeForm.patchValue({
      numberToAdd: ""
    });
  }

  toArray() {
    return this.btService.toArray(this.tree);
  }
}
