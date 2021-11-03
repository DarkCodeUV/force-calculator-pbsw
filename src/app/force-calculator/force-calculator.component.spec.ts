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

it('should return "Syntaxis error" when "m" and "a" are not a number', () => {
  expect(component.calcular("A","B")).toContain("Syntaxis error");
  
});

it('should return "Syntaxis error" when "m" or "a" are not a number', () => {
  expect(component.calcular("A",6)).toContain("Syntaxis error");
  
});

it('should return "Syntaxis error" when "m" or "a" are not a number', () => {
  expect(component.calcular(8,"B")).toContain("Syntaxis error");
  
}); 


it('should return 0 if is "m" and "a" are null', () => {
  component.calcular(null,null);
  expect(component.F).toBe(0);
});

it('should return 0 if is "m" a null', () => {
  component.calcular(null,6);
  expect(component.F).toBe(0);
});

it('should return 0 if is "a" a null', () => {
  component.calcular(8,null);
  expect(component.F).toBe(0);
});

it('should return 0 if is "m" and "a" are undefined', () => {
  component.calcular(undefined,undefined);
  expect(component.F).toBe(0);
});

it('should return 0 if is "m" an undefined', () => {
  component.calcular(undefined,6);
  expect(component.F).toBe(0);
});

it('should return 0 if is "a" an undefined', () => {
  component.calcular(8,undefined);
  expect(component.F).toBe(0);
});


});
