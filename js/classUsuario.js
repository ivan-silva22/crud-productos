export default class Usuario{
    #codigo;
    #nombre;
    #email;
    #password;
    constructor(codigo = uuidv4(), nombre, email, password){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#email = email;
        this.#password = password;
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

    get email(){
        return this.#email;
    }
    set email(nuevoEmail){
        this.#email = nuevoEmail;
    }

    get password(){
        this.#password;
    }
    set password(nuevoPassword){
        this.#password = nuevoPassword;
    }

    toJSON(){
        return{
            codigo: this.#codigo,
            nombre: this.#nombre,
            email: this.#email,
            password: this.#password
        }
    }
}