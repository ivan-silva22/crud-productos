import Producto from "../classProducto.js";
import Fecha from "../classFecha.js";
import { sumarioValidacion, sumarioValidacionFecha } from "../validaciones.js";

let formProducto = document.getElementById('formProducto')
let nombre = document.getElementById('producto'),
    categoria = document.getElementById('categoria'),
    imagen = document.getElementById('imagen'),
    precio = document.getElementById('precio');
let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let fecha = JSON.parse(localStorage.getItem('fecha')) || {};
let modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));
let modalFechaOfertas = new bootstrap.Modal(document.getElementById('modalFechaOfertas'));
let btnModalProducto = document.getElementById('btnModalProducto');
let btnModalFecha = document.getElementById('btnModalFecha');
let formFechaValida = document.getElementById('formFechaValida');
let fechaDesde = document.getElementById('fechaDesde');
let fechaHasta = document.getElementById('fechaHasta');
let anio = document.getElementById('anio');
let mes = document.getElementById('mes');
let btnEliminarTodo = document.getElementById('btnEliminarTodo');



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
btnEliminarTodo.addEventListener('click', eliminarTodosPoductos);

cargaInicial(); 

function cargaInicial(){
    if(listaProductos.length > 0){
        listaProductos.map((producto, index) => crearFila(producto, index + 1));
    }
    if(fecha !== '' ){
        console.log(fecha)
        let mostrarFecha = document.getElementById('mostrarFecha');
        mostrarFecha.innerHTML = `<p>Ofertas validas desde ${fecha.fechaInicio} al ${fecha.fechaFin} de ${fecha.mes} del ${fecha.anio}</p>`;
    }else{
        console.log(fecha)
        let mostrarFecha = document.getElementById('mostrarFecha');
        mostrarFecha.innerHTML = `<p>No hay datos </p>`;
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
                <button title="Eliminar" type="button" class="btn btn-danger" onClick='borrarProducto("${producto.codigo}")'>
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
    let resumen = sumarioValidacionFecha(fechaDesde.value, fechaHasta.value, anio.value, mes.value);
    if(resumen.length === 0){
        const nuevaFecha = new Fecha(
            fechaDesde.value,
            fechaHasta.value,
            anio.value,
            mes.value
        )
        fecha = nuevaFecha;
        localStorage.setItem('fecha', JSON.stringify(fecha));
        formFechaValida.reset();
        modalFechaOfertas.hide();
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
            console.log(id)
            let posicionProducto = listaProductos.findIndex((producto) => producto.codigo === id);
            console.log(posicionProducto)
            listaProductos.splice(posicionProducto, 1);
            localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
            let tbody = document.getElementById('tbody');
            console.log(tbody.children[posicionProducto])
            tbody.removeChild(tbody.children[posicionProducto]);
        }
    })
}