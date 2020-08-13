const main = document.querySelector("div#content");

const loadContact = () => {
    const title = document.createElement("h2");
    title.innerHTML = "Stay in the loop";

    const para = document.createElement("p");
    para.innerHTML = "Have a question? Want to work for MOD? Fill in the form below and we will respond to you as soon as possible.";
    para.classList.add("description", "flex-centered");

    const form = document.createElement("form");;
    form.classList.add("contact-form");

    const nameDiv = createFormElement("Name","text");
    const emailDiv = createFormElement("Email","email");
    const msgDiv = createFormElement("Message","textarea");
    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.setAttribute("type","submit");
    submitButton.classList.add("submit-button");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        console.log("form submitted");
    });

    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(msgDiv);
    form.appendChild(submitButton);

    const footer = document.createElement("footer");
    footer.innerHTML = "created by eric hong"

    main.appendChild(title);
    main.appendChild(para);
    main.appendChild(form);
    main.appendChild(footer);
}

const createFormElement = (id,type) => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const inputElement = document.createElement("input");

    label.innerHTML = id;
    label.setAttribute("for",id);
    
    inputElement.setAttribute("id",id);
    inputElement.setAttribute("name",id);
    inputElement.setAttribute("type",type);
    inputElement.classList.add("form-element");

    div.appendChild(label);
    div.appendChild(inputElement);

    return div;
}

export {loadContact}