export function validarCantidadCaracteres(texto, min, max){
    if(texto.lenght >= min && texto.lenght <= max){
        console.log('dato correcto')
    }else{
        console.log('dato incorrecto')
    }
}