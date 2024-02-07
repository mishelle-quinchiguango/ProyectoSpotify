// Definición de la clase Cancion
class Cancion {
    constructor(titulo, artista) {
        this.titulo = titulo;
        this.artista = artista;
    }
}

// Definición de la clase Lista
class Lista {
    constructor(nombre, cancionInicial) {
        this.nombre = nombre;
        this.canciones = []; // Array para almacenar las canciones
        if (cancionInicial) {
            this.addCancion(cancionInicial);
        }
    }

    // Método para añadir una canción a la lista
    addCancion(cancion) {
        this.canciones.push(cancion);
        console.log(`"${cancion.titulo}" de ${cancion.artista} ha sido añadida a la lista.`);
    }

    // Método para eliminar una canción de la lista
    removeCancion(cancion) {
        const index = this.canciones.findIndex(c => c.titulo === cancion.titulo && c.artista === cancion.artista);
        if (index !== -1) {
            this.canciones.splice(index, 1);
            console.log(`"${cancion.titulo}" de ${cancion.artista} ha sido eliminada de la lista.`);
        } else {
            console.log(`"${cancion.titulo}" de ${cancion.artista} no está en la lista.`);
        }
    }
}

// Ejemplo de uso
const cancion1 = new Cancion("Bohemian Rhapsody", "Queen");
const cancion2 = new Cancion("Stairway to Heaven", "Led Zeppelin");

const miLista = new Lista("Lista de reproducción", cancion1);
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
