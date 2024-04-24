let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];

cargaInicial()

function cargaInicial(){
    if(listaProductos.length > 0){
        listaProductos.map((producto, index) => crearFila(producto, index + 1));
    }else{
        let mensaje = document.getElementById('mensaje');
        mensaje.innerHTML = '<h3 class="display-4">No hay datos</h3>'
        mensaje.className = 'text-center mt-5';
    }
}

function crearFila(producto, index){
    if(index >= 41 && index <= 50){
        let tbody = document.getElementById('tbody');
        tbody.innerHTML += `<tr>
            <th scope="row">${index}</th>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>$${producto.precio}</td>
            <td>
                <button title="Editar" type="button" class="btn btn-warning">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button title="Eliminar" type="button" class="btn btn-danger">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>`;
        // console.log(index)
    }
}