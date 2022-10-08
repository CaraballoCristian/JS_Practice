
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

        const yearsSince = (str) =>{   
            let vocales = 0;
            let consonantes = 0;

            for (const letra of str) {
                if(/[A-Za-z]/.test(letra)){
                    if (/[aeiouAEIOUáéíóúÁÉÍÓÚ]/.test(letra)){
                        vocales++;
                    }else consonantes++;
                }
            }
            return `${vocales} Vocales y ${consonantes} Consonantes`
        }

        const str = "Hola Mundo";
        h2.textContent = `La Cadena ${str}, Posee:`
        p.textContent = `${yearsSince(str)}`;
    }
    //ex18();

    //------------------------------------------------------------------------------------
    //Programa una función que valide que un texto sea un nombre válido, 
    //pe. miFuncion("Jonathan MirCha") devolverá verdadero.
    const ex19 = () => {

        const validarNombre = (str) =>{   
            if(typeof str !== "string") return "Tipo de dato erroneo, debe ingresar un String";
            
            for (const letra of str) {
                if(!/^[A-Za-záéíóúÁÉÍÓÚÜü\s]$/.test(letra)){
                    return "Invalido"                    
                }
            }
            return "Valido" 
        }

        const str = "Cristian Caraballo";
        h2.textContent = `El Nombre ${str} es:`
        p.textContent = `${validarNombre(str)}`;
    }
    //ex19();

    //------------------------------------------------------------------------------------
    //Programa una función que valide que un texto sea un email válido, 
    //pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

    const ex20 = () => {

        const validarEmail = (str) =>{   
            if(typeof str !== "string") return "Tipo de dato erroneo, debe ingresar un String";
            
            let expEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

            if(expEmail.test(str)){
                return "Valido"                    
            }
            
            return "Invalido" 
        }

        const str = "nombre@gmail.com";
        h2.textContent = `El email ${str} es:`
        p.textContent = `${validarEmail(str)}`;
    }
    //ex20();

    //------------------------------------------------------------------------------------
    //Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
    //pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
    const ex21 = () => {

        const elevarArray = (arr, potencia) => {
            const arrElevado = [];
            for(let i = 0; i < arr.length; i++){
                if(typeof arr[i] !== "number") return "El Arreglo tiene valores no numéricos";
                arrElevado[i] = arr[i]**potencia;
            }
            return arrElevado;
        }

        const arr = [1, 2, 3, 4, 5, 6];
        const potencia = 2;
        h2.textContent = `el arr [${arr}] elevado al ${potencia} es:`
        p.textContent = `[${elevarArray(arr, potencia)}]`;

    }
    //ex21();

    //------------------------------------------------------------------------------------
    //Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
    //pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
    const ex22 = () => {

        const obtenerMinMax = (arr) => {
            return `${Math.max(...arr)} y ${Math.min(...arr)}`;
        }

        const arr = [1, 2, 3, 4, 5, 6];
        h2.textContent = `Los valores Max y Min del arr [${arr}] son:`
        p.textContent = obtenerMinMax(arr);

    }
    //ex22();

    //------------------------------------------------------------------------------------
    //Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
    //pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
    const ex23 = () => {

        const devolverObjetos = (arr) => {
            const arrPares = [];
            const arrImpares = [];

            arr.forEach(num => {
                if (num % 2 === 0){
                    arrPares.push(num);
                } else {
                    arrImpares.push(num);  
                } 
            });

            const obj = {
                arrPares,
                arrImpares,
                print() {
                    return `Pares: ${this.arrPares} </br>Impares: ${this.arrImpares}`;
                }
            }
            return obj.print();
        }

        const arr = [1, 2, 3, 4, 5, 6,8,7,9,3,5,66,7,78];
        h2.textContent = `Los valores Pares e Impares del arr [${arr}] son:`
        p.innerHTML = devolverObjetos(arr);

    }
    //ex23();

    //------------------------------------------------------------------------------------
    //Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
    //el 1° tendrá los numeros ordenados en forma ascendente y el 2° de forma descendiente, 
    //pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
    const ex24 = () => {

        const devolverObjetos = (arr) => {
            const arrAscendente = arr.map(num => num).sort(function(a, b){return a - b});
            const arrDescendente = arr.sort(function(a, b){return a - b}).reverse();

            const obj = {
                arrAscendente,
                arrDescendente,
                print() {
                    return `Asc:  ${this.arrAscendente} </br>Desc: ${this.arrDescendente}`;
                }
            }
            return obj.print();
        }

        const arr = [231, 2, 12, 4, 22, 6, 7, 9];
        h2.textContent = `Los valores Ascendentes y Descendentes del arr [${arr}] son:`
        p.innerHTML = devolverObjetos(arr);

    }
    //ex24();

    //------------------------------------------------------------------------------------
    //Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    //pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]

    const ex25 = () => {

        const filtrarRepetidos = (arr) => {
            const arrSet = new Set(arr);
            return Array.from(arrSet);
        }

        const arr = [1,2,3,3,4,5,6,6,7,7,7,8,9,9];
        h2.textContent = `El Array [${arr}] sin valores repetidos es:`
        p.innerHTML = filtrarRepetidos(arr);

    }
    //ex25();

    //------------------------------------------------------------------------------------
    //Programa una función que dado un arreglo de números obtenga el promedio, 
    //pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5
    const ex26 = () => {

        const obtenerPromedio = (arr) => {
            return arr.reduce((accumulator, curr) => accumulator + curr) / arr.length;
        }

        const arr = [1,2,3,3,1];
        h2.textContent = `El Promedio de la suma de el array [${arr}] es:`
        p.innerHTML = obtenerPromedio(arr);

    }
    //ex26();

    //------------------------------------------------------------------------------------
    /* 27. Programa una clase llamada Pelicula.*/
    
    const ex27 = () => {
        /*La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
        id de la película en IMDB, 
        titulo, 
        director, 
        año de estreno, 
        país o países de origen, 
        géneros 
        calificación en IMBD.
        
        - Todos los datos del objeto son obligatorios.*/
        
        class Pelicula {
            constructor(peli){
                    
                //Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
                if(/^([a-z]{2})([0-9]{7})$/.test(peli.id)) this.id = peli.id;
                else console.error(`El id ${peli.id} no es un id valido, verifique que este compuesto de 2 letras seguidas de 7 numeros`);
                
                //Valida que el título no rebase los 100 caracteres.
                if(peli.titulo.length < 100 && peli.titulo != "") this.titulo = peli.titulo;
                else console.error(`El nombre del titulo debe ser mayor a 0 caracteres y  no puede rebasar los 100 caracteres`);
                
                //Valida que el director no rebase los 50 caracteres.
                if(peli.director.length < 50 && peli.titulo != "") this.director = peli.director;
                else console.error(`El nombre del Director debe ser mayor a 0 caracteres y no puede rebasar los 50 caracteres`);
                
                //Valida que el año de estreno sea un número entero de 4 dígitos.
                if(/^[0-9]{4}$/.test(peli.anioEstreno)) this.anioEstreno = peli.anioEstreno;
                else console1.error(`El año ${peli.anioEstreno}, no es un año valido. Verifique que sea un numero entero de 4 digitos`);
                
                //Valida que el país o paises sea introducidos en forma de arreglo.
                if(Array.isArray(peli.origen)){
                    let cumple = true;
                    for (const item of peli.origen) {
                        if(typeof item !== "string") cumple = false;
                    } 
                    if(cumple) this.origen = peli.origen;
                    else console.error(`Los paises de origen deben ser ingresados en forma de Array`);   
                } 
                
                //Valida que los géneros sean introducidos en forma de arreglo.
                //Valida que los géneros introducidos esten dentro de los géneros aceptados*.
                if(Array.isArray(peli.generos)) {
                    let cumple = true;
                    for (const item of peli.origen) {
                        if(typeof item !== "string") cumple = false;
                    } 
                    if(cumple){
                        peli.generos.forEach(genero => {
                            if(Pelicula.generosAceptados.includes(genero)) this.generos = peli.generos;
                            else console.error(`El genero ${genero}, no es un genero aceptado.`)
                        });
                    }
                }              
                    
                //Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
                if(typeof peli.calificacion === "number" && peli.calificacion >= 0 && peli.calificacion <= 10) this.calificacion = peli.calificacion;
                else console.error(`La calificacion ingresada debe ser un numero entre el 0 y el 10`)
            } 
                
            //Crea un método estático que devuelva los géneros aceptados*.
            static get generosAceptados() {
                return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", 
                "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", 
                "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
            }    

            static getGeneros(){
                console.log(`Los generos aceptados son ${Pelicula.generosAceptados.join(", ")}`);
            }

            //Crea un método que devuelva toda la ficha técnica de la película.
            getFicha() {
                console.log(`
                Ficha Tecnica de la Pelicula:

                id: ${this.id}, 
                titulo: ${this.titulo}, 
                director: ${this.director},   
                año de estreno: ${this.anioEstreno}, 
                origen: [${this.origen}], 
                generos: [${this.generos}], 
                clasificacion: ${this.clasificacion}`);
            }
        }
                
        //Pelicula.getGeneros();

        
        //Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        const arrObj = [            
        obj1 = {
            id: "tt2323497", 
            titulo: 'un titulo piola', 
            director: 'Jon Mircha', 
            anioEstreno: 1342, 
            origen: ['China', 'Japan'], 
            generos: ['Action', 'Mystery'],
            calificacion: 4.2
        },
        obj2 = {
            id: "tt5435397", 
            titulo: 'el segundo titulo piola', 
            director: 'otro director', 
            anioEstreno: 2021, 
            origen: ['Peru', 'Rusia'], 
            generos: ['Short', 'War'],
            calificacion: 8
        },
        obj3 = {
            id: "tt8769232", 
            titulo: 'the last titulo piola', 
            director: 'last director', 
            anioEstreno: 1342, 
            origen: ['Dorne', 'Westeros'], 
            generos: ['Fantasy', 'History'],
            calificacion: 2
        }
        ];

        arrObj.forEach(obj => new Pelicula(obj).getFicha());
    }
    ex27();
}
ejerciciosMirCha();