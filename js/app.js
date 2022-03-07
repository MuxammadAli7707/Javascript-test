// Boolean vs IF else 

// Example 11

// let a = 4;
// let b = 3;
// if(a % 2 != 0 && b % 2 != 0){
//   console.log("True");
// } else if(a % 2 != 0 && b % 2 == 0) {
//   console.log("True");
// } else if(a % 2 == 0 && b % 2 != 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Example 12

// let a = 4;
// if(a > 10 && a < 99) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Example 13

// let a = 444;
// if(a > 100 && a < 999) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Example 14
// let n = 22;

// let a = n % 10;
// let b = (n - a) / 10;

// if(a == b) {
//   console.log("True");
// }
// else {
//   console.log("False");
// }

// Example 15
// let n = 32;

// let a = n % 10;
// let b = (n - a) / 10;

// if((a + b) % 2 == 0) {
//   console.log("True");
// }
// else {
//   console.log("False");
// }

// Example 16
// let n = 32;

// let a = n % 10;
// let b = (n - a) / 10;

// if((a + b) % 2 != 0) {
//   console.log("True");
// }
// else {
//   console.log("False");
// }

// Example 17
// let n = 101;

// let a = n % 10;
// let b = ((n - a) / 10) % 10;
// let c = (n - a) / 100;

// if((a + b + c) % 2 != 0) {
//   console.log("True");
// }
// else {
//   console.log("False");
// }

// Example 18
// let n = 3000;
// if(n >= 10000 && n < 99999){
//   console.log("True");
// } else {
//   console.log("False");
// }

// Example 21

// let n = -5;
// if(n > 0) {
//   console.log(n + 1);
// } else {
//   console.log(n);
// }

// Example 22

// let n = 9;
// if(n > 0) {
//   console.log(n + 1);
// } else if(n < 0) {
//   console.log(n - 2);
// }

// Example 23

// let n = 0;
// if(n > 0) {
//   console.log(n + 1);
// } else if(n < 0) {
//   console.log(n - 2);
// } else if(n == 0) {
//   console.log(n = 10);
// }

// Example 24
// let a = -1, b = -3, c = -8;
// if(a > 0 && b > 0 && c > 0){
//   console.log(3);
// } else if(a > 0 && b < 0 && c > 0) {
//   console.log(2);
// } else if(a < 0 && b > 0 && c > 0) {
//   console.log(2);
// } else if(a > 0 && b > 0 && c < 0) {
//   console.log(2);
// } else if(a > 0 && b < 0 && c < 0) {
//   console.log(1);
// } else if(a > 0 && b < 0 && c < 0) {
//   console.log(1);
// } else if(a < 0 && b < 0 && c > 0) {
//   console.log(1);
// } else {
//   console.log(0);
// }


// Example 26
// let a = -1, b = 7;
// if(a > b) {
//   console.log(a,b);
// } else {
//   console.log(b,a);
// }

function Phone (make, model, color) {
  // funksiyaga berilgan hamma parameter lar ushbu Phone ga property qilib beriladi.
  this.make = make; // property
  this.model = model; // property
  this.color = color; // property

  // agar this.bironnima = qiymati data bo'lsa property, agar qiymati funksiya bo'lsa method deyiladi.

  // method esa, malasan, knopka bosilganida telefon modelini ko'rsatib berish
  this.displayModel = function () {
    console.log(`The model of the phone is ${this.model}`)
  }

  // telefonning rangini ko'rsatib beradi
  this.displayColor = function (){
    console.log(`The color of the phone is ${this.color}`);
  }

}

// Phone contructor funksiyasi orqali yengi Object lar yasaymiz
const iPhone12 = new Phone('Apple', 'iPhone12', 'Black');
const note20 = new Phone('Samsung', 'Note 20', 'Silver');
const onePlus7 = new Phone('One Plus', 'One Plus 7', 'Blue');

iPhone12.displayModel();
note20.displayModel();
onePlus7.displayModel();

iPhone12.displayColor();
note20.displayColor();
onePlus7.displayColor();