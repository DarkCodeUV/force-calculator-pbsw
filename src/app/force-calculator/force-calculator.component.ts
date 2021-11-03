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

    if(m === null && a === null) return this.F=0;
    if(m === null || a === null) return this.F=0;
    if(m === undefined && a === undefined) return this.F=0;
    if(m === undefined || a === undefined) return this.F=0;
    if(typeof(m) !== "number" && typeof(a) !== "number") return "Syntaxis error";
    if((typeof(m) !== "number") || (typeof(a) !== "number")) return "Syntaxis error";

    return this.F=a*m;
}

}
