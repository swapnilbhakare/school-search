window.addEventListener("resize", function() {
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

hamburger.addEventListener("click", function() {
    mobileNav.classList.toggle("open");
    if (!isActive) {
        bars[0].style.background = "white";
        bars[2].style.background = "white";
        bars[0].style.transform = "rotate(45deg)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg)";
        isActive = true;

    } else {
        bars[0].style.background = "black";
        bars[2].style.background = "black";
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "rotate(0deg)";
        isActive = false;
    }
});
// autosuggest functionality

const suggestions = ["sb high school aurangabad", "Blue Ridge Public School"]
const searchWrapper = document.querySelector(".input-search");
const inputBox = searchWrapper.querySelector(".search-bar");
const suggBox = searchWrapper.querySelector(".autocom-box");
//if user press key and relese
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user entered data

    let emptyArray = [];
    if (userData) {

        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data) => {
            return data = "<li>" + data + "</li>";
        });


        searchWrapper.classList.add("active"); //show
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }

    } else {
        searchWrapper.classList.remove("active"); //hide
    }

}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item in textfield
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = "<li>" + userValue + "</li>";
    } else {
        listData = list.join("");
    }
    suggBox.innerHTML = listData;
}


// autosuggest ends





const schools = [{
        id: 1,
        name: "sb high school aurangabad",
        city: "aurangabad",
        rating: 4.2,
        img: "./images/sb-high.jpg",
        desc: `Keeping the betterment of the students when it comes to academic, physical and mental progress paramount is S B High School in Aurangabad-maharashtra. `,
    },
    {
        id: 2,
        name: "Blue Ridge Public School",
        city: "Pune",
        rating: 4.2,
        img: "./images/blue-ridge.jpeg",
        desc: `BREI’s Blue Ridge Public School has been a rocking success from the very first year of its inception in the year 2010. Owing to the well-balanced approach, practised by the school, towards the holistic development of the students, schooling has been an enjoyable experience for the children and it is well-reflected in the overwhelming response that we got for the second academic year.`,
    },
    {
        id: 3,
        name: "R.R.Vidyalaya,Jalgaon",
        city: "Jalgaon",
        rating: 4.5,
        img: "./images/R.R.jpg",
        desc: `It was the motive and mission of Respected Raosaheb to make the school unique and outstanding one. With this motto the path was made prosperous, pure and as bright as galaxy. `,
    },
    {
        id: 4,
        name: "Sacred Heart School",
        city: "Mumbai",
        rating: 4.2,
        img: "./images/Sacred-Heart-School.png",
        desc: `Sacred Heart School has dedicated itself to sharing and expanding the knowledge paradigm of its students. 

        `,
    },
];

const sectionCenter = document.querySelector(".section-center");


window.addEventListener("DOMContentLoaded", function() {
    let displayschools = schools.map(function(school) {
        // console.log(item);

        return `  <div class="card ">
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
    displayschools = displayschools.join("");
    // console.log(displayschools);

    sectionCenter.innerHTML = displayschools;
});