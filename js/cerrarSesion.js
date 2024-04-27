let btnCerrarSesion = document.getElementById('btn-cerrar-sesion');


btnCerrarSesion.addEventListener('click', cerrarSesion);


function cerrarSesion(){
    Swal.fire({
        title: "Seguro que desea cerrar sesión?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar sesión",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.clear();
          setTimeout(() => {
            window.location.href = window.location.origin + '/index.html'
        }, 1500);          
          Swal.fire({
            title: "Sesion cerrada!",
            icon: "success",
          });
        }
    });    
}