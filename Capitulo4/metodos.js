let cadena = 'cadena de prueba';
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
// .padStart() || .padEnd(); rellena una cadena con una nueva cadena a eleccion x cantidades de veces, tanto al comienzo como al final.

console.log(res7.padStart(2, "0"));