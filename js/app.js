window.addEventListener("resize", function () {
  addRequireClass();
});

function addRequireClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}
window.onload = addRequireClass;

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-list");
const bars = document.querySelectorAll(".hamburger span");

let isActive = false;

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
  if (!isActive) {
    bars[0].style.transform = "rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg)";
    isActive = true;
  } else {
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0deg)";
    isActive = false;
  }
});

const school = [
  {
    id: 1,
    name: "sb high school aurangabad",
    city: "aurangabad",
    rating: 4.2,
    img: "../images/sb-high.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayschool = school.map(function (school) {
    // console.log(item);

    return `<div class="school-item">
          <img src=${school.img} alt=${school.name} class="photo" />
          <div class="item-info">
            <header>
              <h4>${school.name}</h4>
              <h4>${school.city}</h4>
              <h4 class="rating">${school.rating}</h4>
            </header>
            <p class="item-text">
              ${school.desc}
            </p>
          </div>
        </div>`;
  });
  displayschool = displayschool.join("");
  console.log(displayschool);

  sectionCenter.innerHTML = displayschool;
});
