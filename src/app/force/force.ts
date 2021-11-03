import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class force {

    F=undefined;
    m=undefined;
    a=undefined;
  

    calcular(m,a){  

        if(m == (parseFloat(m))) m= parseFloat(m);
        if(a == (parseFloat(a))) a= parseFloat(a);
        if(m === null && a === null) return this.F=0;
        if(m === null || a === null) return this.F=0;
        if(m === undefined && a === undefined) return this.F=0;
        if(m === undefined || a === undefined) return this.F=0;
        if(typeof(m) !== "number" && typeof(a) !== "number") return "Syntaxis error"; 
        if((typeof(m) !== "number") || (typeof(a) !== "number")) return "Syntaxis error"; 
      

      return this.F=m*a;
  }


}