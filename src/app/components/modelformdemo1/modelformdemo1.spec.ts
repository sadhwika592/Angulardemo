import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modelformdemo1 } from './modelformdemo1';

describe('Modelformdemo1', () => {
  let component: Modelformdemo1;
  let fixture: ComponentFixture<Modelformdemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modelformdemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modelformdemo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
