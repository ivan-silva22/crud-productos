export function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('dato correcto')
        return true;
    }else{
        console.log('dato incorrecto')
        return false;
    }
}

export function validarCategoria(texto){
    if(texto === 'carniceria' || texto === 'quesos-fiambres' || texto === 'almacen' || texto === 'limpieza-perfumeria' || texto === 'bazar' || texto === 'bebidas'){
        console.log('dato correcto')
        return true;
    }else{
        console.log('dato incorrecto')
        return false;
    }
}

export function validarPrecio(precio){
    if(precio >= 1 && precio <= 100000){
        console.log('dato correcto')
        return true;
    }else{
        console.log('dato correcto')
        return false;
    }
}