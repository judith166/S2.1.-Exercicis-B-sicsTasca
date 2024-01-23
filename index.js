
// Bloc 1.1: Arrow functions

//Nivell 1

console.log('Exercici 1.1-1 -------->');
/*
Exercici 1
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma.
Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.
*/

//Funcion de flecha
let add = (a, b) => a + b;

let resultado = add(3, 9)
console.log(resultado);

console.log('Exercici 1.1-2 -------->');
/*
Exercici 2
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber 
que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
*/

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const numeroAletorio = randomNumber(1, 100);
console.log(numeroAletorio);

console.log('Exercici 1.1-3 -------->');
/*
Exercici 3
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat
name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una 
salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
*/


//Nivell 2
console.log('Exercici 1.1-4 -------->');
/*
Exercici 4
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de 
números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
*/

let Numeros = [1, 2, 3, 4, 5, 6];

const printNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    
}
 printNumbers(Numeros);


//Bloc 1.2: Operador ternari

//Nivell 1
console.log('Exercici 1.2-1 -------->');
/*
Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi 
l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. 
Si no, ha de retornar 'No pots conduir'.
*/
let edat = 0;

function potConduir(edat) {
    if (edat >= 18) {
        console.log('Pots conduir');
    } else if (edat < 18){
        console.log('No pots conduir');
    }
}

potConduir(15);

console.log('Exercici 1.2-2 -------->');
/*
Exercici 2
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar 
quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. 
Si no, retorna 'num2 és més gran'.
*/

let num1 = 0;
let num2 = 0;

function mesGran(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' és més gran que ' +num2);
    } 
    if (num1 < num2) {
        console.log(num2 + ' és més gran que ' + num1);
    }
}

mesGran(90, 9);

//Nivell 2
console.log('Exercici 1.2-3 -------->');
/*Exercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris 
per determinar si un número és positiu, negatiu o zero.

Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i 
utilitzi l'operador ternari per determinar el valor màxim.*/

let a = 0;
let b = 0;
let c = 0;

function trobarMaxim(a, b, c) {
    if (a > 0, b > 0, c > 0 ) {
        console.log('és positiu');
    } else if (a < 0, b < 0, c < 0) {
        console.log('es negatiu');
    }
}

trobarMaxim(8, 5, 10);


//Bloc 1.3: Callbacks

//Nivell 1
console.log('Exercici 1.3-1 -------->');
/*
Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i 
una funció de callback. La funció processar ha d'invocar la funció de callback, passant el 
nombre com a paràmetre.
*/
function processar(nombre, callback) {
    callback(nombre);
}

function miCallback(nombre) {
    console.log("Proccesar el nom: " + nombre);
}

processar("Horus ", miCallback);


console.log('Exercici 1.3-2 -------->');
/*
Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: 
dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb 
els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels 
dos nombres.
*/

function calculadora(num1, num2, callback) {
   callback(num1, num2);
}

function miCallbackSuma(num1, num2) {
    console.log("La suma es " + (num1 + num2));
}

calculadora(3, 3, miCallbackSuma);


//Bloc 1.4: Rest & Spread operators

//Nivell 1
console.log('Exercici 1.4-1 -------->');
/*
Exercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una 
tercera array que contingui tots els elements de array1 i array2.
*/

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 =[array1, array2];


console.log('Exercici 1.4-2 -------->');
/*
Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre 
indeterminat d'arguments i retornar la seva suma.
*/
const numerosAlCuadrado = [1, 2, 3, 4];

const cuadrados = numerosAlCuadrado.map(numero => numero * numero);

console.log(cuadrados);


//Bloc 1.5: Array transformations

//Nivell 1
console.log('Exercici 1.5-1 -------->');
/*
Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.
*/
const arrayNumeros= [1, 2, 3, 4];

const arrayCuadrados = arrayNumeros.map(numero => numero * numero);

console.log(arrayCuadrados); 

console.log('Exercici 1.5-2 -------->');
/*
Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.
*/
const filaNumeros = [1, 2, 3, 4];

const numerosPares = filaNumeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);


console.log('Exercici 1.5-3 -------->');
/*
Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.
*/

let numeroMajor = [1, 10, 8, 11];

const arrayFind = numeroMajor.find(numero => numero > 10);

console.log(arrayFind);


console.log('Exercici 1.5-4 -------->');
/*
Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.
*/

let listaNumeros = [13, 7, 8, 21];

const arraySuma = listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(arraySuma);

//Bloc 1.6: Array loops

//Nivell 1
console.log('Exercici 1.6-1 -------->');
/*
Exercici 1
forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];
*/

let llistatNoms = ['Anna', 'Bernat', 'Clara'];

llistatNoms.forEach(llistatNoms => {
    console.log(llistatNoms);
});


console.log('Exercici 1.6-2 -------->');
/*
Exercici 2
for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];
*/

let llistatNoms1 = ['Anna', 'Bernat', 'Clara'];

for (const llistatNoms of llistatNoms1) {
    console.log(llistatNoms);
}


console.log('Exercici 1.6-3 -------->');
/*
Exercici 3
filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. 
let numeros = [1, 2, 3, 4, 5, 6];
*/

let filaNumeros1 = [1, 2, 3, 4, 5, 6]

const numerosPares1 = filaNumeros1.filter(numero => numero % 2 === 0);

console.log(numerosPares1);


//Bloc 1.7: Promises & Async/Await

//Nivell 1
console.log('Exercici 1.7-1 -------->');
/*
Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
*/
let MyPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ('Hola, món');
    }, 2000);
})


console.log('Exercici 1.7-2 -------->');
/*
Exercici 2
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat 
a la consola.
*/

MyPromesa.then((resultado) => {
    console.log(resultado);
})


console.log('Exercici 1.7-3 -------->');
/*
Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', 
i que la rebutgi si l'input és qualsevol altra cosa.
*/
const myPromesaError = new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = obtenerResultado(); // Simula una función que devuelve un resultado
  
      if (resultado === 'Hola') {
        resolve(resultado);
      } else {
        reject('El resultado no es "Hola"');
      }
    }, 2000);
  });
  
  myPromesaError
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error('Error:', error); // Imprimirá 'Error: El resultado no es "Hola"'
    });

    function obtenerResultado() {
        const probabilidad = Math.random();
      
        if (probabilidad > 0.5) {
          return 'Hola';
        } else {
          return 'Otra cosa';
        }
      }

console.log('Exercici 1.7-4 -------->');
/*
Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa 
creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
*/

async function MyPromesaAsync () {
    try {
        console.log('Comprobando... ');

        const resultado = await MyPromesa;

        console.log('Completado... ', resultado);
    } catch (error) {
        console.error('Fallo: ', error);
    }
}

MyPromesaAsync();










