import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GRolesComponent } from './g-roles.component';

describe('GRolesComponent', () => {
  let component: GRolesComponent;
  let fixture: ComponentFixture<GRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
