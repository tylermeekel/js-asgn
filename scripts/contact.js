// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let paragraph = document.createElement("p");
paragraph.innerHTML = "Thank you for your message";
paragraph.style.fontSize = "24px";

let contactPage = document.getElementById("contact-page");
let submitButton = document.getElementById("submit-button");

function submitForm() {
    contactPage.replaceChildren(paragraph);
}

submitButton.addEventListener("click", submitForm);
