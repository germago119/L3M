import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSucursalesComponent } from './g-sucursales.component';

describe('GSucursalesComponent', () => {
  let component: GSucursalesComponent;
  let fixture: ComponentFixture<GSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
