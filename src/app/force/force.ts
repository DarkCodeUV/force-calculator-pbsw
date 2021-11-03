import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class force {

    F=undefined;
    m=undefined;
    a=undefined;
  
    calcular(m,a){  
      try {
        this.m = parseFloat(a);
        this.a = parseFloat(m);
      } catch (error) {
      }
      if(m === null && a === null) return this.F=0;
      if(m === null || a === null) return this.F=0;
      if(m === undefined && a === undefined) return this.F=0;
      if(m === undefined || a === undefined) return this.F=0;
      if(typeof(m) !== "number" && typeof(a) !== "number") return "Syntaxis error"; 
      if((typeof(m) !== "number") || (typeof(a) !== "number")) return "Syntaxis error"; 

      return this.F=a*m;
  }
}