import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsearchComponent } from './buttonsearch.component';

describe('ButtonsearchComponent', () => {
  let component: ButtonsearchComponent;
  let fixture: ComponentFixture<ButtonsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
