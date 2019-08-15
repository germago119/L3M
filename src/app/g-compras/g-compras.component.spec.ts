import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GComprasComponent } from './g-compras.component';

describe('GComprasComponent', () => {
  let component: GComprasComponent;
  let fixture: ComponentFixture<GComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
