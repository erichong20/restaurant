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
}


export {loadMenu}