// Definición de la clase Cancion
class Cancion {
    constructor(nombre, artista,genero) {
        this.nombre = nombre;
        this.artista = artista;
        this.genero=genero;
    }
}

// Definición de la clase Lista
class Lista_canciones {
    constructor(nombre_lista, cancionInicial) {
        this.nombre = nombre_lista;
        this.canciones = []; // Array para almacenar las canciones
        if (cancionInicial) {
            this.addCancion(cancionInicial);
        }
    }

    buscarCancion(cancion){
        return this.canciones.some(c => c.nombre ==cancion.nombre && c.artista==cancion.artista && c.genero==cancion.genero);
    }

    addCancion(cancion) {

        if(!this.buscarCancion(cancion)){

            this.canciones.push(cancion)
            return true

        }
        else{
            return false
        }

    }

    removeCancion(cancion) {
        const index = this.canciones.findIndex(c => c.nombre ==cancion.nombre && c.artista==cancion.artista && c.genero==cancion.genero);
        if (index !== -1) {
            this.canciones.splice(index, 1);
            return true; 
        } else {
            return false;
        }
    }

    obtenerElemento(id) {
        return document.getElementById(id);
    }


    manejarBusqueda() {
        this.obtenerElemento("btnBuscar").addEventListener("click", () => {
            const inputCancion = this.obtenerElemento("inputCancion");
            const nombreCancion = inputCancion.value.trim();

            if (nombreCancion !== "") {
                const nuevaCancion = {
                    nombre: nombreCancion,
                };

                if (this.addCancion(nuevaCancion)) {
                    const lista = this.obtenerElemento("listaCanciones");
                    const li = document.createElement("li");
                    
                    
                    const contenido=document.createElement("div");
                    contenido.classList.add("contenido")
                    
                        // Añadir iconos
                    const iconos = document.createElement("div");
                    iconos.classList.add("iconos");
                    iconos.innerHTML = `
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                            <svg class="agregar-favorito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                            <svg class="agregar-playlist" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                        `;
                    
                    const cancionText=document.createElement("span");
                    cancionText.textContent= `${nuevaCancion.nombre}`;  
                    
                    contenido.appendChild(cancionText);
                    contenido.appendChild(iconos);
    
                    // Agregar contenedor al elemento <li>
                    li.appendChild(contenido);
    
                    lista.appendChild(li);

                    iconos.querySelector(".agregar-favorito").addEventListener("click", () => {
                        if (listaFavoritos.agregarFavorito(nuevaCancion)) {
                            // Agregar el nombre de la canción a la lista de favoritos en el HTML
                            const nuevaLi = document.createElement("li");
                            nuevaLi.textContent = nuevaCancion.nombre;
                            document.getElementById("listaFavoritosCanciones").appendChild(nuevaLi);
    
                            alert("Canción agregada a favoritos.");
                        } else {
                            alert("La canción ya está en la lista de favoritos.");
                        }
                    });


                    iconos.querySelector(".agregar-playlist").addEventListener("click", () => {
                        if (listaPlaylist.agregarPlaylist(nuevaCancion)) {
                            // Agregar el nombre de la canción a la lista de favoritos en el HTML
                            const nuevaLi = document.createElement("li");
                            nuevaLi.textContent = nuevaCancion.nombre;
                            document.getElementById("listaPlaylistCanciones").appendChild(nuevaLi);
    
                            alert("Canción agregada a playlist.");
                        } else {
                            alert("La canción ya está en la lista de playlist.");
                        }
                    });
    
                    // Devolver true cuando se agrega la canción
                    return true;
                

    

                   
                } else {
                    alert("La canción ya está en la lista.");
                }

                inputCancion.value = "";
            } else {
                alert("Por favor ingresa el nombre de la canción que deseas buscar.");
            }
        });
    }

}



class Favoritos extends Lista_canciones {
    constructor(nombre, cancionInicial) {
        super(nombre, cancionInicial);
        this.favoritos = []; // Agregar la propiedad favoritos
    }

    // Método para agregar una canción a la lista de favoritos
    agregarFavorito(cancion) {
        if (!this.buscarCancion(cancion)) {
            this.favoritos.push(cancion);
            return true;
        } else {
            return false;
        }
    }

