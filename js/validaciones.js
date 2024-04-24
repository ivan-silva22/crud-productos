import { validarCantidadCaracteres, validarCategoria, validarURLImagen ,validarPrecio, validarFecha, validarAnio, validarMes } from "./helpers.js";

export function sumarioValidacion(nombre, categoria, imagen, precio){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre, 2, 200)){
        resumen += 'El nombre del producto debe tener entre 2 y 200 caracteres <br>';
    }
    if(!validarCategoria(categoria)){
        resumen += 'Debe seleccionar una categoria valida <br>';
    }
    if(!validarURLImagen(imagen)){
        resumen += 'La imagen debe tener un formato valido (.jpg / .jpeg / .webp) <br>';
    }
    if(!validarPrecio(precio)){
        resumen += 'El precio debe estar entre 1 a 100.000';
    }
    return resumen;
}

export function sumarioValidacionFecha(fechaDesde, fechaHasta, anio, mes){
    let resumen = '';
    if(!validarFecha(fechaDesde)){
        resumen += 'El dia debe estar entre 1 y 31 <br>';
    }
    if(!validarFecha(fechaHasta)){
        resumen += 'El dia debe estar entre 1 y 31 <br>';
    }
    if(!validarAnio(anio)){
        resumen += 'El año debe estar entre 2000 y ' +  (new Date().getFullYear() + 1) + '<br>';
    }
    if(!validarMes(mes)){
        console.log(mes)
        resumen += 'El mes es invalido';
    }
    return resumen;
}