const main = document.querySelector("div#content");

const loadMenu = () => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("image-container");
    imgDiv.classList.add("flex-centered");
    
    const img = document.createElement("img");
    img.src = "https://cdn.modpizza.com/wp-content/uploads/2017/11/Menu-hero.jpg"

    imgDiv.appendChild(img);

    const header = document.createElement("h3");
    header.innerHTML = "INDIVIDUAL, ARTISAN-STYLE PIZZAS, SALADS AND MORE"
    header.classList.add("flex-centered");

    const para = document.createElement("p");
    para.innerHTML = "Start with the size you want, then build from there. Sauces, cheese, dressing, meat, veggies – with over 30 toppings, it’s easy to make your perfect pizza or salad happen. Top it off with strips and a drink for a delicious meal."
    para.classList.add("description");
    para.classList.add("flex-centered");

    main.appendChild(imgDiv);
    main.appendChild(header);
    main.appendChild(para);

    loadItems();
}

const loadItems = () => {
    const itemGrid = document.createElement("div");
    itemGrid.classList.add("menu-grid");

    const item1 = loadMenuItem("maddy");
    const item2 = loadMenuItem("mad-dog");
    const item3 = loadMenuItem("dominic");
    const item4 = loadMenuItem("lucy-sunshine");

    itemGrid.appendChild(item1);
    itemGrid.appendChild(item2);
    itemGrid.appendChild(item3);
    itemGrid.appendChild(item4);
    main.appendChild(itemGrid);
}

const loadMenuItem = (imgsrc) => {
    const item = document.createElement("div");
    item.classList.add("menu-item");
    const img = document.createElement("img");
    img.src = `./img/${imgsrc}.png`;
    item.appendChild(img);
    return item;
}


export {loadMenu}