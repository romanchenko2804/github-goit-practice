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

// *****************
