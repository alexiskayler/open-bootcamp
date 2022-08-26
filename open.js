const persona = {
    nombre: "Alexis",
    edad: 29,
    "Eres Desarrollador?": true,
    "Fecha de Nacimiento": new Date(1993, 7, 08),
    "Libro Favorito": {
        titulo: "Harry Postre",
        Autor: "Chespirito",
        fecha: new Date(2525, 0, 1),
        url: "www.queteimporta.com",

    }

}

console.log(persona["Libro Favorito"].url);
// Primera subida al git