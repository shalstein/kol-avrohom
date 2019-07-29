import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumbersPage } from './phone-numbers.page';

describe('PhoneNumbersPage', () => {
  let component: PhoneNumbersPage;
  let fixture: ComponentFixture<PhoneNumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumbersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
