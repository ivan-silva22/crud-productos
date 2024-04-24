import { validarCantidadCaracteres, validarCategoria, validarPrecio } from "./helpers.js";

export function sumarioValidacion(nombre, categoria, precio){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre, 2, 200)){
        resumen += 'El nombre del producto debe tener entre 2 y 200 caracteres <br>';
    }
    if(!validarCategoria(categoria)){
        resumen += 'Debe seleccionar una categoria valida <br>';
    }
    if(!validarPrecio(precio)){
        resumen += 'El precio debe estar entre 1 a 100.000';
    }
    return resumen;
}