
// Bloc 1.1: Arrow functions

//Nivell 1

/*
Exercici 1
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma.
Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.
*/



/*
Exercici 2
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber 
que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
*/



/*
Exercici 3
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat
name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una 
salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
*/



//Nivell 2

/*
Exercici 4
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de 
números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
*/




//Nivell 3
/*
Exercici 5
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi 
un missatge a la consola després d'esperar 3 segons.
*/





//Bloc 1.2: Operador ternari

//Nivell 1
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

/*Exercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris 
per determinar si un número és positiu, negatiu o zero.

Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i 
utilitzi l'operador ternari per determinar el valor màxim.*/

let a = 0;
let b = 0;
let c = 0;

function trobarMaxim(a, b, c) {
    if (a > 0, b> 0, c> 0 ) {
        console.log('és positiu');
    } else if (a < 0, b < 0, c< 0) {
        console.log('es negatiu');
    } default {
        console.log('es zero');
    }
}

trobarMaxim(8, 5, 10);

//Nivell 3
/*
Exercici 4
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números 
i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a 
determinar si cada número és parell o imparell.
*/




//Bloc 1.3: Callbacks

//Nivell 1

/*
Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i 
una funció de callback. La funció processar ha d'invocar la funció de callback, passant el 
nombre com a paràmetre.
*/




/*
Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: 
dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb 
els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels 
dos nombres.
*/




//Nivell 2

/*
Exercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: 
un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de 
callback, passant el nom com a paràmetre.
*/



/*
Exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una
funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element 
de l'array.
*/





//Nivell 3

/*
Exercici 5
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de
callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la 
funció de callback amb la cadena transformada.
*/



//Bloc 1.4: Rest & Spread operators

//Nivell 1

/*
Exercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una 
tercera array que contingui tots els elements de array1 i array2.
*/




/*
Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre 
indeterminat d'arguments i retornar la seva suma.
*/




//Nivell 2

/*
Exercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', 
que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i 
comprova que 'objecte1' no ha canviat.
*/


/*
Exercici 4
Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a 
assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
*/




//Nivell 3
/*
Exercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida 
la funció utilitzant l'operador spread amb aquesta array.
*/





/*
Exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar 
aquests dos objectes en un de nou.
*/


//Bloc 1.5: Array transformations

//Nivell 1

/*
Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.
*/





/*
Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.
*/



/*
Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.
*/



/*
Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.
*/



//Nivell 2
/*
Exercici 5
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

Filtra els nombres majors o iguals a 10.
Multiplica cada nombre filtrat per 2.
Calcula la suma dels nombres filtrats i multiplicats per 2.
La funció ha de retornar el resultat de la suma.
*/





//Nivell 3
/*
Exercici 6
Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] 
són majors que 10, respectivament.
*/





//Bloc 1.6: Array loops

//Nivell 1

/*
Exercici 1
forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];
*/

let noms = ['Anna', 'Bernat', 'Clara'];

array.forEach(element => {
    noms.forEach(element => {
        
    });
});



/*
Exercici 2
for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];
*/

let noms = ['Anna', 'Bernat', 'Clara'];

for (const iterator of object) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}

/*
Exercici 3
filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. 
let numeros = [1, 2, 3, 4, 5, 6];
*/




//Nivell 2

/*
Exercici 4
for-in: Teniu un objecte amb parells clau-valor: 
let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.
*/

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        

    }

}

/*
Exercici 5
for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins 
a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];
*/

let numeros = [1, 2, 3, 4, 5, 6];

for (const iterator of object) {
    
}

//Nivell 3

/*
Exercici 6
for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index):
let noms = ['Anna', 'Bernat', 'Clara']*/




//Bloc 1.7: Promises & Async/Await

//Nivell 1

/*
Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
*/




/*
Exercici 2
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat 
a la consola.
*/





/*
Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', 
i que la rebutgi si l'input és qualsevol altra cosa.
*/





/*
Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa 
creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
*/





//Nivell 2

/*
Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error 
utilitzant un bloc try/catch.
*/




//Nivell 3
/*
Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.
*/







