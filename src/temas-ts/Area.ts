export class Area{
    protected BaseR:number;
    protected AlturaR:number;
    protected BaseT:number;
    protected AlturaT:number;
    protected Pi:number;
    protected Radio:number;
    constructor(BaseR:number,AlturaR:number,BaseT:number,AlturaT:number,Pi:number,Radio:number){
        this.BaseR=BaseR;
        this.AlturaR=AlturaR;
        this.BaseT=BaseT;
        this.AlturaT=AlturaT;
        this.Pi=Pi;
        this.Radio=Radio;
    }
    cuadrado(){
        console.log("Base:"+this.BaseR+" Altura:"+this.AlturaR+" Resultado: "+ this.BaseR*this.AlturaR)
    }
    triangulo(){
        console.log("Base:"+this.BaseT+" Altura:"+this.AlturaT+" Resultado: "+ (this.BaseR*this.AlturaR)/2)
    }
    circulo(){
        console.log("Pi:"+this.Pi+" Radio:"+this.Radio+" Resultado: "+ this.Pi*(this.Radio*this.Radio))
    }
}




