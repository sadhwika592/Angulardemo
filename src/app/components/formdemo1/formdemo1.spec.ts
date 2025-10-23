import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdemo1 } from './formdemo1';

describe('Formdemo1', () => {
  let component: Formdemo1;
  let fixture: ComponentFixture<Formdemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formdemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formdemo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
