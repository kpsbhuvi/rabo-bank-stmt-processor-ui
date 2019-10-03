import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedstmtsComponent } from './failedstmts.component';

describe('FailedstmtsComponent', () => {
  let component: FailedstmtsComponent;
  let fixture: ComponentFixture<FailedstmtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedstmtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedstmtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
