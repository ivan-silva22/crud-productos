import { validarCantidadCaracteres } from "./helpers.js";

export function sumarioValidacion(nombreProducto){
    let resumen = '';
    if(!validarCantidadCaracteres(nombreProducto, 2, 200)){
        resumen += 'El nombre del producto debe tener entre 2 y 200 caracteres <br>';
    }
    return resumen;
}