var body = document.querySelector("body");
var hamburger = document.querySelector(".hamburger");
var menuContainer = document.querySelector(".menu-header");
var menu = document.querySelector(".navmenu-header");
var links = document.querySelectorAll(".navmenu-header li");
var items = document.querySelectorAll(".nav-item");
var points = document.querySelector(".points-header");


hamburger.addEventListener('click', ()=>{
   //Menu behavior
    menuContainer.classList.toggle("mobile-active");
    menu.classList.toggle("open");
    body.classList.toggle("scroll-overflow");
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


points.addEventListener('click', ()=>{
  //Points open on tab behavior
   points.classList.toggle("points-active");
});


/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */

for (let item of links) {
  if (item.querySelector(".sub-menu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);