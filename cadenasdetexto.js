let nombre = "Alexis";
let apellido = "Kayler";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let LetrasCadenaEstudiantes = estudiante.length;
let LetraPrimerNombre = nombre.charAt(0);
let PrimerLetraApellido = apellido[0];
let SinEspacios = estudiante.split(" ").join("");

console.log(estudianteMinus);
console.log(estudianteMayus);
console.log(estudiante);
console.log(LetrasCadenaEstudiantes);
console.log(LetraPrimerNombre);
console.log(PrimerLetraApellido);
console.log(SinEspacios);
// Existe la variable nombre en estudiante? True si es correcto.
console.log(estudiante.includes(nombre));