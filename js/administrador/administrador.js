import Producto from "../classProducto.js";
import { sumarioValidacion } from "../validaciones.js";

let formProducto = document.getElementById('formProducto')
let nombre = document.getElementById('producto'),
    categoria = document.getElementById('categoria'),
    imagen = document.getElementById('imagen'),
    precio = document.getElementById('precio');
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));
let btnModalProducto = document.getElementById('btnModalProducto');


if(listaProductos.length !== 0){
    listaProductos = listaProductos.map((producto) => new Producto(
        producto.codigo,
        producto.nombre,
        producto.categoria,
        producto.imagen,
        producto.precio
    ))
}


formProducto.addEventListener('submit', prepararFormulario);
btnModalProducto.addEventListener('click', abrirModalProduto);

cargaInicial()

function cargaInicial(){
    if(listaProductos.length > 0){
        listaProductos.map((producto, index) => crearFila(producto, index + 1));
    }
}

function crearFila(producto, index){
    if(index <= 10){
        let tbody = document.getElementById('tbody');
        tbody.innerHTML += `<tr>
            <th scope="row">${index}</th>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>$${producto.precio}</td>
            <td>
                <button title="Editar" type="button" class="btn btn-warning">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button title="Eliminar" type="button" class="btn btn-danger">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>`;
    }    
}


function prepararFormulario(e){
    e.preventDefault();
    crearProducto();
    console.log('hola')
}

function crearProducto(){
    let resumenValidaciones = sumarioValidacion(nombre.value, categoria.value, imagen.value, precio.value);
    console.log(resumenValidaciones)
    if(resumenValidaciones.length === 0){
        const nuevoProducto = new Producto(
            undefined,
            nombre.value,
            categoria.value,
            imagen.value,
            precio.value
        );
        listaProductos.push(nuevoProducto);
        guardarEnLocalStorage();
        limpiarFormularioProducto();
        crearFila(nuevoProducto, listaProductos.length)
        Swal.fire({
            title: "Exito!",
            text: "Se creo correctamente el producto!",
            icon: "success"
        });
        console.log(listaProductos)
        console.log(nuevoProducto)
    }else{
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = resumenValidaciones;
        alerta.className = 'alert alert-danger';
    }
    
}


function guardarEnLocalStorage(){
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}

function abrirModalProduto(){
    modalProducto.show();
}


function limpiarFormularioProducto(){
    formProducto.reset();
}