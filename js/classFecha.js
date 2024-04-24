export default class Fecha{
    #fechaInicio;
    #fechaFin;
    #anio;
    #mes;
    constructor(fechaInicio, fechaFin, anio, mes ){
        this.#fechaInicio = fechaInicio;
        this.#fechaFin = fechaFin;
        this.#anio = anio;
        this.#mes = mes;
    }
    get fechaInicio(){
        return this.#fechaInicio;
    }
    set fechaInicio(nuevaFechaInicio){
        this.#fechaInicio = nuevaFechaInicio;
    }

    get fechaFin(){
        return this.#fechaFin;
    }
    set fechaFin(nuevaFechaFin){
        this.#fechaFin = nuevaFechaFin;
    }

    get anio(){
        return this.#anio;
    }
    set anio(nuevoAnio){
        this.#anio = nuevoAnio;
    }

    get mes(){
        return this.#mes;
    }
    set mes(nuevoMes){
        this.#mes = nuevoMes;
    }

    toJSON(){
        return{
            fechaInicio: this.#fechaInicio,
            fechaFin: this.#fechaFin,
            anio: this.#anio,
            mes: this.#mes
        }
    }
}