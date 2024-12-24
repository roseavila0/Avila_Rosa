const prompt = require('prompt-sync')();

//node trabajoPracticoIntegrador_AvilaRosa.js BORRA AL FINAL!!

//1. ESTRUCTURA DE DATOS
//a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
//✓ id (número) ✓ título (string) ✓ autor (string) ✓ año (número) ✓ género (string) ✓ disponible (booleano).


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

//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
//Cada usuario debe tener: ✓ id (número) ✓ nombre (string) ✓ email (string) ✓ librosPrestados (array de ids de libros).
let usuarios = [
    {id: 1, nombre: "Matteo",  email: "matteo_97@gmail.com", librosPrestados: [5, 10, 4]},
    {id: 2, nombre: "Arelys",  email: "are_1994@gmail.com", librosPrestados: [9, 7]},
    {id: 3, nombre: "Natividad",  email: "naty50@gmail.com", librosPrestados: [1, 3]},
    {id: 4, nombre: "Violeta",  email: "violeta@gmail.com", librosPrestados: [2]},
    {id: 5, nombre: "Rose",  email: "rose_94@gmail.com", librosPrestados: [6, 8]},
];

//2. FUNCIONES DE GESTIÓN DE LIBROS --------------------------------------------------------------------------------------------------------------
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.


function agregarLibro (id, titulo, autor, anio, genero) {
    let nuevoLibro = {id: id, título: titulo, autor: autor, año: anio, género: genero, disponible: true}; 
    libros.push (nuevoLibro);
    console.log(`Se agregó el libro: ${nuevoLibro.título}`);    
}

agregarLibro(11, "Cien años de soledad", "Gabriel García Márquez", 1967, "Novela");
console.log(libros);

//b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor){
    for (let i=0 ; i < libros.length; i++){
        if (libros[i][criterio] === valor){
            console.log("Libro encontrado: ");
            console.log(libros[i]);
            return;
           }
    }
    console.log ("Libro no encontrado.");
}
    

buscarLibro("autor", "George Orwell");
buscarLibro("título", "Blood type");
buscarLibro("género", "Novela corta");

//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros (criterio){

    if (criterio !== "título" && criterio !== "año"){
        console.log("Criterio no válido, ingrese 'título' o 'año' ");
        return;
    }


    for (let i=0 ; i<libros.length ; i++){
        for (let j=0 ; j<libros.length - i -1; j++){
            if (libros [j][criterio] > libros[j + 1][criterio]){
                let temp = libros [j];  //uso una variable temporal llamada temp para guardar temporalmente el libro de la posición en j y poder intercambiarlo.
                libros[j] = libros [j+1];
                libros[j+1] = temp; 
             }
        }
    }
    console.log(`Libros ordenados por "${criterio}":`);
    console.log(libros);
}

ordenarLibros("título");  
//ordenarLibros("año"); 


//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
    const librosActualizados = libros.filter(function(libro){
        return libro.id !== id;
    });

    if(libros.length === librosActualizados.length){
        console.log(`El libro con id ${id} no se encontró.`);
    }else {
       libros = librosActualizados;
       console.log (`El libro con id ${id} se ha eliminado.`);
    }
}


borrarLibro(3);
borrarLibro(14);
console.log(libros)





//3. GESTIÓN DE USUARIOS ---------------------------------------------------------------------------------------------------------------------------------
//a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

function registrarUsuario (nombre, email) {
    let nuevoUsuario = {id: usuarios.length +1, nombre:"Leonardo", email: "leoC_Judo@gmail.com", librosPrestados: [] };  //Aqui para que se actualice automaticamente cada id le agregué length +1
    usuarios.push(nuevoUsuario);
    console.log(`Se agregó el usuario: ${nuevoUsuario.nombre}`);
}


registrarUsuario("Leonardo", "leoC_Judo@gmail.com");


//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.

function mostrarTodosLosUsuarios () {
    console.log("Los usuarios registrados son: ");
    console.log(usuarios);
}

mostrarTodosLosUsuarios();

//c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email) {

    const encontrarUsuario = usuarios.find(function (usuario){
         return usuario.email === email;
    });
    
    if (encontrarUsuario){
        console.log ("El usuario ha sido encontrado y su información completa es: ");
        console.log (encontrarUsuario);
        return encontrarUsuario;
    } else {
        console.log(`El usuario ${email} no ha sido encontrado`);
        return null; ///si no encuentra a ningun usuario le pedmos que nos retorne null.
    }
}
   
buscarUsuario("are_1994@gmail.com");
buscarUsuario("jesusa@gmail.com");
   

//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email) {
    const usuariosActualizados = usuarios.filter (function(usuario){
    return (usuario.nombre && usuario.email) !== (nombre, email);
    });

    if(usuarios.length === usuariosActualizados.length){
        console.log (`El usuario con nombre ${nombre} y correo ${email} no se puede eliminar. No se encontró en la lista. `)
    }else {
        usuarios = usuariosActualizados;
        console.log (`El usuario con nombre ${nombre} y con email ${email} se ha eliminado. `)
    }
}


borrarUsuario("Alanna", "alanna@gmail.com");
borrarUsuario("Rose", "rose_94@gmail.com" );
console.log(usuarios);








