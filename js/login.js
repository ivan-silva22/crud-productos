// let usuario = JSON.parse(localStorage.getItem('usuario')) || {};

// let formLogin = document.getElementById('formLogin');
// let email = document.getElementById('email');
// let password = document.getElementById('password');

// formLogin.addEventListener('submit', prepararForm);


// function prepararForm(e){
//     e.preventDefault();
//     const buscarUsuario = usuario.some((usuario) => usuario.email === email.value || usuario.password === password.value);
//     if(buscarUsuario){
//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: 'Bienvenido',
//             showConfirmButton: false,
//             timer: 1500
//           });
//         setTimeout(() => {
//             window.location.href = window.location.origin + '/pages/administradorProductos/administrador.html'
//         }, 1500);
//     }else{
//         Swal.fire({
//             position: "center",
//             icon: "error",
//             title: 'email o contraseña incorrectos',
//             showConfirmButton: false,
//             timer: 1500
//           });
//     }
// }