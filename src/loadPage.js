const main = document.querySelector("div#content");

const loadMain = () => {
    let title = document.createElement("h1");
    title.innerHTML = "MOD PIZZA";

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("image-container");
    imgDiv.classList.add("flex-centered");
    let mainImg = document.createElement("img");
    mainImg.src = "https://i.insider.com/59433fda9a7af500028b499a?width=1136&format=jpeg";
    imgDiv.appendChild(mainImg);

    let para = document.createElement("p");
    para.innerHTML = "MOD is the original superfast pizza experience – a pioneering fast-casual concept that puts you in the driver’s seat. Artisan-style pizzas and salads are individually sized, made on demand, and ready in just minutes. Choose from over 30 toppings – the price stays the same no matter what you pick. At its heart, however, MOD is a platform for doing good. The idea? If we take care of our employees, they’ll take care of you, and our business will take care of itself. We call it Spreading MODness, and after opening stores across the U.S., we think it’s working."
    para.classList.add("description");
    para.classList.add("flex-centered");

    main.appendChild(title);
    main.appendChild(para);
    main.appendChild(imgDiv);
}

export {loadMain}