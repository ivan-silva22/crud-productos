let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
let listaFecha = JSON.parse(localStorage.getItem('listaFecha')) || [];
let fechaOferta = document.getElementById('fechaOferta');

console.log(listaProductos)

cargaInicial();
cargarFecha();

function cargaInicial(){
    if(listaProductos.length > 0){
        listaProductos.map((producto) => crearCard(producto));
    }
}

function cargarFecha(){
  if(listaFecha.length > 0){
    listaFecha.map((fecha) => {
      fechaOferta.innerHTML = `<p class="color-texto fs-5">Validas desde ${fecha.fechaInicio} al ${fecha.fechaFin} de ${fecha.mes} del ${fecha.anio}</p>`
    })
  }
}

function crearCard(producto){
        console.log(producto)
    console.log(producto)
    if(producto.categoria === 'quesos-fiambres'){
        let quesosFiambres = document.getElementById('quesos-fiambres');
        quesosFiambres.innerHTML += `<div class="col-sm-12 col-md-4 mt-3">
        <div class="card">
            <img
              src="./img/quesos-fiambres.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <hr />
              <aside>
                <h3 class="card-precio">$${producto.precio}</h3>
              </aside>
            </div>
          </div>
      </div>`
    }else if(producto.categoria === 'almacen'){
        let almacen = document.getElementById('almacen');
        almacen.innerHTML += `<div class="col-sm-12 col-md-4 mt-3">
        <div class="card">
            <img
              src=${producto.imagen}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <hr />
              <aside>
                <h3 class="card-precio">$${producto.precio}</h3>
              </aside>
            </div>
          </div>
      </div>`
    }
}