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
}



class Favoritos extends Lista_canciones{
    constructor(nombre, cancionInicial){
        super(nombre, cancionInicial);
    }
}

class MyPlaylist extends Lista_canciones{
    constructor(nombre, cancionInicial){
        super(nombre, cancionInicial);
    }
}

class PlaylistBusqueda extends Lista_canciones{
    constructor(nombre, cancionInicial){
        super(nombre, cancionInicial);
    }

    buscarCancion(nombre, artista, genero){
        return this.canciones.find(c => c.nombre ==cancion.nombre && c.artista==cancion.artista && c.genero==cancion.genero);
    }
}



const cancion1 = new Cancion("Bohemian Rhapsody", "Queen");
const cancion2 = new Cancion("Stairway to Heaven", "Led Zeppelin");

const miLista = new Lista_canciones("Lista de reproducción", cancion1);
miLista.addCancion(cancion2);

console.log("Lista de reproducción:");
miLista.canciones.forEach(cancion => {
    console.log(`- "${cancion.titulo}" de ${cancion.artista}`);
});

miLista.removeCancion(cancion1);

console.log("Lista de reproducción después de eliminar una canción:");
miLista.canciones.forEach(cancion => {
    console.log(`- "${cancion.titulo}" de ${cancion.artista}`);
});
