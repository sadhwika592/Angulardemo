import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Displayname } from './displayname';

describe('Displayname', () => {
  let component: Displayname;
  let fixture: ComponentFixture<Displayname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Displayname]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Displayname);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