    // Método para eliminar una canción de la lista de favoritos
    eliminarFavorito(cancion) {
        const index = this.favoritos.findIndex(c => c.nombre === cancion.nombre);
        if (index !== -1) {
            this.favoritos.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    obtenerElemento(id) {
        return document.getElementById(id);
    }
}



class MyPlaylist extends Lista_canciones {
    constructor(nombre, cancionInicial) {
        super(nombre, cancionInicial);
        this.playlist = []; // Agregar la propiedad favoritos
    }

    // Método para agregar una canción a la lista de favoritos
    agregarPlaylist(cancion) {
        if (!this.buscarCancion(cancion)) {
            this.playlist.push(cancion);
            return true;
        } else {
            return false;
        }
    }

    // Método para eliminar una canción de la lista de favoritos
    eliminarPlaylist(cancion) {
        const index = this.playlist.findIndex(c => c.nombre === cancion.nombre);
        if (index !== -1) {
            this.playlist.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    obtenerElemento(id) {
        return document.getElementById(id);
    }
}




// Crear una instancia de la lista de canciones
const listaCanciones = new Lista_canciones("Mis Canciones");


// Crear una instancia de ListaFavoritos
const listaFavoritos = new Favoritos("Favoritos");

const listaPlaylist = new MyPlaylist("Playlist");

// Activar la funcionalidad del buscador
listaCanciones.manejarBusqueda();






// document.querySelectorAll("#listaCanciones .resulBuscadorlistabusqueda li").forEach(cancion => {
//     cancion.querySelector(".agregar-favorito").addEventListener("click", (event) => {
//         // Obtener el nombre de la canción desde el <span> dentro del <li>
//         const nombreCancion = cancion.querySelector(".contenido span").textContent;

//         // Crear un objeto de canción con el nombre obtenido
//         const nuevaCancion = new Cancion(nombreCancion);

//         // Agregar la canción a la lista de favoritos
//         if (listaFavoritos.agregarFavorito(nuevaCancion)) {
//             // Crear un nuevo elemento de lista para la canción en la lista de favoritos
//             const nuevaLi = document.createElement("li");
//             nuevaLi.textContent = nombreCancion;

//             // Agregar la nueva canción a la lista de favoritos en el HTML
//             document.getElementById("listaFavoritosCanciones").appendChild(nuevaLi);

//             alert("Canción agregada a favoritos.");
//         } else {
//             alert("La canción ya está en la lista de favoritos.");
//         }
//     });
// });






// document.querySelectorAll("#listadereproduccion .resulBuscadorlistabusqueda li").forEach(cancion => {
//     cancion.querySelector(".iconos .agregar-favorito").addEventListener("click", (event) => {
//         // Obtener el nombre de la canción desde el <span> dentro del <li>
//         const nombreCancion = cancion.querySelector(".contenido span").textContent;

//         console.log("Nombre de la canción:", nombreCancion);

//         // Crear un objeto de canción con el nombre obtenido
//         const nuevaCancion = new Cancion(nombreCancion);

//         // Agregar la canción a la lista de favoritos
//         if (listaFavoritos.agregarFavorito(nuevaCancion)) {
//             alert("Canción agregada a favoritos.");
//         } else {
//             alert("La canción ya está en la lista de favoritos.");
//         }
//     });
// });





// class MyPlaylist extends Lista_canciones{
//     constructor(nombre, cancionInicial){
//         super(nombre, cancionInicial);
//     }
// }

// class PlaylistBusqueda extends Lista_canciones{
//     constructor(nombre, cancionInicial){
//         super(nombre, cancionInicial);
//     }

//     buscarCancion(nombre, artista, genero){
//         return this.canciones.find(c => c.nombre == cancion.nombre && c.artista==cancion.artista && c.genero==cancion.genero);
//     }
// }




// document.querySelectorAll(".iconos").forEach(iconos => {
//     iconos.children[1].addEventListener("click", (event) => {
//         // Obtener el elemento <div class="resultado"> padre del ícono seleccionado
//         const resultado = event.target.closest(".resultadobusqueda");

//         // Verificar si se encontró el elemento <div class="resultado">
//         if (resultado) {
//             // Obtener el nombre de la canción desde el <span> dentro del <div class="resultado">
//             const nombreCancion = resultado.querySelector("span").textContent;

//             console.log("Nombre de la canción:", nombreCancion);

//             // Crear un objeto de canción con el nombre obtenido
//             const nuevaCancion = new Cancion(nombreCancion);

//             // Obtener la lista de favoritos en el HTML
//             const listaFavoritosHTML = document.getElementById("listaFavoritosCanciones");

//             // Crear un nuevo elemento de lista con el nombre de la canción
//             const nuevaCancionFavoritaHTML = document.createElement("li");
//             nuevaCancionFavoritaHTML.textContent = nombreCancion;

//             // Agregar el nuevo elemento de lista a la lista de favoritos en el HTML
//             listaFavoritosHTML.appendChild(nuevaCancionFavoritaHTML);

//             // Agregar la canción a la lista de favoritos
//             if (listaFavoritos.agregarFavorito(nuevaCancion)) {
//                 alert("Canción agregada a favoritos.");
//             } else {
//                 alert("La canción ya está en la lista de favoritos.");
//             }
//         } else {
//             alert("No se pudo encontrar la canción asociada al ícono.");
//         }
//     });
// });










// listaCanciones.obtenerElemento("listaCanciones").addEventListener("click", (event) => {
//     const icono = event.target.closest("svg");
//     if (icono && icono.parentElement.classList.contains("iconos")) {
//         const nombreCancion = icono.parentElement.parentElement.querySelector("span").textContent;
//         const nuevaCancion = {
//             nombre: nombreCancion,
//         };
//         if (listaFavoritos.agregarFavorito(nuevaCancion)) {
//             alert("Canción agregada a favoritos.");
//         } else {
//             alert("La canción ya está en la lista de favoritos.");
//         }
//     }
// });


// Agregar evento clic al segundo ícono para agregar la canción a favoritos
// Agregar evento clic al segundo ícono para agregar la canción a favoritos









// const cancion1 = new Cancion("Bohemian Rhapsody", "Queen");
// const cancion2 = new Cancion("Stairway to Heaven", "Led Zeppelin");

// const miLista = new Lista_canciones("Lista de reproducción", cancion1);
// miLista.addCancion(cancion2);

// console.log("Lista de reproducción:");
// miLista.canciones.forEach(cancion => {
//     console.log(`- "${cancion.titulo}" de ${cancion.artista}`);
// });

// miLista.removeCancion(cancion1);

// console.log("Lista de reproducción después de eliminar una canción:");
// miLista.canciones.forEach(cancion => {
//     console.log(`- "${cancion.titulo}" de ${cancion.artista}`);
// });
