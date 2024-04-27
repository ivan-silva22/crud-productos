import Producto from "../classProducto.js";
import Fecha from "../classFecha.js";
import { sumarioValidacion, sumarioValidacionFecha } from "../validaciones.js";

let formProducto = document.getElementById('formProducto')
let codigo = document.getElementById('codigo'),
    nombre = document.getElementById('producto'),
    categoria = document.getElementById('categoria'),
    imagen = document.getElementById('imagen'),
    precio = document.getElementById('precio');
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));
let btnEliminarTodo = document.getElementById('btnEliminarTodo');
let btnModalProducto = document.getElementById('btnModalProducto');
let bandera = true;

let fechaInicio = document.getElementById('fechaDesde');
let fechaFin = document.getElementById('fechaHasta');
let anio = document.getElementById('anio');
let mes = document.getElementById('mes');
let fecha = JSON.parse(localStorage.getItem('fecha')) ||{};
let modalFechaOfertas = new bootstrap.Modal(document.getElementById('modalFechaOfertas'));
let btnActualizarFecha = document.getElementById('btnActualizarFecha');
let formFechaValida = document.getElementById('formFechaValida');


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
btnEliminarTodo.addEventListener('click', eliminarTodosPoductos);

formFechaValida.addEventListener('submit', prepararFormularioFecha);
btnActualizarFecha.addEventListener('click', abrirModalFecha);

cargaInicial(); 

function cargaInicial(){
    if(listaProductos.length > 0){
        listaProductos.map((producto, index) => crearFila(producto, index + 1));
    }
}

function crearFila(producto, index){
    let tbody = document.getElementById('tbody');
        tbody.innerHTML += `<tr>
            <th scope="row" id='numeroFila' >${index}</th>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>$${producto.precio}</td>
            <td>
                <button title="Editar" type="button" class="btn btn-warning" onClick='prepararForm("${producto.codigo}")' >
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button title="Eliminar" type="button" class="btn btn-danger" onClick='borrarProducto("${producto.codigo}")'>
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>`;   
}


function prepararFormulario(e){
    e.preventDefault();
    if(bandera){
        crearProducto();
    }else{
        editarProducto();
    }
    console.log('hola')
}


function crearProducto(){
    let resumenValidaciones = sumarioValidacion(nombre.value, categoria.value, imagen.value, precio.value);
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

function eliminarTodosPoductos(){
    if(listaProductos.length > 0){
        Swal.fire({
            title: "¿Esta seguro que desea eliminar todos los productos?",
            text: "No se puede revertir este proceso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
                listaProductos = [];
                localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
                let tbody = document.getElementById('tbody');
                tbody.innerHTML = ''
              Swal.fire({
                title: "Exito!",
                text: "Todos los productos fueron eliminados.",
                icon: "success"
              });
            }
          });
    }else{
        Swal.fire({
            title: "Error!",
            text: "No hay productos para eliminar!",
            icon: "error"
          });
    }
    
}

window.borrarProducto = (id) =>{
    Swal.fire({
        title: "¿Esta seguro que desea eliminar el producto?",
        text: "No se puede revertir este proceso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar"
      }).then((result) =>{
        if(result.isConfirmed){
            let posicionProducto = listaProductos.findIndex((producto) => producto.codigo === id);
            listaProductos.splice(posicionProducto, 1);
            localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
            let tbody = document.getElementById('tbody');
            tbody.removeChild(tbody.children[posicionProducto]);
            tbody.innerHTML = '';
            listaProductos.map((producto, index) => crearFila(producto, index + 1))    
        }
    })
}


window.prepararForm = (id) =>{
    let buscarProducto = listaProductos.find((producto) => producto.codigo === id);
    abrirModalProduto();
    codigo.value = buscarProducto.codigo;
    nombre.value = buscarProducto.nombre;
    categoria.value = buscarProducto.categoria;
    imagen.value = buscarProducto.imagen;
    precio.value = buscarProducto.precio;
    bandera = false;
}

function editarProducto(){
    let posicionProducto = listaProductos.findIndex((producto) => producto.codigo === codigo.value);
    let resumen = sumarioValidacion(nombre.value, categoria.value, imagen.value, precio.value);
    if(resumen.length === 0){
        listaProductos[posicionProducto].nombre = nombre.value;
        listaProductos[posicionProducto].categoria = categoria.value;
        listaProductos[posicionProducto].imagen = imagen.value;
        listaProductos[posicionProducto].precio = precio.value;
        guardarEnLocalStorage();
        modalProducto.hide();
        let tbody = document.getElementById('tbody');
        tbody.children[posicionProducto].children[1].innerHTML = nombre.value;
        tbody.children[posicionProducto].children[2].innerHTML = categoria.value;
        tbody.children[posicionProducto].children[3].innerHTML = '$' + precio.value;
    }else{
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = resumen;
        alerta.className = 'alert alert-danger';
    }
}


function prepararFormularioFecha(e){
    e.preventDefault()
    crearFecha();
}


cargaInicialFecha();

function cargaInicialFecha(){
    if(Object.keys(fecha). length > 0){
        cargarFecha(fecha);
    }else{
        let mostrarFecha = document.getElementById('mostrarFecha');
        mostrarFecha.innerHTML = `<p>No hay datos cargados</p>`;
    }
}

function cargarFecha(fecha){
    let mostrarFecha = document.getElementById('mostrarFecha');
    mostrarFecha.innerHTML = `<p>Ofertas validas desde ${fecha.fechaInicio} al ${fecha.fechaFin} de ${fecha.mes} del ${fecha.anio}</p>`   
}


function crearFecha(){
    const nuevaFecha = new Fecha(
        fechaInicio.value,
        fechaFin.value,
        anio.value,
        mes.value
    )
    fecha = nuevaFecha
    localStorage.setItem('fecha', JSON.stringify(fecha));
    formFechaValida.reset();
    cargarFecha(nuevaFecha);
    Swal.fire({
        title: "Exito!",
        text: "Se creo correctamente la fecha de las ofertas!",
        icon: "success"
    });
    cerrarModalFecha();
}



function abrirModalFecha(){
    modalFechaOfertas.show();
}

function cerrarModalFecha(){
    modalFechaOfertas.hide();
}