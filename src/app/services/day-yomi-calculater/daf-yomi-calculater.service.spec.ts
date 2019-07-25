import { TestBed } from '@angular/core/testing';

import { DafYomiCalculaterService } from './daf-yomi-calculater.service';

describe('DafYomiCalculaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DafYomiCalculaterService = TestBed.get(DafYomiCalculaterService);
    expect(service).toBeTruthy();
  });
});
