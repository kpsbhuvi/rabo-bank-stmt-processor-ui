import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StmtUploadComponent } from './stmt-upload.component';

describe('StmtUploadComponent', () => {
  let component: StmtUploadComponent;
  let fixture: ComponentFixture<StmtUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StmtUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StmtUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
