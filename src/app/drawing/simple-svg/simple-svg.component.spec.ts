import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSvgComponent } from './simple-svg.component';

describe('SimpleSvgComponent', () => {
  let component: SimpleSvgComponent;
  let fixture: ComponentFixture<SimpleSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
