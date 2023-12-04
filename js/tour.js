// let mainText1 = document.querySelector("#s1>h1");

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log("scrollY", value);

//   if (value > 150) {
//     mainText1.style.animation = "textVanish 1s ease-out forwards";
//   } else {
//     mainText1.style.animation = "textSlide 1s ease-out";
//   }
// });

// let descriptionText2 = document.querySelector("#s1>p");

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log("scrollY", value);

//   if (value > 150) {
//     descriptionText2.style.animation = "textVanish 1s ease-out forwards";
//   } else {
//     descriptionText2.style.animation = "textSlide 1s ease-out";
//   }
// });

let mainText1 = document.querySelector("#s1>h1");
let descriptionText1 = document.querySelector("#s1>p");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("scrollY", value);

  if (value > 150) {
    mainText1.style.animation = "textVanish 1s ease-out forwards";
    descriptionText1.style.animation = "textVanish 1s ease-out forwards";
  }
  if (value < 150) {
    mainText1.style.animation = "textSlide 1s ease-out";
    descriptionText1.style.animation = "textSlide 1s ease-out";
  }
});

let mainText2 = document.querySelector("#s2>h1");
let descriptionText2 = document.querySelector("#s2>p");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 1400) {
    mainText2.style.animation = "textVanish 1s ease-out forwards";
    descriptionText2.style.animation = "textVanish 1s ease-out forwards";
  } else {
    mainText2.style.animation = "textSlide 1s ease-out";
    descriptionText2.style.animation = "textSlide 1s ease-out";
  }
});

let mainText3 = document.querySelector("#s3>h1");
let descriptionText3 = document.querySelector("#s3>p");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("scrollY", value);

  if (value > 2300) {
    mainText3.style.animation = "textVanish 1s ease-out forwards";
    descriptionText3.style.animation = "textVanish 1s ease-out forwards";
  } else {
    mainText3.style.animation = "textSlide 1s ease-out";
    descriptionText3.style.animation = "textSlide 1s ease-out";
  }
});

let mainText4 = document.querySelector("#s4>h1");
let descriptionText4 = document.querySelector("#s4>p");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("scrollY", value);

  if (value > 3500) {
    mainText4.style.animation = "textVanish 1s ease-out forwards";
    descriptionText4.style.animation = "textVanish 1s ease-out forwards";
  } else {
    mainText4.style.animation = "textSlide 1s ease-out";
    descriptionText4.style.animation = "textSlide 1s ease-out";
  }
});

//위에 사용
