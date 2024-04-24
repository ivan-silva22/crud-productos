import Producto from "../classProducto.js";
import Fecha from "../classFecha.js";
import { sumarioValidacion, sumarioValidacionFecha } from "../validaciones.js";

let formProducto = document.getElementById('formProducto')
let nombre = document.getElementById('producto'),
    categoria = document.getElementById('categoria'),
    imagen = document.getElementById('imagen'),
    precio = document.getElementById('precio');
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let listaFecha = JSON.parse(localStorage.getItem('listaFecha')) || [];
let modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));
let modalFechaOfertas = new bootstrap.Modal(document.getElementById('modalFechaOfertas'));
let btnModalProducto = document.getElementById('btnModalProducto');
let btnModalFecha = document.getElementById('btnModalFecha');
let formFechaValida = document.getElementById('formFechaValida');
let fechaDesde = document.getElementById('fechaDesde');
let fechaHasta = document.getElementById('fechaHasta');
let anio = document.getElementById('anio');
let mes = document.getElementById('mes');



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
btnModalFecha.addEventListener('click', abrirModalFecha)
formFechaValida.addEventListener('submit', prepararFormularioFecha);

cargaInicial();
mostrarFecha();

function mostrarFecha(){
    let mostrarFecha = document.getElementById('mostrarFecha');
    if(listaFecha.length > 0){
        listaFecha.map((fecha) => mostrarFecha.innerHTML = `<p>Ofertas validas desde el ${fecha.fechaInicio} al ${fecha.fechaFin} de ${fecha.mes} del ${fecha.anio}</p>`)
        
    }
    
}

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
    if(index > 10){
        let paginacion = document.getElementById('paginacion');
        paginacion.className = ''
    }    
}


function prepararFormulario(e){
    e.preventDefault();
    crearProducto();
    console.log('hola')
}

function prepararFormularioFecha(e){
    e.preventDefault();
    crearFecha();
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

function crearFecha(){
    console.log(anio.value)
    console.log(mes.value)
    let resumen = sumarioValidacionFecha(fechaDesde.value, fechaHasta.value, anio.value, mes.value);
    if(resumen.length === 0){
        const nuevaFecha = new Fecha(
            fechaDesde.value,
            fechaHasta.value,
            anio.value,
            mes.value
        )
        listaFecha.push(nuevaFecha);
        localStorage.setItem('listaFecha', JSON.stringify(listaFecha));
        formFechaValida.reset();
        Swal.fire({
            title: "Exito!",
            text: "Se guardo correctamente la fecha!",
            icon: "success"
        });
        console.log(nuevaFecha)
    }else{
        let aletaFecha = document.getElementById('aletaFecha');
        aletaFecha.innerHTML = resumen;
        aletaFecha.className = 'alert alert-danger';
    }

}


function guardarEnLocalStorage(){
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}

function abrirModalProduto(){
    modalProducto.show();
}

function abrirModalFecha(){
    modalFechaOfertas.show();
}

function limpiarFormularioProducto(){
    formProducto.reset();
}