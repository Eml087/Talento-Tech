/*
function sumar(a, b) {
    return a + b;
}


let resultado = sumar(5,9);

console.log('El resultado de la operacion es {resultado}')

function saludar (){
    console.log("Hola como estas?");
}

saludar();


function motrarTabla (numero) {
    
for (i = 1; i <= 10; i++){
    console.log(numero, 'x', i, '=', numero*i);
}
}

motrarTabla(3)



for( i = 1; i <= 10; i++){
    console.log("5 x", i, " = ", 5 * i);
}



function sumarConParametros ( a, b = 10){
    console.log(a+b)
}

sumarConParametros(5);
sumarConParametros(5,8);

// Funciones Flecha

const suma = (a,b) => a*b;
console.log(suma(5,6))


const saludo = (nombre) => "Hola como estas " + nombre + "?";
console.log(saludo("Alfredo"))
console.log(saludo("Jorge"))
console.log(saludo("Enrique"))
console.log(saludo("Nazario"))

const persona = {
    nombre: "Esteban",
    edad: 18
}
console.log(persona.nombre)
console.log(typeof(persona))

saludos("Ricardo", saludarAlerta)
saludos("Jose", saludarConsola)

// Callbacks - usar funciones como parametros en funciones 

const saludarConsola= function(nombre){
    console.log(nombre);
}    

const saludarAlerta = x => alert(x);


function saludos(nombre, funcion){
    const mensaje = `Hola ${nombre}`;
    
    funcion(mensaje)
}    



const cargarNombre = () => prompt("Ingrese el Nombre");

function mensajePersonalizado (funcNombre, funcMensaje) {
    const nombre = funcNombre()
    const mensaje = `Hola como estas ${nombre}`
    funcMensaje(mensaje)
}


mensajePersonalizado(cargarNombre, saludarAlerta)
mensajePersonalizado(cargarNombre, saludarConsola)


const frutas = ["Manzana","naranja", 1,2,3,4, false, true]


frutas.forEach(fruta => console.log(fruta))

const frutasIndice = frutas.forEach((fruta, indice) => {
    console.log(indice, fruta);
})

*/


const productos = {
    nombre: "teclado",
    precio: 23000

}


const titulo = document.getElementById("titulo")
console.log(titulo.textContent)

const contenedores = document.getElementsByClassName("info-content")
console.log(contenedores)

