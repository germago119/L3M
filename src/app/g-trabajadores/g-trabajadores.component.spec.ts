import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GTrabajadoresComponent} from './g-trabajadores.component';

describe('GTrabajadoresComponent', () => {
  let component: GTrabajadoresComponent;
  let fixture: ComponentFixture<GTrabajadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GTrabajadoresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
