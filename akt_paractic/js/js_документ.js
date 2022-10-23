const menu = document.querySelector(".menu-btn__burger");
const head = document.querySelector(".header");
const logotip = document.querySelector(".header__logo");
const burger = document.querySelector(".menu-btn");
const menuHeader = document.querySelector(".menu");
const menuLi = menuHeader.querySelectorAll("li");

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  if (menu.classList.contains("active")) {
    logotip.classList.add("hidden");
  } else {
    logotip.classList.remove("hidden");
  }
});
document.onclick = function (e) {
  if (
    e.target.parentNode.className == "menu-btn active" ||
    e.target.className == "menu-btn active"
  ) {
  } else {
    menu.classList.remove("active");
    burger.classList.remove("active");
    if (menu.classList.contains("active")) {
      logotip.classList.add("hidden");
    } else {
      logotip.classList.remove("hidden");
    }
  }
};
const fixedHeaderPoint = document.querySelector(".pclesson");
window.addEventListener("scroll", function () {
  let scrollDistance = window.scrollY;
  if (window.innerWidth > 992) {
    if (fixedHeaderPoint.offsetTop <= scrollDistance) {
      head.classList.add("header_fixed");
    } else {
      head.classList.remove("header_fixed");
    }
  }
});
console.log(window.innerWidth);

const animItems = document.querySelectorAll("._anim-items");
console.log(animItems);
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      // Ищем высоту данного объекта
      const animItemHeight = animItem.offsetHeight;
      // Ищем насколько объект ниже верха страницы
      const animItemOffset = getCoords(animItem).top;
      // Коэфицент регулирующий анимацией
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else if (animItem.classList.contains("none-stop")) {
        animItem.classList.remove("_active");
      }
    }
  }
  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: box.top + scrollTop,

      left: box.left + scrollLeft,
    };
  }
}
