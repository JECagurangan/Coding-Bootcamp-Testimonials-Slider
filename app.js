const prevButton = document.querySelector(".slider__button__prev");
const nextButton = document.querySelector(".slider__button__next");

const johnImg = document.querySelector(".slider__john");
const tanyaImg = document.querySelector(".slider__tanya");

const johnTestimony = document.querySelector(".testimony__john");
const tanyaTestimony = document.querySelector(".testimony__tanya");

const john = document.querySelector(".user__john");
const tanya = document.querySelector(".user__tanya");

const johnTitle = document.querySelector(".user__job__john");
const tanyaTitle = document.querySelector(".user__job__tanya");

prevButton.addEventListener("click", function () {

  //image
  johnImg.style.width = "0px";
  tanyaImg.style.width = "100%";

  //testimony
  tanyaTestimony.style.opacity = "1";
  johnTestimony.style.opacity = "0";

  //user
  tanya.style.opacity = "1";
  tanyaTitle.style.opacity = "1";

  john.style.opacity = "0";
  johnTitle.style.opacity = "0";
});

nextButton.addEventListener("click", function () {

  //image
  tanyaImg.style.width = "0px";
  johnImg.style.width = "100%";

  //testimony
  tanyaTestimony.style.opacity = "0";
  johnTestimony.style.opacity = "1";

  //user
  tanya.style.opacity = "0";
  tanyaTitle.style.opacity = "0";

  john.style.opacity = "1";
  johnTitle.style.opacity = "1";
});
