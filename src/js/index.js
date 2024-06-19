// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// Crea una función que reciba un array de números y
// muestre por consola cada número multiplicado por
// su índice en el array
const arrayNumbersMultipliedByTwo = array => {
    array.forEach(number => {
        console.log(number * 2);
    });
}
arrayNumbersMultipliedByTwo([1, 2, 3, 4, 5]);
console.log('');

// Crea una función que reciba un array de números y
// devuelva un array con cada número dividido por su
// índice en el array más 2, es decir index + 2
const arrayNumbersDivided = array => {
    const result = array.map(number => {
        return number / ((array.indexOf(number)) + 2);
    });
    return result;
}
console.log(arrayNumbersDivided([1, 2, 3, 4, 5]));
console.log('');

// Crea una función que reciba un array de palabras
// y devuelva un array con las mismas palabras en
// mayúsculas.
const arrayWordsToUpperCase = array => {
    const result = array.map(word => {
        return word.toUpperCase();
    })
    return result
}
console.log(arrayWordsToUpperCase(['hola', 'paco', 'lazo']));
console.log('');

// Crea una función que reciba un array de palabras 
// y una letra. La función devolverá un array con 
// las palabras que comiencen por esa letra, si no 
// hay mostrará un mensaje por consola diciendo que 
// ninguna palabra coincide.
const arrayWordsStartWithLetter = (array, letter) => {
    const result = array.filter(word => {
        return word.includes(letter);
    });
    if (result.length === 0) {
        return 'Ninguna palabra coincide.';

    } else {
        return result;
    }
}
console.log(arrayWordsStartWithLetter(['hola', 'paco', 'pizza', 'manzanana'], 'i'));
console.log('');

// Añade a la función anterior lo necesario para que 
// funcione independientemente de mayusculas o 
// minúsculas.
const arrayWordsStartWithLetter2 = (array, letter) => {
    const result = array.filter(word => {
        return word.toLowerCase().includes(letter.toLowerCase());
    });
    if (result.length === 0) {
        return 'Ninguna palabra coincide.';

    } else {
        return result;
    }
}
console.log(arrayWordsStartWithLetter2(['hola', 'paco', 'pIzzA', 'manzanana'], 'A'));
console.log('');

// Crea una función que reciba un array de 10 números 
// e imprima por consola la suma de todos los valores 
// del array.
const arrayTenNumbers = array => {
    const result = array.reduce((acc, number) => {
        return acc + number;
    });
    console.log(result);
}
arrayTenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log('');

// Crea una función que reciba un array de 10 números, 
// imprime por consola cada número, su cuadrado y su 
// cubo en este formato: 
// "Número: 2 - Cuadrado: 4 - Cubo: 8".
const arrayTenNumbersSquaredCubed = array => {
    array.forEach(number => {
        console.log(`Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`);
    });
}
arrayTenNumbersSquaredCubed([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log('');

// Crea una función que reciba una palabra e imprima
// por consola esa palabra pero con las vocales en
// mayúscula.
const arrayVowelsToUpperCase = word => {
    let wordSplited = word.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = wordSplited.reduce((acc, letter) => {
        if (vowels.includes(letter)) {
            return acc + letter.toUpperCase();

        } else {
            return acc + letter;
        }
    });
    console.log(result);
}
arrayVowelsToUpperCase('aireo');
console.log('');

// Crea una función que reciba un array de 10 números.
// Dentro de esa función crea dos arrays llamados
// even (pares) y odd (impares), después multiplica
// cada uno de los números del array recibido por un
// número aleatorio entre 1 y 10, si el resultado es
// par, guárdalo en el array de pares, si es impar,
// en el array de impares, al final, imprime los 3
// arrays por consola.
const arrayEvensOdds = array => {
    const arrayEvens = []
    const arrayOdds = []
    const result = array.map(number => {
        return number * (Math.floor(Math.random() * 10) + 1);
    });
    for (let num of result) {
        if (num % 2 === 0) {
            arrayEvens.push(num);
        } else {
            arrayOdds.push(num);
        }
    }
    console.log(array);
    console.log(arrayEvens);
    console.log(arrayOdds);
}
arrayEvensOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 19]);
console.log('');

// Crea una función que reciba un array con 5 palabras, debes
// imprimir por consola un array que contenga la inicial y la
// última letra de cada palabra en mayúsculas, es decir, si
// nuestra función recibiera un array con
// ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por
// consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'].
// Si te quedas atascado puedes investigar la función flatMap()
// y flat().
const arrayWordsFirstLastLetters = array => {
    const arrayFirstLastLetters = [];
    const result = array.filter(word => {
        return word.includes(letter);
    });
}