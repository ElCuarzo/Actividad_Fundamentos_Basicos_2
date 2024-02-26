// 1.- Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

var array = [-1,3,5,-5];
function devolverpositivo(b){
    var devolverpositivo = [];
    for (var i = 0; i < b.length; i++){
        if (b[i] > 0){
            devolverpositivo.push("big")
        }
        else {
            devolverpositivo.push(b[i])
        }
    }
    console.log(devolverpositivo)
}
devolverpositivo(array)

// 2.- Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

var array = [1,5,-3,100,101,-200];
function menormayor(b){
    var menor = b[0];
    var mayor = b[0];
    for (var i = 1; i < b.length; i++){
        if (b[i] < menor){
            menor = b[i]
        }
        if (b[i] > mayor){
            mayor = b[i]
        }
    }
    console.log(menor)
    return mayor
}
console.log(menormayor(array))

// 3.- Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

var array = [1,5,-3,100,101,-200];
function unootro(b){
    var penultimo = b[b.length -2];
    var primerimpar = 0;
    for (var i = 0; i < b.length; i++){
        if (b[i] % 2 === 1){
            primerimpar = b[i];
            break
        }
    }
    console.log(penultimo)
    return primerimpar
}
console.log(unootro(array))

// 4.- Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

var array = [1,2,3];
function multiplicar(){
    for (var i = 0; i < array.length; i++){
        array[i] *= 2;
    }
    return array
}
console.log(multiplicar())

// 5.- Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

var array = [-1,1,1,3,5,3,-2,-3,-2,-2];
function devolver(b){
    var devolver = [];
    var positivos = 0;
    for (var i = 0; i < b.length - 1; i++){
        devolver.push(b[i])
    }
    for (var i = 0; i< b.length; i++){
        if(b[i] > 0){
            positivos += 1
        }
    }
    devolver.push(positivos)
    console.log(devolver)
}
devolver(array)

// 6.- Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

var array = [1,1,1,2,2,2,0,1,2,4,6,2,4,9,2,1,3,5];
function parimpar(b){
    var impar = 0;
    var par = 0;
    for (var i = 0; i < b.length; i++){
        if(b[i] % 2 === 0){
            impar = 0;
            par++;
        }
        else{
            par = 0;
            impar++;
        }
        if (impar === 3){
            console.log("¡Qué imparcial!")
        }
        if (par === 3){
            console.log("¡Es para bien!")
        }
    }
}
parimpar(array)

// 7.- Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 

var array = [1,2,3,4,5,6,7,8,9,10];
function incrementa(b){
    var arr = [];
    for (var i = 0; i < b.length; i++){
        console.log(b[i])
        if(i % 2 === 1){
            b[i]++;
        }
    }
    return b;
}
console.log(incrementa(array))

// 8.- Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?

var arr = ["programar","dojo", "genial"];
function longitudprevia(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(longitudprevia(arr))

// 9.-  Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

var array = [1,2,3];
function sumar7(array){
    for (var i = 0; i < array.length; i++){
        array[i] = array[i] + 7 
    }
    return array
}
console.log(sumar7(array))

// 10.- Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

var array = [1,2,3,4,5,6,7];
function arrayinverso(array){
    var izquierda = 0;
    var derecha = array.length-1;
    while (izquierda < derecha){
        array[izquierda] = array[izquierda] + array[derecha];
        array[derecha] = array[izquierda] - array[derecha];
        array[izquierda] = array[izquierda] - array[derecha];
        izquierda++;
        derecha--;
    }
    return array
}
console.log(array);
console.log(arrayinverso(array));

// 11.- Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

var array = [1,-3,5,9,2,-1,-2];
function devolvernegativo(array){
    var newarray = [];
    for (var i = 0; i < array.length; i++){
        if(array[i] < 0){
            newarray.push(array[i])
        }
        else {
        temp = array[i] - array[i] - array[i];
        newarray.push(temp)
        }
    }
    console.log(newarray)
}
devolvernegativo(array)

// 12.- Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

var array_comida = ["comida", "comida"];
var array_ferreteria = ["clavo", "tornillo"];
function hambriento(array){
    var comida = [];
    for (var i = 0; i < array.length; i++){
    if (array[i] === "comida"){
        comida.push("yummy")
    }
    else {
        console.log("tengo hambre");
        break
        }
    }
    if (comida.length > 0){
        console.log(comida)
    }
}
hambriento(array_ferreteria);
hambriento(array_comida);

// 13.- Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

var arr = [1,2,3,4,5,6];
function devolver(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(devolver(arr))

// 14.- Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

var array = [1,2,3];
var num = 3;
function escaladodearray(array, num){
    for (var i = 0; i < array.length; i++){
        array[i] = array[i]*num;
    }
    return array
}
    console.log(escaladodearray(array,num));