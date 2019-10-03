import { TestBed } from '@angular/core/testing';

import { StmtUploadService } from './stmt-upload.service';

describe('StmtUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StmtUploadService = TestBed.get(StmtUploadService);
    expect(service).toBeTruthy();
  });
});
