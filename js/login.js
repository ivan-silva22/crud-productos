let usuario = JSON.parse(localStorage.getItem('usuario')) || [];
let usuarioLogueado = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || [];
let email = document.getElementById('email');
let password = document.getElementById('password');
let formLogin = document.getElementById('formLogin');


formLogin.addEventListener('submit', prepararFormLogin);


function prepararFormLogin(e){
    e.preventDefault();
    const usuarioBuscado = usuario.find((usuario) => {
        if(usuario.email === password.value || usuario.password === password.value){
            return usuario;
        }
    })
    if(usuarioBuscado !== undefined){
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Bienvenido`,
            showConfirmButton: false,
            timer: 1500
          });
        setTimeout(() => {
            window.location.href = window.location.origin + '/pages/administradorProductos/administrador.html';
        }, 1500);
        usuarioLogueado.push(usuarioBuscado);
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));

    }else{
        let alert = document.getElementById('alerta');
        alert.innerHTML = 'El email o contraseña es invalido';
        alert.className = 'alert alert-danger '
    }
    console.log(usuarioBuscado)
}
