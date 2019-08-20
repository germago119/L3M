import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VPuntoVentaComponent} from './v-punto-venta.component';

describe('VPuntoVentaComponent', () => {
  let component: VPuntoVentaComponent;
  let fixture: ComponentFixture<VPuntoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VPuntoVentaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
