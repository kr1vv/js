// napisz fukcje, która przyjmie 2 argumenty a nastepnie wypisze w consoli typ przekazanych danych

const userName = "John Wick";
const charName = "John Wick";
const isImmortal = true;

const checkType = (val1, val2) => {
  console.log(
    `pierwsza wartość jest typu danych: ${typeof val1}, a druga ${typeof val2}`
  );
};

checkType(userName, isImmortal);
checkType(isImmortal, userName);
checkType(1, 2);
checkType([1, 2.3], { name: "John Wick" });

/// napisz funkcje, która wylosuje liczbę z zakresu przekazanego przez uzytkownika, a następnie zwróci jej wynik

// const drawNumber = (min, max) => {};
// drawNumber(1, 10);

// // Math.floor(3.14);
// Math.random - losuje randomową liczbę

// console.log(Math.floor(Math.random() * 100 + 1));

// const drawNumber = (min, max) => {
//   const drawNumber = Math.floor(Math.random() * max + min);
// };
// console.log(drawNumber(1, 10));

// const age = 18;

// const drawNumber = (min, max) => {
//   const result = Math.floor(Math.random() * max + min);
//   arr.push(result);
// };
// const result = drawNumber(1, 10);
// console.log(arr);

// bedziemy losować liczbę od X do Y, od 1 do 49

// const arr = [];

// let counter = 0;

// const drawNumber = (min, max, amount = 5) => {
//   for (let i = 0; i < amount; i++) {
//     const result = Math.floor(Math.random() * max + min);
//     arr.push(result);
//     counter = counter + result;
//   }
//   console.log(`wartość zmiennej counter wynosi ${counter}`, arr);
// };
// drawNumber(1, 1000, 3);

// zmiene typu let i const tworzą swój blok

/// let i const bloki kodu tworza blki kodu w ktorym sa widoczne

// {
//   let charName = "John Wick";
// }
// console.log(charName);

// napisz fukcje, ktore wylosuje liczby z zarkresuprzekazenego przez uzytkownia, asstepnie umieści je w arr

// PĘTLA FOR = wykonuj kod tak wiele razy, aź warunek przestanie być true

// iteracje = przejscia po elemtnach bądź przejscia w petli for/while/for of... roznych typach petli

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const colors = ["red", "blue", "green", "pink", "orange", "black"];

const square = document.querySelector(".square:nth-of-type(3)");

const square3 = document.querySelector(".square:nth-of-type(3)");
const square4 = document.querySelector(".square:nth-of-type(4)");

[square4, square3].forEach((sq) => {
  sq.addEventListener("click", function () {
    console.log("działa?");
  });
});

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => {
    // const drawColor = Math.floor(Math.random() * colors.length);
    // square.style.backgroundColor = colors[drawColor];
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const bgValue = `rgb(${red}, ${green}, ${blue})`;
    square.style.backgroundColor = bgValue;
  });
});

for (let i = 0; i < squares.length; i++) {
  console.log(squares[i]);
}

// const squares = document.querySelectorAll(".square");
// squares.forEach((square) => {
//   square.addEventListener("click", () => {
//     console.log("Kliknięty");
//   });
// });

//
//
//
//
//
//

// SLIDER

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelector(".slides");
//   const prev = document.querySelector(".prev");
//   const next = document.querySelector(".next");
//   const slideWidth = slides.clientWidth;

//   let slideIndex = 0;

//   prev.addEventListener("click", () => {
//     if (slideIndex === 0) {
//       slideIndex = slides.childElementCount - 1;
//       slides.style.transition = "none";
//       slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//       setTimeout(() => {
//         slides.style.transition = "transform 0.5s ease-in-out";
//         slideIndex--;
//         slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//       }, 0);
//     } else {
//       slideIndex--;
//       slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//     }
//   });

//   next.addEventListener("click", () => {
//     if (slideIndex === slides.childElementCount - 1) {
//       slideIndex = 0;
//       slides.style.transition = "none";
//       slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//       setTimeout(() => {
//         slides.style.transition = "transform 0.5s ease-in-out";
//         slideIndex++;
//         slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//       }, 0);
//     } else {
//       slideIndex++;
//       slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//     }
//   });
// });
