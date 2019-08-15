import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VReportComponent } from './v-report.component';

describe('VReportComponent', () => {
  let component: VReportComponent;
  let fixture: ComponentFixture<VReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
