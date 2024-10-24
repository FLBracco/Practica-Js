//transformadores
const nombres = ["Pedro", "Maria", "Fabricio", "Agustin"];
const numeros = [1, 2, 3, 4, 5];
console.log(`Nombres original: ${nombres}`);

// .pop(); Elimina el ultimo elemento del array y lo devuelve.
let resultado = nombres.pop()

// .shift(); Elimina el primer elemento de un array y lo devuelve.
resultado = nombres.shift();

// .push(); Agrega un elemento al array al final de la lista.
resultado = nombres.push("Lucas", "Joaquin");

// .reverse(); Invierte el orden de los elementos al inicio del array.
resultado = numeros.reverse()

// .unshift(); Agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array. 
resultado = numeros.unshift(-2,-1,0);

// .sort(); Ordena los elementos de un array localmente y devuelve el arreglo ordenado. 
const numbers = [9,2,3,5,1,4,6,8,7];
const result = numbers.sort();

// .splice(); Cambia el contenido de un array eliminado elementos existentes y/o agregando nuevos elementos.
const estaciones = ["verano", "invierno", "primavera"];
console.log(estaciones);
estaciones.splice(1, 0, "otoño");
console.log(estaciones);

//Accesores
// .join(); Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
// .slice(); Devuelve una parte del array dentro de un nuevo array empezando por un inicio hasta un fin(fin no incluido).
// metodos ya vistos en cadenas: toString(), indexOf(), lastIndexOf()

// De repeticion
// .filter(); Crea un nuevo array con todos los elementos que cumplan la funcion de busqueda.
// .forEach(); Ejecuta la funcion indicada una vez por cada elemento que pertenezca al array.