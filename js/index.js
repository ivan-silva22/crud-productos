let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
let fecha = JSON.parse(localStorage.getItem("fecha")) || [];
let fechaOferta = document.getElementById("fechaOferta");

cargaInicial();
cargarFecha();

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((producto) => crearCard(producto));
  }
}

function cargarFecha() {
  if (fecha !== 0) {
    fechaOferta.innerHTML = `<p class="color-texto fs-5">Validas desde ${fecha.fechaInicio} al ${fecha.fechaFin} de ${fecha.mes} del ${fecha.anio}</p>`;
  }
}

function crearCard(producto) {
  if (producto.categoria === "carniceria") {
    let carniceria = document.getElementById("carniceria");
    carniceria.innerHTML += `<div class="col-sm-12 col-md-4 mt-3">
        <div class="card">
            <img
              src=${producto.imagen}
              class="card-img-top"
              alt=${producto.nombre}
            />
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <hr />
              <aside>
                <h3 class="card-precio">$${producto.precio}</h3>
              </aside>
            </div>
          </div>
      </div>`;
  } else if (producto.categoria === "quesos-fiambres") {
    let quesosfiambres = document.getElementById("quesos-fiambres");
    quesosfiambres.innerHTML += `<div class="col-sm-12 col-md-4 mt-3">
        <div class="card">
            <img
              src=${producto.imagen}
              class="card-img-top"
              alt=${producto.nombre}
            />
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <hr />
              <aside>
                <h3 class="card-precio">$${producto.precio}</h3>
              </aside>
            </div>
          </div>
      </div>`;
  } else if (producto.categoria === "almacen") {
    let almacen = document.getElementById("almacen");
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
    </div>`;
  } else if (producto.categoria === "limpieza-perfumeria") {
    let limpiezaPerfumeria = document.getElementById("limpieza-perfumeria");
    limpiezaPerfumeria.innerHTML += `<div class="col-sm-12 col-md-4 mt-3">
    <div class="card">
        <img
          src=${producto.imagen}
          class="card-img-top"
          alt=${producto.nombre}
        />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <hr />
          <aside>
            <h3 class="card-precio">$${producto.precio}</h3>
          </aside>
        </div>
      </div>
  </div>`;
  } else if (producto.categoria === "bazar") {
    let bazar = document.getElementById("bazar");
    bazar.innerHTML += `<div class="col-sm-12 col-md-4 mt-3">
  <div class="card">
      <img
        src=${producto.imagen}
        class="card-img-top"
        alt=${producto.nombre}
      />
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <hr />
        <aside>
          <h3 class="card-precio">$${producto.precio}</h3>
        </aside>
      </div>
    </div>
</div>`;
  } else if (producto.categoria === "bebidas") {
    let bebidas = document.getElementById("bebidas");
    bebidas.innerHTML += `<div class="col-sm-12 col-md-4 mt-3">
  <div class="card">
      <img
        src=${producto.imagen}
        class="card-img-top"
        alt=${producto.nombre}
      />
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <hr />
        <aside>
          <h3 class="card-precio">$${producto.precio}</h3>
        </aside>
      </div>
    </div>
</div>`;
  }
}
