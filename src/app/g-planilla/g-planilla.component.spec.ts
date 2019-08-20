import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GPlanillaComponent} from './g-planilla.component';

describe('GPlanillaComponent', () => {
  let component: GPlanillaComponent;
  let fixture: ComponentFixture<GPlanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GPlanillaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPlanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
