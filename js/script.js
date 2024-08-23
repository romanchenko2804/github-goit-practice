// "use strict"; - не використовуємо, бо вписали атрибут type="module", що вже передбачає строгий режим!
// const a = 1;
// const b = 2;
// const c = a+b;
// console.log(typeof c)

// let counter = 0;
// while (counter <= 10) {
//     console.log ('number: ', counter);
//     counter += 1;
// }


// const max = 5;
// for (let i = 0; i <= max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
  
//     if (i === 1) {
//       console.log("Знайшли число 1, перериваємо виконання циклу!");
//       break;
//     }
//   }
  
//   console.log('Лог після циклу');

//   console.log ('Hello S!')

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// Change code below this line
// function add(a, b, c) {
//   const res = a+b+c;
//   console.log(`Addition result equals ${res}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//       if (message.length <= maxLength) {
//           result = message;
//       } else {
//         result = `${message.slice(0, maxLength)}...`;
//       }
//     /// Change code above this line
//     return result;
//   }

// //   formatMessage("This is my message.", 10)

//   console.log(formatMessage("This is my message.", 19))

// function checkForSpam(message) {
//     let result;
//     // Change code below this line

//       if (message.toLowerCase().includes("spam") ||message.toLowerCase().includes("sale") ) {
//         result = true;
//       } else  {
//         result = false;
//       }
//     // Change code above this line
//     return result;
//   }

//   console.log(checkForSpam('Get best Sale offers now!'))

// function getGrade (s1, s2, s3) {
//   // Code here
//   let score = Math.round((s1+s2+s3)/3);
//   ceonsole.log(score);
//   let letter = '';

//   if (90 <= score && score <= 100){
//     letter = 'A';
//   } else if (80 <= score && score < 90) {
//     letter = 'B';
//   } else if (70 <= score && score < 80) {
//     letter = 'C';
//   } else if (60 <= score && score < 70) {
//     letter = 'D';
//   } else if (0 <= score && score < 60) {
//     letter = 'F';
//   }
//   console.log(letter);
//   return letter;
// }

// getGrade (40, 60, 90)
// // console.log(gtGrade (40, 60, 90));

// function lovefunc(flower1, flower2){
//   // moment of truth
//   let love = false;
//   if ((flower1 + flower2) % 2 !== 0) {
//     love = true;
//   }
//   return love;
// }

// console.log(lovefunc(3, 2))

// // console.log(typeof(true))

// function removeChar(str){
//   //You got this!
//    let arr = str.split('');
//   //  console.log(arr);
//    let lastIndex = arr.length-2;
//   //  console.log(lastIndex);
//    let newArr = arr.splice(1, lastIndex).join('');
//    console.log(newArr);

//  };
 
//  removeChar('Mykola');


// function digitize(n) {
//   //code here
//   const array = n.toString().split("").reverse();
//   const numbers = array.map((num) => Number(num));
//   console.log(numbers);
//   return numbers;
// }

// digitize(123456789);

// *********?????????

// function toCamelCase(str){
//     const arr=str.split(/[-_]/)
//     .map((word, index) => {
//         if (index === 0) {
//             return word.charAt(0).toLowerCase() + word.slice(1);
//         }
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join('')
//     console.log(arr)
// }

// console.log(toCamelCase('the-stealth-warrior'));

// // Examples
// // "the-stealth-warrior" gets converted to "theStealthWarrior"

// // "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// // "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// *****************

// function boolToWord( bool ){
//     if (bool) {
//         return "Yes"
//     } else if (!bool) {
//         return "No"
//     }
//   }

//   console.log(boolToWord(false));

// *****************

// function powersOfTwo(n){
//     const array = [];

//     for (let i = 0; i <= n; i += 1) {
        
//         array.push(Math.pow(2, i));
//     }
        
//     return array;
//   }

//   console.log(powersOfTwo(2));

// *****************


// function howMuchILoveYou(nbPetals) {
//     let phrase = '';
//     const array = [
//         "empty",
//         "I love you",
//         "a little",
//         "a lot",
//         "passionately",
//         "madly",
//         "not at all"];

//             if (nbPetals >= 7) {
//                 return phrase = array[nbPetals%6];
//             }
            
//             return  phrase = array[nbPetals];
// }

// console.log(howMuchILoveYou(103));

// *****************

// function grow(x){
//     let multy = 1;
//     for (const numb of x) {
//         multy *= numb;
//     }
//     return multy;
// }

// console.log(grow([1,2,3,4]))

