const prompt = require('prompt-sync')();

//1. Estructura de Datos
//a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
//✓ id (número) ✓ título (string) ✓ autor (string) ✓ año (número) ✓ género (string) ✓ disponible (booleano).
//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
//Cada usuario debe tener: ✓ id (número) ✓ nombre (string) ✓ email (string) ✓ librosPrestados (array de ids de libros).

let libros = [
    {id: 1, título: "La sombra del viento", autor: "Carlos Ruiz Zafón", año: 2001, género: "Novela", disponible: true},
    {id: 2, título: "El juego del ángel", autor: "Carlos Ruiz Zafón", año: 2008, género: "Novela", disponible: true},
    {id: 3, título: "El prisionero del cielo", autor: "Carlos Ruiz Zafón", año: 2011, género: "Novela", disponible: false},
    {id: 4, título: "El psicoanalista", autor: "John Katzenbach", año: 2002, género: "Thriller", disponible: true},
    {id: 5, título: "Revolución en la granja", autor: "George Orwell", año: 1945, género: "Fábula política", disponible: true},
    {id: 6, título: "El lobo estepario", autor: "Hermann Hesse", año: 1927, género: "Novela", disponible: false},
    {id: 7, título: "La metamorfosis", autor: "Franz Kafka", año: 1915, género: "Novela corta", disponible: true},
    {id: 8, título: "El fantasma de Canterville", autor: "Oscar Wilde", año: 1887, género: "Cuento gótico humrístico", disponible: true},
    {id: 9, título: "Los miserables", autor: "Víctor Hugo", año: 2862, género: "Novela", disponible: false},
    {id: 10, título: "Sobre la fotografía", autor: "Susan Sontag", año: 1977, género: "Ensayo", disponible: true}
];

let usuarios = [
    {id: 1, nombre: "Matteo",  email: "matteo_97@gmail.com", librosPrestados: [5, 10, 4]},
    {id: 2, nombre: "Arelys",  email: "are_1994@gmail.com", librosPrestados: [9, 7]},
    {id: 3, nombre: "Natividad",  email: "naty50@gmail.com", librosPrestados: [1, 3]},
    {id: 4, nombre: "Violeta",  email: "violeta@gmail.com", librosPrestados: [2]},
    {id: 5, nombre: "Rose",  email: "matteo_97@gmail.com", librosPrestados: [6, 8]},
];

//2. Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
//b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function agregarLibro (id, titulo, autor, anio, genero) {
    let nuevoLibro = {id: 11, título: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, género: "Novela", disponible: true};
    libros.push (nuevoLibro);
    console.log(`Se agregó el libro: ${nuevoLibro.título}`);    
};

agregarLibro(11, "Cien años de soledad", "Gabriel García Márquez", 1967, "Novela");
console.log(libros);


function buscarLibro(criterio, valor){
    for (let i=0 ; i < libros.length; i++){
        if (libros[i][criterio] === valor){
            console.log("Libro encontrado: ");
            console.log(libros[i]);
            return;
           }
    }
    console.log ("Libro no encontrado.");
};
    

buscarLibro("autor", "George Orwell");
buscarLibro("título", "Blood type");


function ordenarLibros (criterio){

    if (criterio !== "título" && criterio !== "año"){
        console.log("Criterio no válido, ingrese 'título' o 'año' ");
        return;
    }


    for (let i=0 ; i<libros.length ; i++){
        for (let j=0 ; j<libros.length - i -1; j++){
            if (libros [j][criterio] > libros[j + 1][criterio]){
                let temp = libros [j];                                          //uso una variable temporal llamada temp 
                libros[j] = libros [j+1];
                libros[j+1] = temp; 
             }
        }
    }
    console.log(`Libros ordenados por "${criterio}":`);
    console.log(libros);
};

ordenarLibros("título");  
//ordenarLibros("año"); 


function borrarLibro(id) {
    const librosActualizados = libros.filter(function(libro){
        return libro.id !== id;
    });

    if(libros.length === librosActualizados.length){
        console.log(`El libro con id ${id} no se encontró.`);
    }else {
       libros === librosActualizados;
       console.log (`El libro con id ${id} se ha eliminado.`);
    };
};

borrarLibro(3);
borrarLibro(14);
console.log(libros);








