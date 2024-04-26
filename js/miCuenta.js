let usuario = JSON.parse(localStorage.getItem('usuario')) || []
let modalEditarPerfil = new bootstrap.Modal(document.getElementById('modalEditarPerfil'));
let formEditarPerfil = document.getElementById('formEditarPerfil');
let codigo =  document.getElementById('codigo'),
    nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    password = document.getElementById('password');

usuario.map((usuario) => {
    let datosUsuarios = document.getElementById('datos-usuario');
    datosUsuarios.innerHTML = `<p>Nombre: ${usuario.nombre}</p>
    <p>Correo electronico: ${usuario.email}</p>
    <p>Contraseña: ${usuario.password}</p>
    <button type="button" class="btn btn-warning" onClick="prepararUsuario('${usuario.codigo}')" >Editar perfil</button>
    <a class="btn btn-warning" href="./administrador.html">Volver atrás</a>`
})

formEditarPerfil.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    editarPerfil();
}


window.prepararUsuario = (id) =>{
    let usuarioBuscado = usuario.find((usuario) => usuario.codigo === id)
    modalEditarPerfil.show();
    codigo.value = usuarioBuscado.codigo;
    nombre.value = usuarioBuscado.nombre;
    email.value = usuarioBuscado.email;
    password.value = usuarioBuscado.password;
}

function editarPerfil(){
    let posicionUsuario = usuario.findIndex((usuario) => usuario.codigo === codigo.value);
    usuario[posicionUsuario].nombre = nombre.value;
    usuario[posicionUsuario].email = email.value;
    usuario[posicionUsuario].password = password.value;
    localStorage.setItem('usuario', JSON.stringify(usuario));
    modalEditarPerfil.hide();
    datosUsuarios.children[2].innerHTML = nombre.value;
    datosUsuarios.children[3].innerHTML = email.value;
    datosUsuarios.children[4].innerHTML = password.value;
}
