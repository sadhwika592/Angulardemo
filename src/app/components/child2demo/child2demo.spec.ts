import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2demo } from './child2demo';

describe('Child2demo', () => {
  let component: Child2demo;
  let fixture: ComponentFixture<Child2demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child2demo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2demo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
