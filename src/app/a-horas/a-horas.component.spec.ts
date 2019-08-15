import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AHorasComponent } from './a-horas.component';

describe('AHorasComponent', () => {
  let component: AHorasComponent;
  let fixture: ComponentFixture<AHorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AHorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
