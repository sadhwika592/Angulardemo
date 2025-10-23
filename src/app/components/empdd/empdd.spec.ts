import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empdd } from './empdd';

describe('Empdd', () => {
  let component: Empdd;
  let fixture: ComponentFixture<Empdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
