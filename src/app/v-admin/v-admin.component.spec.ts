import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VAdminComponent} from './v-admin.component';

describe('VAdminComponent', () => {
  let component: VAdminComponent;
  let fixture: ComponentFixture<VAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VAdminComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
