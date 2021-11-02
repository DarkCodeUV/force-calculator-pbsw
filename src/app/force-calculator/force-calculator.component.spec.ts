import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceCalculatorComponent } from './force-calculator.component';

describe('ForceCalculatorComponent', () => {
  let component: ForceCalculatorComponent;
  let fixture: ComponentFixture<ForceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 48 when we insert 8,6', () => {
    component.calcular(8,6);
    expect(component.F).toBe(48);
});

it('should return 53.55 when we insert 8.5, 6.3', () => {
  component.calcular(8.5,6.3);
  expect(component.F).toBe(53.55);
});

});
