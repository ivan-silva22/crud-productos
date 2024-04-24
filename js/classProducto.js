export default class Producto{
    #codigo;
    #nombre;
    #categoria;
    #imagen;
    #precio;
    constructor(codigo = uuidv4(), nombre, categoria, imagen, precio){ 
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#categoria = categoria;
        this.#imagen = imagen;
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

    get imagen(){
        return this.#imagen;
    }
    set imagen(nuevaImagen){
        this.#imagen = nuevaImagen;
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
            imagen: this.#imagen,
            precio: this.#precio 
        }
    }
}