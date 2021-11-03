import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForceCalculatorComponent } from './force-calculator.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ForceCalculatorComponent', () => {
  let component: ForceCalculatorComponent;
  let fixture: ComponentFixture<ForceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceCalculatorComponent ],
      imports: [FormsModule],
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

  it('Should call calcular method', () => {
 
    let result;
    component.operator1 = 2;
    component.operator2 = 2;

    component.force();
    result = component.result;

    expect(result).toBe(4);
 });

});
