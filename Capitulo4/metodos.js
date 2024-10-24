// Metodos de cadena
let cadena = 'cadena de prueba ';
let cadena2 = 'cadena 2'
let resultado = cadena.concat(cadena2);
// .concat(); Junta 2 o mas cadenas y devuelve una nueva.
//console.log(resultado); 

let resultado2 = cadena.startsWith(cadena2);
// .startsWith(); Si una cadena comienza con los caracteres de otra cadena , devuelve true, si no devuelve false.
//console.log(resultado2);

let resultado3 = cadena.endsWith(cadena2);
// .endsWith(); si una cadena termina con los caracteres de otra cadena, devuelve true, si no false;
// console.log(resultado3);

let resultado4 = cadena.includes(cadena2);
// .includes(); Si una cadena puede encontrarse dentro de otra cadena, devuelve true, si no false;
//console.log(resultado4);

let res5 = cadena.indexOf('prueba');
// .indexOf(); Devuelve el index del elemento encontrado.
// console.log(res5);

let res6 = cadena.lastIndexOf('a');
// .lastIndexOf(); devuelve la ultima posicion encontrada del elementro encontrado, en caso contrario devuelve -1;
//console.log(res6);

let res7 = '5'
// .padStart() || .padEnd(); rellena una cadena delimitando los caracteres, si los tiene no agrega nada si no agrega el contenido con los caracteres marcados.
// console.log(res7.padEnd(30, "0"));

let res8 = cadena.repeat(4)
// .repeat(); devuelve la misma cadena repetida las veces que quieramos.
// console.log(res8);

let cadena3 = "hola, como, estas";
// .split(); Divide la cadena como le pidamos
let res9 = cadena3.split(",");
// console.log(cadena3.substring(0,4)); //Retorna la cadena en los valores que le pasemos, tanto el inicio como el final.

// .toLowerCase() 
// console.log(cadena3.toLowerCase()); // Convierte la cadena en miniscula
// .toUpperCase()
// console.log(cadena3.toUpperCase()); // Convierte la cadena en mayuscula

// .toString()
// .toString(); Convierte a string el valor que le pasemos.

// .trim()
let texto = "  hola  "; // 8 caracteres
let text = texto.trim(); // 4 caracteres

console.log(text.valueOf());