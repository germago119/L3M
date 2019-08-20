import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GProveedoresComponent} from './g-proveedores.component';

describe('GProveedoresComponent', () => {
  let component: GProveedoresComponent;
  let fixture: ComponentFixture<GProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GProveedoresComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
