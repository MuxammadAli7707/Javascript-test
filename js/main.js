// // Masala 1 
// let n = 15;
// for(let i = 1; i <= n; i++){
//   if(n % i == 0){
//     console.log(i);
//   }
// }

// Masala 2

// let n = 7;
// let s = 0;
// for(let i = 1; i <= n; i++){
//   if(n % i == 0){
//     s += i;
//   }
// }
// console.log(s);

// Masala 3 sonni mukammal yoki mukammal emasligini chiqarish 

// let n = 28;
// let count = 0;
// for(let i = 1; i < n; i++){
//   if(n % i == 0){
//     count += i;
//   }
// }
// if(n == count) {
//   console.log(`${n} Mukammal son`);
// } else {
//   console.log(`${n} Mukammal son emas`);
// }

// Masala 5
// let n = 20;
// for(let i = 1; i <= n; i++){
//   if(i % 3 == 0 && i % 5 != 0){
//     console.log(i);
//   }
// }


// Masala 6

// let n = 10;
// let count = 0;
// for(let i = 2; i < n; i++){
//   if(n % i == 0){
//     count += i;
//   } 
// }
// if(count == 0) {
//   console.log(`${n} Tubson`);
// } else {
//   console.log(`${n} Tub son emas`);
// }


// Masala 7 Tub sonlar 

// let n = 10;
// let count = 0;
// for(let i = 2; i < n; i++){
//   let s = 0;
//   for(let j = 2; j < i; j++){
//     if(i % j == 0){
//       s++;
//     }
//   } 
//   if(s == 0){
//     console.log(i);
//   }
// }

// Masala 8 Pifagor sonlar 

// let n = 30;
// for(let a = 1; a <= n; a++){
//   for(let b = a; b <= n; b++){
//     c = Math.sqrt(a * a + b * b);
//     if(c % 1 === 0){
//       console.log(a, b, c);
//     }
//   }
// }

// min va max sonlarni chiqarish

function minMax(a, b, c, d){ 
  let x = 0;
  let y = 0;
  if(a >= b && a >= c && a >= d){
    x = a;
  } else if(b >= a && b >= c && b >= d){
    x = b;
  } else if(c >= a && c >= b && c >= d){
    x = c;
  } else {
    x = d;
  }
  if(a <= b && a <= c && a <= d){
    y = a;
  } else if(b <= a && b <= c && b <= d){
    y = b;
  } else if(c <= a && c <= b && c <= d){
    y = c;
  } else {
    y = d;
  }

  console.log(x, y);
}
minMax(10, 6, 20, 55)

