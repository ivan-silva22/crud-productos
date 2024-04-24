import Producto from "./classProducto.js";
import { sumarioValidacion } from "./validaciones.js";

let formProducto = document.getElementById('formProducto')
let nombre = document.getElementById('producto'),
    categoria = document.getElementById('categoria'),
    precio = document.getElementById('precio');
let listaProductos = [];

formProducto.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    e.preventDefault();
    crearProducto();
    console.log('hola')
}

function crearProducto(){
    let resumenValidaciones = sumarioValidacion(nombreProducto);
    if(resumenValidaciones.length === 0){
        const nuevoProducto = new Producto(
            undefined,
            nombre.value,
            categoria.value,
            precio.value
        );
        listaProductos.push(nuevoProducto);
        console.log(listaProductos)
    }
    
}
