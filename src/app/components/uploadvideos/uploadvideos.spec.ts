import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadvideos } from './uploadvideos';

describe('Uploadvideos', () => {
  let component: Uploadvideos;
  let fixture: ComponentFixture<Uploadvideos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uploadvideos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadvideos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
