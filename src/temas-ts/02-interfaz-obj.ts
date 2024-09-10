//Clase con características reducidas 
//y pueden instanciarse objetos.



interface Alumno{
    nombre:string,
    apellido:string,
    edad:number,
    genero:string,
    calificacion?:number
}
const alumno:Alumno={
    nombre:"Mario",
    apellido:"López",
    edad:15,
    genero:"M"
}

console.table(alumno)

let mascota=['perico','perros','gato'];
console.log(mascota[1])
mascota[1]='nuevo perro';
console.log(mascota[1])
mascota.push('hamster');
console.log(mascota)

let tem:(string|number)[]=[];
tem.push(11);
tem.push('Mario')

console.log(tem)