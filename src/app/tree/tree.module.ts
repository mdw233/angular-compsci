import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeDisplayComponent } from './tree-display/tree-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BinaryTreeService } from './shared/services/binary-tree.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TreeDisplayComponent,
  ],
  providers: [
    BinaryTreeService
  ]
})
export class TreeModule { }
