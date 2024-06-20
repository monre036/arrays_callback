// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

// Crea una función que reciba un array de números y
// muestre por consola cada número multiplicado por
// su índice en el array
const arrayNumbersMultipliedByTwo2 = (array) => {
  array.forEach((number, index) => {
    console.log(number * index);
  });
};

arrayNumbersMultipliedByTwo2([2, 3, 4, 6, 7]);
console.log("");

// Crea una función que reciba un array de números y
// devuelva un array con cada número dividido por su
// índice en el array más 2, es decir index + 2
const arrayNumbersDivided = (numbers) => {
  const numbersDivided = numbers.map((number, index) => {
    return number / (index + 2);
  });
  return numbersDivided;
};

const resultNumbersDivided = arrayNumbersDivided([3, 5, 8]);
console.log(resultNumbersDivided);
console.log("");

// Crea una función que reciba un array de palabras
// y devuelva un array con las mismas palabras en
// mayúsculas.
const arrayWordsToUpperCase = (array) => {
  const result = array.map((word) => {
    return word.toUpperCase();
  });
  return result;
};
console.log(arrayWordsToUpperCase(["hola", "paco", "lazo"]));
console.log("");

// Crea una función que reciba un array de palabras
// y una letra. La función devolverá un array con
// las palabras que comiencen por esa letra, si no
// hay mostrará un mensaje por consola diciendo que
// ninguna palabra coincide.
const arrayWordsStartWithLetter = (array, letter) => {
  const result = array.filter((word) => {
    return word.startsWith(letter);
  });
  if (result.length === 0) {
    return "Ninguna palabra coincide.";
  }
  return result;
};
console.log(
  arrayWordsStartWithLetter(["hola", "paco", "pizza", "manzanana"], "p")
);
console.log("");

// Añade a la función anterior lo necesario para que
// funcione independientemente de mayusculas o
// minúsculas.
const arrayWordsStartWithLetter2 = (array, letter) => {
  const result = array.filter((word) => {
    return word.toLowerCase().startsWith(letter.toLowerCase());
  });
  if (result.length === 0) {
    return "Ninguna palabra coincide.";
  } else {
    return result;
  }
};
console.log(
  arrayWordsStartWithLetter2(["hola", "paco", "PIZZA", "manzanana"], "P")
);
console.log("");

// Crea una función que reciba un array de 10 números
// e imprima por consola la suma de todos los valores
// del array.
const arrayTenNumbers = (array) => {
  const result = array.reduce((acc, number) => {
    return acc + number;
  });
  console.log(result);
};
arrayTenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("");

// Crea una función que reciba un array de 10 números,
// imprime por consola cada número, su cuadrado y su
// cubo en este formato:
// "Número: 2 - Cuadrado: 4 - Cubo: 8".
const arrayTenNumbersSquaredCubed = (array) => {
  array.forEach((number) => {
    console.log(
      `Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
        number,
        3
      )}`
    );
  });
};
arrayTenNumbersSquaredCubed([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("");

// Crea una función que reciba una palabra e imprima
// por consola esa palabra pero con las vocales en
// mayúscula.
const arrayVowelsToUpperCase = (word) => {
  let wordSplited = word.split("");
  const vowels = "aeiou";
  const result = wordSplited.reduce((acc, letter) => {
    if (vowels.includes(letter)) {
      return acc + letter.toUpperCase();
    } else {
      return acc + letter;
    }
  }, "");
  console.log(result);
};
arrayVowelsToUpperCase("aireo");
console.log("");

// Crea una función que reciba un array de 10 números.
// Dentro de esa función crea dos arrays llamados
// even (pares) y odd (impares), después multiplica
// cada uno de los números del array recibido por un
// número aleatorio entre 1 y 10, si el resultado es
// par, guárdalo en el array de pares, si es impar,
// en el array de impares, al final, imprime los 3
// arrays por consola.
const arrayEvensOdds = (array) => {
  const arrayEvens = [];
  const arrayOdds = [];

  array.forEach((number) => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const result = randomNumber + number;

    if (result % 2 === 0) {
      arrayEvens.push(result);
    } else {
      arrayOdds.push(result);
    }
  });

  console.log(array);
  console.log(arrayEvens);
  console.log(arrayOdds);
};
arrayEvensOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 19]);
console.log("");

// SORT -> BUCLE PARA ORDENAR ARRAYS
const numbers = [2, 3, 9, 6, 5, 1, 8];
const users = ["Ana", "Ángel", "Carlos", "Zaura", "ñoño"];

users.sort((a, b) => a.localeCompare(b));
numbers.sort((a, b) => a - b);
console.log(users);
console.log(numbers);

// Crea una función que reciba un array con 5 palabras, debes
// imprimir por consola un array que contenga la inicial y la
// última letra de cada palabra en mayúsculas, es decir, si
// nuestra función recibiera un array con
// ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por
// consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'].
// Si te quedas atascado puedes investigar la función flatMap()
// y flat().
const arrayWordsFirstLastLetters = (array) => {
  const arrayFirstLastLetters = [];
  const result = array.filter((word) => {
    return word.includes(letter);
  });
};

// Crea una función que reciba un array de números y un número y te devuelva un
// array con los números que sean divisores de ese número.

// Crea una función que reciba este array y te devuelva sólo los usuarios cuya
// edad sea menor de 30
//  const array = [
//  { name: 'John', age: 25 },
//  { name: 'Jane', age: 30 },
//  { name: 'Bob', age: 20 }
//  ];

// Crea una función que reciba un array relleno con números y te diga si todos
// son pares o no.

// Crea una función que reciba un array de 5 palabras y las ordene en base a su
// longitud, de menor a mayor.
const arrayWordsOrderByLength = (array) => {
  array.sort((a, b) => a.length - b.length);
  console.log(array);
};
arrayWordsOrderByLength(["lazo", "oso", "castillo", "ratón", "nube"]);

// Crea una función que reciba una palabra e imprima la misma palabra en orden
// inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas"
// deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la
// función reduceRight).

// Crea una función que reciba un array de 5 números de 2 dígitos. La función
// debe ser capaz de sumar los digitos de cada número, es decir si yo le envío
// [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array
// con [3, 7, 15, 1, 10].

// Utilizando el array que te dejo a continuación resuelve estos dos retos.

// Crea una función que reciba un criterio de ordenación y ordene el array en base
// a ese criterio. Puede ser el nombre, el apellido o la edad.

// Crea una función que reciba un id de usuario y borre ese usuario del array.

// const users = [
//     {
//     id: "user001",
//     name: "Juan",
//     surname: "Pérez",
//     age: 30
//     },
//     {
//     id: "user002",
//     name: "María",
//     surname: "González",
//     age: 25
//     },
//     {
//     id: "user003",
//     name: "Pedro",
//     surname: "Sánchez",
//     age: 35
//     },
//     {
//     id: "user004",
//     name: "Ana",
//     surname: "Martínez",
//     age: 28
//     },
//     {
//     id: "user005",
//     name: "Luis",
//     surname: "López",
//     age: 40
//     }
//     ];
