import { Component, OnInit } from '@angular/core';
import { force } from "../force/force"
 
@Component({
  selector: 'app-force-calculator',
  templateUrl: './force-calculator.component.html',
  styleUrls: ['./force-calculator.component.scss']
})
export class ForceCalculatorComponent implements OnInit {

  result;
  operator1 = 0;
  operator2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  force(){
    let f= new force();
    this.result = f.calcular(this.operator1,this.operator2);
  }

}
