import './assets/styles/index.css';
import { setContentWrapper, loadHomePage, removeLogo } from "./home";

setContentWrapper(document.querySelector("#content"));

loadHomePage();


/*
setTimeout(function(){
    removeLogo()
},1000);
*/