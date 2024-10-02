fetch('data/datos.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('titulo_pagina').innerHTML = data.titulo_pagina;

        document.getElementById('datos_tienda').innerHTML = `
            <p id="nombre_pagina">Nombre: ${data.datos_tienda.nombre}</p>
            <p id="correo_pagina">Correo: ${data.datos_tienda.correo}</p>
            <p id="telefono_pagina">Telefono: ${data.datos_tienda.telefono}</p>
            <p id="direccion_pagina">Dirección: ${data.datos_tienda.direccion}</p>
        `;

        document.getElementById('horario_atencion').innerHTML = `
            <p>Lunes a Viernes: ${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
            <p>Sabados: ${data.datos_tienda.horario_atencion.sabados}</p>
            <p>Domingos: ${data.datos_tienda.horario_atencion.domingos}</p>
        `;

        const cardsContainer = document.getElementById("productos");
        cardsContainer.innerHTML = "";
        cardsContainer.style.display = "flex"; 
        cardsContainer.style.gap = "3rem"; 
        data.productos.forEach(producto => {
            let reseñasHTML = '';
            producto.reseñas.forEach(reseña => {
                reseñasHTML += `
                    <div class="reseña">
                        <p><strong>${reseña.usuario}</strong></p>
                        <p>${reseña.comentario}</p>
                        <p>Calificación: ${reseña.calificacion}</p>
                        <p>Fecha: ${reseña.fecha}</p>
                    </div>
                `;
            });

            cardsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${producto.imagenes[0]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <div class="reseñas">
                            ${reseñasHTML}
                        </div>
                    </div>
                </div>
            `;
        });

        const reseñas = document.getElementById('reseñas');
        reseñas.innerHTML = "";
        reseñas.style.display = "flex"; 
        reseñas.style.flexWrap = "wrap"; 
        reseñas.style.gap = "1rem"; 
        data.reseñas_destacadas.forEach(reseña => {
            reseñas.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${reseña.producto}</h5>
                        <p class="card-text">${reseña.comentario}</p>
                        <p class="card-text">Calificación: ${reseña.calificacion}</p>
                        <p class="card-text">Usuario: ${reseña.usuario}</p>
                    </div>
                </div>
            `;
        });
    });
