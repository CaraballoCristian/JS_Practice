
const h2 = document.getElementById("h2");
const p = document.getElementById("parrafo");
 
    //-----------------------------------------------------------------------------------------------
const ejercicio1 = () =>{
    //Diseñar una función que retorne el índice de un numero dado en la sucesión de Fibonacci
    // 0 1 1 2 3 5 8 13 21 ....
    //n = 13
    //i = 7

    //Solucion Iterativa
    const fib = (n) => {
        if (n < 2) return n;                                        //en caso de que el numero ingresado sea 0 o 1
        const arrFib = [0, 1];
        let i = 1;
        while(arrFib[i] < n){
            i++;
            arrFib[i] = arrFib[i - 1] + arrFib[i - 2];
        }
        if(arrFib[i] === n) return i;
        return -1;
    }

    //Solucion Recursiva                     PENDIENTE
    //n = 4 → return 3
    ///entonces, recibe el indice y devuelve el valor en dicho indice
    /* const fibRec = n =>{

        const recur = i => {
            if (i < 2) return i;                             
            return recur[i - 2] + recur[i - 1];            
        }
        
        let i = 0;
        if (recur(i) === n){
            return i;
        };
        else i++
    } */

    
    let n = 5;
    let a = fib(n);
    h2.textContent = `El indice para Fibonacci ${n} es:`;
    p.textContent = a;
}
//ejercicio1();

//---------------------------------------------------------------------------------------
const ejercicio2 = (str) => {
    //Dada una cadena de texto, comprobar si esta se lee igual al derecho y al revez: Ejemplo: ana, bob, otto, etc
   
    const esPalindromo = palabra => {
        const palabraInv = palabra.split("").reverse().join("");

        return palabraInv === palabra;
    }

    h2.textContent = `La palabra ${str}`

    if(esPalindromo(str)) {
        p.textContent = "Es un Palindromo";
    }else{
        p.textContent = "No es un Palindromo";
    }
}
//ejercicio2("asasa");
//---------------------------------------------------------------------------------------

const ejercicio3 = () => {
    //dada una palabra y una frase, buscar y contar, cuantas veces la palabra esta en la frase. 
    //tanto la palabra como la frase son parametros de una funcion
    const palabra = "as";
    const frase = "Hola as as soy una frase as as"

    const buscar = (palabra, frase) => {
        let ocurrencias = 0;
        const arrFrase = frase.split(" ");
        arrFrase.forEach(word => {
            if(word === palabra) ocurrencias ++;
        });
        return ocurrencias;
    }

    h2.textContent = `La palabra "${palabra}" se repite`

    p.textContent = buscar(palabra, frase).toString() + " veces";


}
//ejercicio3();

//---------------------------------------------------------------------------------------
const ejercicio4 = () => {
    //dada una cadena de texto, darla vuelta (hola → aloh) sin usar metodos propios del lenguaje, solo con estructuras de control.

    str = "Hola";
    const strInv = str.split("").reverse().join("");
    h2.textContent = str;
    p.textContent = strInv;

}
//ejercicio4();

//---------------------------------------------------------------------------------------
const ejercicio5 = (n) => {
    //dibujar un cuadrado hueco con asteriscos → cuadrado(4) seria un cuadrado de 4x4 sin relleno
    let par = "";
    for(let i = 0; i < n; i++){
        par += "#";
    };

    for(let i = 0; i < n-2; i++){
        par += "</br>#";
        for(let j = 0; j < n-2; j++){
            par += " ";
        };
        par += "#";
    }

    par += "</br>";

    if(n>1){
        for(let j = 0; j < n; j++){
            par += "#";
        };
    }
    

    p.innerHTML = par;
}
//ejercicio5(4);

