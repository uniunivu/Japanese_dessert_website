
//----------------- 導覽列點擊出現小選單------------------

let navList = document.getElementsByClassName("nav_list");
// console.log(navList);
// console.log(navList[0]);
// console.log(navList[1]);
let nav_listitem_0 = document.getElementsByClassName("nav_list_item_1")[0];
let nav_listitem_1 = document.getElementsByClassName("nav_list_item_2")[0];
let nav_listitem_2 = document.getElementsByClassName("nav_list_item_3")[0];



navList[0].addEventListener("mouseover", show);
navList[0].addEventListener("mouseleave", showoff);

navList[1].addEventListener("mouseover", show);
navList[1].addEventListener("mouseleave", showoff);

navList[2].addEventListener("mouseover", show);
navList[2].addEventListener("mouseleave", showoff);


function show(e) {
    let i = e.target.innerText;

    if (i == "甜點品項") {
        nav_listitem_0.style.display = "block";
    } else if (i == "茶　　飲") {
        nav_listitem_1.style.display = "block";

    } else if (i == "禮盒系列") {
        nav_listitem_2.style.display = "block";

    }

};

function showoff() {
    nav_listitem_0.style.display = "none";
    nav_listitem_1.style.display = "none";
    nav_listitem_2.style.display = "none";

};


//----------------- hero banner 輪播圖--------------------------

let heroimg = document.getElementsByClassName("heroimg")[0];

// console.log(heroimg);

let heropic = 1;

function heroimgNext() {
    heropic = heropic + 1;

    if (heropic > 3) {
        heropic = 1;
    };
    heroimg.innerHTML = `<img src="./images/03_hero_${heropic}.png" alt="和菓子">`;
};

heroimg.innerHTML = `<img src="./images/03_hero_${heropic}.png" alt="和菓子">`;


let startHeroimg = setInterval(heroimgNext, 3500);

function stopHeroimg() {
    clearInterval(startHeroimg);
    console.log("in");
};

heroimg.addEventListener("mouseover", stopHeroimg);
heroimg.addEventListener("mouseleave", function () {
    startHeroimg = setInterval(heroimgNext, 5500);
    console.log("out");
});



// -------------點擊漢堡選單出現小項目，點擊其他區域則消失 ----------------

let hamburger_menu = document.getElementById("hamburger_menu");
let navlist = hamburger_menu.childNodes[3];
console.log(hamburger_menu.childNodes[3]);

hamburger_menu.addEventListener("click", navlistOpen);

function navlistOpen() {
    navlist.style.display = "block";
};

document.addEventListener("click", navlistHide);

function navlistHide(e) {
    let clickarea = e.target;
    let nav = document.querySelector("#hamburger_menu");

    if (nav == clickarea || nav.contains(clickarea)) {
        navlist.style.display = "block";

    } else {
        navlist.style.display = "none";

    }
};

// ----------------點擊禮盒特價打開news.html----------------------

let heronews = document.getElementsByClassName("heronews")[0];
console.log(heronews);

heronews.addEventListener("click",opennews);
heronews.addEventListener("mouseover",changenews);
heronews.addEventListener("mouseleave",changenews2);

function opennews(){
    window.open("news.html","_self");
};
function changenews() {
    heronews.style.transition = ".5s";
    heronews.style.transform = "scale(1.2)";

};

function changenews2() {
    heronews.style.transform = "scale(1.0)";
}



