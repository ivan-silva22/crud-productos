export function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        return true;
    }else{
        return false;
    }
}

export function validarCategoria(texto){
    if(texto === 'carniceria' || texto === 'quesos-fiambres' || texto === 'almacen' || texto === 'limpieza-perfumeria' || texto === 'bazar' || texto === 'bebidas'){
        return true;
    }else{
        return false;
    }
}

export function validarURLImagen(imagen){
    let patron = /\.(jpg|jpeg|webp)$/;
    if(patron.test(imagen)){
        return true;
    }else{
        return false;
    }
}

export function validarPrecio(precio){
    if(precio >= 1 && precio <= 100000){
        return true;
    }else{
        return false;
    }
}

export function validarFecha(dia){
    if(dia >= 1 && dia <= 31){
        return true;
    }else{
        return false;
    }
}

export function validarAnio(anio){
    if(anio > 2000 || anio <= (new Date().getFullYear() + 1)){
        return true;
    }else{
        return false;
    }
}

export function validarMes(mes){
    console.log(mes)
    if(mes === 'enero' || mes === 'febrero' || mes === 'marzo' || mes === 'abril' || mes === 'mayo' || mes === 'junio' || mes === 'julio' || mes === 'agosto' || mes === 'septiembre' || mes === 'octubre' || mes === 'noviembre' || mes === 'diciembre'){
        return true;
    }else{
        return false;
    }
}
