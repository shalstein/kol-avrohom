import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractatePage } from './tractate.page';

describe('TractatePage', () => {
  let component: TractatePage;
  let fixture: ComponentFixture<TractatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
