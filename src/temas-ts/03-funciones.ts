

function suma(){
    let x=2;
    let y=4;
    let d=x+y
    console.log(d)
}

function resta(a:number, b:number):number{
    return a-b;
}
const res:number=resta(10,30);
console.log(`La resta es ${res}`)

interface Mascota{
    name:string;
    edad:number;
    raza:string;
    mostrar:()=>void;
}

function calcular(mascota:Mascota, x:number):void{
    mascota.edad += x;
    console.log(mascota);
}

const nuevaMascota:Mascota={
    name:"Fido",
    edad:3,
    raza:"Golden",
    mostrar(){
        console.log(`Hola soy ${ nuevaMascota.name} y tengo ${nuevaMascota.edad} años`);
    }
}
calcular(nuevaMascota,4)