//***********************
// моє рішення:
// function sumTwoSmallestNumbers(numbers) {
//     let array = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         const num = numbers[i];
//         const min = Math.min(...numbers);
//         const index = numbers.indexOf(min);
        
//         numbers.splice(index, 1)
        
//         array.push(min);

//     }


//     return array[0]+array[1];
//   }


//COPILOT HELP #1:

// function sumTwoSmallestNumbers(numbers) {
//     const min1 = Math.min(...numbers);
//     const index = numbers.indexOf(min1);
//     numbers.splice(index, 1);
//     const min2 = Math.min(...numbers);


//     return min1+min2;
//   }

  //COPILOT HELP #2:

//   function sumTwoSmallestNumbers(numbers) {
//     // Сортуємо масив чисел у зростаючому порядку
//     numbers.sort((a, b) => a - b);
    
//     // Повертаємо суму двох найменших чисел
//     return numbers[0]+numbers[1];
//   }

//   console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));


// ********************


// function between(a, b) {
//   //мої костилі ==>

//   // let array = [];
//   // let c = array.length;

//   // c=b-a+1;

//   // if (a<0) {
//   //   c=-a+b+1;
//   // }

//   // for (let i = 0; i < c; i += 1) {
//   //   const elem = array[i]; 

//   //   if (array[c] !== b) {
//   //     array.push(a+i)
//   //   }
//   // } 

//   // чатік ==>

//   let array = [];
//     for (let i = a; i <= b; i++) {
//         array.push(i);
//     }

//   return array;
// }

// console.log(between(-2, 2));

// **********************

// function solution(number){
//   let multiply = 0;
//   let arr = [];

//   if (number < 0) {
//     return 0;
//   }

//   for (let i = 0; i < number; i+=1) {
//     arr.push(i)
//   }
  
//   for (let i = 1; i < arr.length; i+=1) {
//     const elem = arr[i];

//     if (elem%3===0 || elem%5===0) {

//       multiply+=elem
//     }

//   }
  
//   return `Результат виконання функції: ${multiply}`;
// }

// console.log(solution(10));

// *************************************

// const student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12 };

//   console.log(Object.keys(student));
//   console.log(Object.values(student));

// ************************

//Print (console.log()) value of the property name in the given object:
// let student = {
//   name:"Max",
//   age: 27
// };
// console.log (student.name);


//Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with :

//the new property - discount and the corresponding value (7% or 10%) and the new price.

// let product = {
//   name: "headphones",
//   price: 100,
//   discount: 0
// };

// const discounts = product.price > 100 ? product.discount = 10 : product.discount = 7

// product.price =product.price - (product.price*product.discount/100);
// // if (product.price > 100) {
// //   product.discount = 10;
// // } else {
// //   product.discount = 7;
// // }

// console.log(product);


//Use given object and loop through its properties and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). In opposite case, do what you did in the previous exercise: check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.
//Note: To test, un-comment out line discount: "7%".
let product = {
  name: "headphones",
  price: 100,
  discount: "7%",
};

// let message = `Already discounted by ${product.discount}`

const discounts = product.price > 100 ? product.discount = 10 : product.discount = 7;

product.price = product.price - (product.price*product.discount/100);

for (const key in product) {
    const elem = product[key];

    if (key === 'discount') {
      // return message;
      console.log(product.discount)
    }
    
}

console.log(product);
// console.log(Math.round(product.price));
// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.


// *************************


// // creating a simple CAR obj

// const car = {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2021
// };
// // Displaying the car object
// // console.log(car);
// const textOfModel = 'model';

// const carModel = car.model;
// const carModel2 = car[textOfModel];
// const carModel3 = car['model'];
// console.log('Значення властивості через точку -',carModel);
// console.log('Значення властивості через квадратні дужки -',carModel2);
// console.log('Значення властивості через квадратні дужки, де властивість передана як РЯДОК -',carModel3);

// car.year = 2022;
// // console.log(car);

// for (const key in car) {
//     // const element = ;
//     // console.log(key, ':', car[key]);
// }

// // console.log(Object.values(car));

// // Creating an Array of Objects:
// let cars = [
//   { make: "Toyota", model: "Corolla", year: 2021 },
//   { make: "Honda", model: "Civic", year: 2020 },
//   { make: "Ford", model: "Focus", year: 2022 }
// ];

// // Creating a person object with a nested address object
// let person = {
//   name: "Alice Smith",
//   age: 30,
//   address: {
//       street: "123 Main St",
//       city: "Springfield",
//       zipCode: "12345"
//   }
// };