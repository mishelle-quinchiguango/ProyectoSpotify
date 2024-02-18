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
                            const nuevaLi = document.createElement("li");
                    
                            const iconContainerfavoritos = document.createElement("div");
                            iconContainerfavoritos.classList.add("iconos_favoritos");
                    
                            // Añadir los iconos al contenedor
                            iconContainerfavoritos.innerHTML =  `
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                            <svg class="agregar-playlist-favorito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            
                        `;
                    
                            const cancionTextfavoritos = document.createElement("span");
                            cancionTextfavoritos.textContent = `${nuevaCancion.nombre}`;
                    
                            // Agregar el nombre de la canción y los iconos al contenedor
                            nuevaLi.appendChild(cancionTextfavoritos);
                            nuevaLi.appendChild(iconContainerfavoritos);
                    
                            document.getElementById("listaFavoritosCanciones").appendChild(nuevaLi);


                            const ultimoIconofavoritos = iconContainerfavoritos.lastElementChild;
                            ultimoIconofavoritos.addEventListener("click", () => {
                                // Código para eliminar la canción de la playlist
                                nuevaLi.remove();
                                listaFavoritos.eliminarPlaylist(nuevaCancion);
                                alert("Canción eliminada de Favoritos.");
                            });

                            const secondIconofavoritos = iconContainerfavoritos.children[1];

                            secondIconofavoritos.addEventListener("click", () => {
                                // Obtener el nombre de la canción
                                const nombreCancion = nuevaCancion.nombre;
                            
                                // Crear un nuevo elemento <li> para la canción
                                const nuevaLi = document.createElement("li");


                                const iconContainerplaylist = document.createElement("div");
                                iconContainerplaylist.classList.add("iconos_playlist");
    
                                iconContainerplaylist.innerHTML =  `
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    
       
                            `;
    
                                const cancionTextplaylist = document.createElement("span");
                                cancionTextplaylist.textContent = `${nuevaCancion.nombre}`;
                                nuevaLi.appendChild(cancionTextplaylist)
                                nuevaLi.appendChild(iconContainerplaylist)
    
                                document.getElementById("listaPlaylistCanciones").appendChild(nuevaLi);

                                const ultimoIconoplaylist = iconContainerplaylist.lastElementChild;
                                ultimoIconoplaylist.addEventListener("click", () => {
                                    // Código para eliminar la canción de la playlist
                                    nuevaLi.remove();
                                    listaPlaylist.eliminarPlaylist(nuevaCancion);
                                    alert("Canción eliminada de Favoritos.");
                                });
                            
                                alert("Canción agregada a Playlist.");
                            });

                    
                            alert("Canción agregada a favoritos.");
                        } else {
                            alert("La canción ya está en la lista de favoritos.");
                        }
                    });

                    


                    iconos.querySelector(".agregar-playlist").addEventListener("click", () => {
                        if (listaPlaylist.agregarPlaylist(nuevaCancion)) {
                            const nuevaLi = document.createElement("li");
                            const iconContainerplaylist = document.createElement("div");
                            iconContainerplaylist.classList.add("iconos_playlist");

                            iconContainerplaylist.innerHTML =  `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>

   
                        `;

                            const cancionTextplaylist = document.createElement("span");
                            cancionTextplaylist.textContent = `${nuevaCancion.nombre}`;
                            nuevaLi.appendChild(cancionTextplaylist)
                            nuevaLi.appendChild(iconContainerplaylist)

                            document.getElementById("listaPlaylistCanciones").appendChild(nuevaLi);

                            
                            const ultimoIconoplaylist = iconContainerplaylist.lastElementChild;
                            ultimoIconoplaylist.addEventListener("click", () => {
                                // Código para eliminar la canción de la playlist
                                nuevaLi.remove();
                                listaPlaylist.eliminarPlaylist(nuevaCancion);
                                alert("Canción eliminada de la playlist.");
                            });


                            
                            const secondIconoplaylist = iconContainerplaylist.children[1];

                            secondIconoplaylist.addEventListener("click", () => {
                                // Obtener el nombre de la canción
                                const nombreCancion = nuevaCancion.nombre;
                            
                                // Crear un nuevo elemento <li> para la canción
                                const nuevaLi = document.createElement("li");


                                const iconContainerfavoritos = document.createElement("div");
                                iconContainerfavoritos.classList.add("iconos_playlist");
    
                                iconContainerfavoritos.innerHTML =  `
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                <svg class="agregar-playlist-favorito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                
                            `;
    
                                const cancionTextfavoritos = document.createElement("span");
                                cancionTextfavoritos.textContent = `${nuevaCancion.nombre}`;
                                nuevaLi.appendChild(cancionTextfavoritos)
                                nuevaLi.appendChild(iconContainerfavoritos)
    
                                document.getElementById("listaFavoritosCanciones").appendChild(nuevaLi);

                                const ultimoIconofavoritos = iconContainerfavoritos.lastElementChild;
                                ultimoIconofavoritos.addEventListener("click", () => {
                                    // Código para eliminar la canción de la playlist
                                    nuevaLi.remove();
                                    listaFavoritos.eliminarPlaylist(nuevaCancion);
                                    alert("Canción eliminada de Favoritos.");
                                });

                                alert("Canción agregada a Favoritos.");
                            });

    
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
