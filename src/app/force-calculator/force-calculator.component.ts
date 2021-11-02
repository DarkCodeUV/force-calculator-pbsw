import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-force-calculator',
  templateUrl: './force-calculator.component.html',
  styleUrls: ['./force-calculator.component.scss']
})
export class ForceCalculatorComponent implements OnInit {

  F=undefined;
  m=undefined;
  a=undefined;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(m,a){  
    return this.F=a*m;
}

}
