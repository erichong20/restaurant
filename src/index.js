import {loadMain} from "./loadPage.js"
import {loadContact} from "./contact.js"
import {loadMenu} from "./menu.js"

const addNav = () => {
    const navContainer = document.createElement("div");
    navContainer.classList.add("navBar");

    const homeTab = createTab("tab1", "Home", navContainer);
    const menuTab = createTab("tab2", "Menu", navContainer);
    const contactTab = createTab("tab3", "Contact", navContainer);
    
    navContainer.appendChild(homeTab);
    navContainer.appendChild(menuTab);
    navContainer.appendChild(contactTab);
    document.querySelector("div#content").appendChild(navContainer);
}

const createTab = (id, name, container) => {
    const tab = document.createElement("input");
    tab.setAttribute("type","radio");
    tab.setAttribute("id",id);
    tab.classList.add("input-button");

    tab.addEventListener("click", ()=>{
        loadNextPage(id);
    });


    const label = document.createElement("label");
    label.classList.add("tabButton");
    label.setAttribute("for",id);
    label.innerHTML = name;

    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");

    container.appendChild(tab);
    container.appendChild(label);

    return tabDiv;
}

const loadNextPage = (id) => {
    let container = document.querySelector("div#content");
    container.innerHTML = "";
    addNav();
    if (id === "tab1"){
        loadMain();
    } else if (id === "tab2"){
        loadMenu();
    } else if (id === "tab3"){
        loadContact();
    }
}

addNav();
loadMain();
