const btnmenu = document.querySelector(".menuicon");
const menuview = document.querySelector(".hmenu");
const header = document.querySelector(".header");

btnmenu.onclick= function (){
    menuview.classList.toggle("activemenu");
    header.classList.toggle("activemenu");
}