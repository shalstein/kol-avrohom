import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractatesPage } from './tractates.page';

describe('TractatesPage', () => {
  let component: TractatesPage;
  let fixture: ComponentFixture<TractatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
