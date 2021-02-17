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
    img: "./images/sb-high.jpg",
    desc: `Keeping the betterment of the students when it comes to academic, physical and mental progress paramount is S B High School in Aurangabad-maharashtra. `,
  },
  {
    id: 1,
    name: "Blue Ridge Public School",
    city: "Pune",
    rating: 4.2,
    img: "./images/blue-ridge.jpeg",
    desc: `BREI’s Blue Ridge Public School has been a rocking success from the very first year of its inception in the year 2010. Owing to the well-balanced approach, practised by the school, towards the holistic development of the students, schooling has been an enjoyable experience for the children and it is well-reflected in the overwhelming response that we got for the second academic year.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayschool = school.map(function (school) {
    // console.log(item);

    return `  <div class="card">
    <div class="card-image">
      <img src=${school.img} alt=${school.name} />
    </div>
    <div class="card-header">
      <h1 class="card-title">${school.name}</h1>
      <h6><i class="fa fa-map-marker" aria-hidden="true"></i> ${school.city}</h6>
      <p>
       ${school.desc}
      </p>
    </div>
  </div>
`;
  });
  displayschool = displayschool.join("");
  console.log(displayschool);

  sectionCenter.innerHTML = displayschool;
});