//---------------------------------------------------------------------------------------
const ejerciciosMirCha = () => {
    //------------------------------------------------------------------------------------
    //Programa una función que cuente el número de caracteres de una cadena de texto, 
    //pe. miFuncion("Hola Mundo") devolverá 10.
    const ex1 = () => {

        const contarChar = str => {
            h2.textContent = `"${str}" Tiene`
            p.textContent = `${str.length} caracteres`;
        }

        const str = "Hola Mundo";        
        contarChar(str);
    }
    //ex1();

    //------------------------------------------------------------------------------------
    //Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
    //pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
    const ex2 = () => {

        const contarChar = (str, n) => {
            h2.textContent = `Los ${n} primeros caracteres de "${str}" Son`
            const str2 = str.slice(0,n);
            p.textContent = str2
        }

        const str = "Contando caracteres";        
        contarChar(str, 6);
    }
    //ex2();

    //------------------------------------------------------------------------------------
    //Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
    //pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
    const ex3 = () => {

        const separarStr = (str, n) => {
            h2.textContent = `El string "${str}" separado por "${n}" es:`
            const str2 = str.split(n);
            p.textContent = str2
        }

        const str = "Soy un String";        
        separarStr(str, " ");
    }
    //ex3();

    //------------------------------------------------------------------------------------
    //Programa una función que repita un texto X veces, 
    //pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
    const ex4 = () => {

        const repetirStr = (str, n) => {
            h2.textContent = `El string "${str}" repetido "${n}" veces es:`
            let str2 = "";
            for(let i = 0; i < n; i++){
                str2 += `${str} `;
            };
            p.textContent = str2;
        }

        const str = "hola";        
        repetirStr(str, 3);
    }
    //ex4();

    //------------------------------------------------------------------------------------
    //Programa una función que invierta las palabras de una cadena de texto, 
    //pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
    const ex5 = () => {

        const invertirStr = (str, n) => {
            h2.textContent = `El string "${str}" invertido es:`
            const strInv = str.split("").reverse().join("");
            p.textContent = strInv;
        }

        const str = "Hola Mundo";        
        invertirStr(str, 3);
    }
    //ex5();

    //------------------------------------------------------------------------------------
    //Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
    //pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2
    const ex6 = () => {

        const contarPalabras = (str, word) => {
            let cant = 0;
            h2.textContent = `Palabra Buscada: "${word}" String: "${str}"`
            str.split(" ").forEach(w => {
                if(word.toUpperCase() === w.toUpperCase()){
                    cant++;
                }
            });
            p.textContent = `Ocurrencias: ${cant} `;
        }

        const str = "Hola Mundo Adios mundo"; 
        const word = "MUNDO"       
        contarPalabras(str, word);
    }
    //ex6();

    //------------------------------------------------------------------------------------
    //Programa una función que valide si una palabra o frase dada, es un palíndromo 
    //(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
    const ex7 = () => {

        const palindromo = (str) => {
            h2.textContent = `La palabra: "${str}"`;

            if(str.toUpperCase().split("").reverse().join("") === str.toUpperCase()){
                p.textContent = "Es un palíndromo";
            }else{
                p.textContent = "No es un Palíndromo";
            }
        }

        const str = "Salas";  
        palindromo(str);
    }
    //ex7();

    //------------------------------------------------------------------------------------
    //Programa una función que elimine cierto patrón de caracteres de un texto dado, 
    //pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
    const ex8 = () => {

        const limpiarStr = (str, pattern) => {
            h2.textContent = `El String: "${str}" sin "${pattern}" es:`;
            

            p.textContent = str.replace(new RegExp(pattern, "ig"), "");
        }

        const str = "Salas";  
        limpiarStr("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
    }
    //ex8();

    //------------------------------------------------------------------------------------
    //Programa una función que obtenga un numero aleatorio entre 501 y 600.
    const ex9 = () => {

        const randomNumber = (limit) => {
            h2.textContent = `Numero random entre el 0 y el ${limit}:`;
            

            p.textContent = Math.floor(Math.random() * 500);
        }

        const limit = 500;  
        randomNumber(limit);
    }
    //ex9();

    //------------------------------------------------------------------------------------
    //Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
    //pe. miFuncion(2002) devolverá true.
    const ex10 = () => {

        const esCapicua = n => {
            return n === parseInt(n.toString().split("").reverse().join(""));
        }

        const n = 131;
        p.textContent = esCapicua(n);
        
    }
    //ex10();

    //------------------------------------------------------------------------------------
    //Programa una función que calcule el factorial de un número 
    //, pe. miFuncion(5) devolverá 120.
    const ex11 = () => {

        const factorial = n => {
            if(n <= 1) return n;
            return n * factorial(n-1);
        }

        const n = 5;
        h2.textContent = `El resultado de ${n}! es:`
        p.textContent = factorial(n);
    }
    //ex11();

    //------------------------------------------------------------------------------------
    //Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no,
    //pe. miFuncion(7) devolverá true.
    const ex12 = () => {

        const esPrimo = n => {
            if(n === 0) return false;
            for(let i = 2; i < n; i++){
                if(n % i === 0) return false;
            }
            return true;
        }

        const n = 13;
        h2.textContent = `El numero ${n}:`
        if(esPrimo(n)) result = "Es Primo";
        else result = "No es Primo"
        p.textContent = result;
    }
    //ex12();

    //------------------------------------------------------------------------------------
    //Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
    const ex13 = () => {

        const determinarParidad = n => {
            if(n % 2 === 0) return "Es Par";
            return "Es Impar";
        }

        const n = 5;
        h2.textContent = `El numero ${n}:`
        p.textContent = determinarParidad(n);
    }
    //ex13();

    //------------------------------------------------------------------------------------
    //Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
    //pe. miFuncion(0,"C") devolverá 32°F
    const ex14 = () => {

        const convertirGrados = (n, tipo) => {
            if(tipo.toUpperCase() === "C") 
                return ((n * 1.8) + 32).toFixed(2) + "°F";
            if(tipo.toUpperCase() === "F") 
                return ((n - 32) / 1.8).toFixed(2) + "°C";
        }

        const n = 25;
        const tipo = "F"
        h2.textContent = `${n}°${tipo} es equivalente a:`
        p.textContent = convertirGrados(n, tipo);
    }
    //ex14();

    //------------------------------------------------------------------------------------
    //Programa una función para convertir números de base binaria a decimal y viceversa, 
    //pe. miFuncion(100,2) devolverá 4 base 10.

    const ex15 = () => {
        const convertirBase = (n, base) => {
            if(base.toUpperCase() === "D"){
                let r = "";
                while(n != 0){
                    r += n % 2;
                    n = parseInt(n/2);
                }
                return r.split("").reverse().join("") + "B";
            }

            if(base.toUpperCase() === "B"){
                let r = 0;
                let aux = 1;

                while(n !== 0){
                    if (n % 10 !== 0) {
                        r += aux;
                    }
                    aux = 2 * aux;
                    n = parseInt(n / 10);
                }
                return r;
            }
        }

        const n = 1011;       //11
        const base = "B"
        h2.textContent = `el numero ${n}${base} equivale a:`;
        p.textContent = convertirBase(n, base);
    }

    //ex15();
    //------------------------------------------------------------------------------------
    //Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
    //pe. miFuncion(1000, 20) devolverá 800.
    
    const ex16 = () => {
        
        const aplicarDescuento = (monto, descuento) => {
            return (monto - (monto/100 * descuento));
        }

        const monto = 1000;
        const descuento = 20;
        h2.textContent = `${monto} -${descuento}% de descuento es:`;
        p.textContent = aplicarDescuento(monto, descuento);
    }
    //ex16(); 

    //------------------------------------------------------------------------------------
    //Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
    //pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
    const ex17 = () => {
        
        const yearsSince = (date) =>{
            return new Date().getFullYear() - date.getFullYear();
        }

        const date = new Date('December 17, 1995');
        h2.textContent = `Desde ${date.getFullYear()}, transcurrieron:`
        p.textContent = `${yearsSince(date)} años`;
    }
    //ex17();

    //------------------------------------------------------------------------------------
    //Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
    //pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
    const ex18 = () => {
        
        const esVocal = char => {
            const arrVowels = [a, e, i, o, u];
        }

        const yearsSince = (str) =>{
            let vocales = 0;
            let consonantes = 0;
            indice = 0;
            while(indice < str.length){
                if(new RegExp([a-zA-Z]).test(str[indice])){
                    consonantes++;
                }else{
                    vocales++;
                }
                indice++;
            }
            return `${vocales} Vocales y ${consonantes} Consonantes`
        }

        const str = "Hola Mundo";
        h2.textContent = `La Cadena ${str}, Posee:`
        p.textContent = `${yearsSince(str)}`;
    }
    ex18();

    //------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------

}
ejerciciosMirCha();