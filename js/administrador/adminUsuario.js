import Usuario from "../classUsuario.js";

let usuario = JSON.parse(localStorage.getItem('usuario')) || [];

crearUsuario();

export default function crearUsuario(){
    const nuevoUsuario = new Usuario(
        undefined,
        'admin',
        'admin@gmail.com',
        '@dmin_120'
    )
    usuario.push(nuevoUsuario);
    localStorage.setItem('usuario', JSON.stringify(usuario))
}
