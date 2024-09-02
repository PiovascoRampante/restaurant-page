
import { menuRender, menu } from "./menu-tab.js";
import "./style.css";



const bHome = document.querySelector("#home");
const bMenu = document.querySelector("#menu");
const bAbout = document.querySelector("#about");

bMenu.addEventListener("click", ()=> {
  resetMain()
  menuRender(menu)
});

bHome.addEventListener("click", ()=> {
  resetMain()
});






function resetMain (){
  const mainElement = document.querySelector("main")
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
}


console.log("eccomi qua")