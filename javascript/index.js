let rings = document.querySelector(".menu2");
let earrings = document.querySelector(".menu3");
let bangles = document.querySelector(".menu4");
let solitaires = document.querySelector(".menu5");
let mangalsutras = document.querySelector(".menu6");
let otherjewerellery = document.querySelector(".menu9");
// console.log(hover.innerText);
let ringsdiv = document.querySelector(".main-hover");
let earringsdiv = document.querySelector(".main-hover2");
let banglesdiv = document.querySelector(".main-hover3");

// For Rings

rings.addEventListener("mouseover", () => {
  ringsdiv.style = "display:block;visibility:visible";
});

rings.addEventListener("mouseout", () => {
  ringsdiv.style = "display:none;visibility:hidden";
});

ringsdiv.addEventListener("mouseover", () => {
  ringsdiv.style = "display:block;visibility:visible";
});

ringsdiv.addEventListener("mouseout", () => {
  ringsdiv.style = "display:none;visibility:hidden";
});

// for earrings

earrings.addEventListener("mouseover", () => {
  earringsdiv.style = "display:block;visibility:visible";
});

earrings.addEventListener("mouseleave", () => {
  // console.log(div.innerHTML);
  earringsdiv.style = "display:none;visibility:hidden";
});

earringsdiv.addEventListener("mouseover", () => {
  earringsdiv.style = "display:block;visibility:visible";
});

earringsdiv.addEventListener("mouseout", () => {
  earringsdiv.style = "display:none;visibility:hidden";
});

//for bangles

bangles.addEventListener("mouseover", () => {
  banglesdiv.style = "display:block;visibility:visible";
});

bangles.addEventListener("mouseleave", () => {
  // console.log(div.innerHTML);
  banglesdiv.style = "display:none;visibility:hidden";
});

banglesdiv.addEventListener("mouseover", () => {
  banglesdiv.style = "display:block;visibility:visible";
});

banglesdiv.addEventListener("mouseout", () => {
  banglesdiv.style = "display:none;visibility:hidden";
});

//for solitaires
solitaires.addEventListener("mouseover", () => {
  ringsdiv.style = "display:block;visibility:visible";
});

solitaires.addEventListener("mouseout", () => {
  ringsdiv.style = "display:none;visibility:hidden";
});

ringsdiv.addEventListener("mouseover", () => {
  ringsdiv.style = "display:block;visibility:visible";
});

ringsdiv.addEventListener("mouseout", () => {
  ringsdiv.style = "display:none;visibility:hidden";
});

//for mangalsutras

mangalsutras.addEventListener("mouseover", () => {
  banglesdiv.style = "display:block;visibility:visible";
});

mangalsutras.addEventListener("mouseleave", () => {
  // console.log(div.innerHTML);
  banglesdiv.style = "display:none;visibility:hidden";
});

banglesdiv.addEventListener("mouseover", () => {
  banglesdiv.style = "display:block;visibility:visible";
});

banglesdiv.addEventListener("mouseout", () => {
  banglesdiv.style = "display:none;visibility:hidden";
});

//for other jewellerys

otherjewerellery.addEventListener("mouseover", () => {
  earringsdiv.style = "display:block;visibility:visible";
});

otherjewerellery.addEventListener("mouseleave", () => {
  // console.log(div.innerHTML);
  earringsdiv.style = "display:none;visibility:hidden";
});

earringsdiv.addEventListener("mouseover", () => {
  earringsdiv.style = "display:block;visibility:visible";
});

earringsdiv.addEventListener("mouseout", () => {
  earringsdiv.style = "display:none;visibility:hidden";
});
