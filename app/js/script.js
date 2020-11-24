// MOVEMOENT ANIMATION TO HAPPEN
const card = document.querySelector(".card");
const container = document.querySelector(".cards");

// ITEMS
const title = document.querySelector(".card_title");
const product = document.querySelector(".card_img");
const description = document.querySelector(".card_snippet");

// MOVING ANIMATIION EVENT
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// ANIMATE IN
container.addEventListener("mouseenter", (e) => {
  card.style.transition = `none`;
  // POPOUT
  title.style.transform = "translateZ(150px)";
  product.style.transform = "translateZ(200px) rotateZ(-360deg)";
  description.style.transform = "translateZ(125px)";
});

// ANIMATE OUT
container.addEventListener("mouseleave", (e) => {
  card.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // POPBACK
  title.style.transform = "translateZ(0px)";
  product.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
});
