export default class Producto{
    #codigo;
    #nombre;
    #categoria;
    #precio;
    constructor(codigo = uuidv4(), nombre, categoria, precio){ 
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#categoria = categoria;
        this.#precio = precio;
    }
    get codigo(){
        return this.#codigo;
    }
    set codigo(nuevoCodigo){
        this.#codigo = nuevoCodigo;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    get categoria(){
        return this.#categoria;
    }
    set categoria(nuevaCategoria){
        this.#categoria = nuevaCategoria;
    }

    get precio(){
        return this.#precio;
    }
    set precio(nuevoPrecio){
        this.#precio = nuevoPrecio;
    }

    toJSON(){
        return{
            codigo: this.#codigo,
            nombre: this.#nombre,
            categoria: this.#categoria,
            precio: this.#precio 
        }
    }
}