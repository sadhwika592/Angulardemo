import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1demo } from './child1demo';

describe('Child1demo', () => {
  let component: Child1demo;
  let fixture: ComponentFixture<Child1demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1demo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1demo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
