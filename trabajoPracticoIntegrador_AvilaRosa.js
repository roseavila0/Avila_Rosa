const prompt = require('prompt-sync')();

//1. Estructura de Datos
//a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
//✓ id (número) ✓ título (string) ✓ autor (string) ✓ año (número) ✓ género (string) ✓ disponible (booleano).
//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
//Cada usuario debe tener: ✓ id (número) ✓ nombre (string) ✓ email (string) ✓ librosPrestados (array de ids de libros).

let = libros [
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
    {id: 4, nombre: "Violeta",  email: "matteo_97@gmail.com", librosPrestados: [2]},
    {id: 5, nombre: "Rose",  email: "matteo_97@gmail.com", librosPrestados: [6, 8]},
];


