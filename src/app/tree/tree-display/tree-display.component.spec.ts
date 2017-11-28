import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDisplayComponent } from './tree-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BinaryTreeService } from '../shared/services/binary-tree.service';

describe('TreeDisplayComponent', () => {
  let component: TreeDisplayComponent;
  let fixture: ComponentFixture<TreeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BinaryTreeService],
      declarations: [ TreeDisplayComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
