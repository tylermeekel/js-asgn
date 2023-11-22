/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let dayCounter = 0;
let cost = 0;
let dayCost = 35;

//For each day of the week in the day-selector
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

/********* colour change days of week *********/
function applyClickedClass(event) {
    let target = event.target;
    if (!target.classList.contains("clicked")) {
        target.classList.add("clicked");
        dayCounter++;
        calculateCost();
    }
}

monday.addEventListener("click", applyClickedClass);
tuesday.addEventListener("click", applyClickedClass);
wednesday.addEventListener("click", applyClickedClass);
thursday.addEventListener("click", applyClickedClass);
friday.addEventListener("click", applyClickedClass);

/********* clear days *********/
let clearButton = document.getElementById("clear-button");

function clearDays() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    dayCounter = 0;
    calculateCost();
}

clearButton.addEventListener("click", clearDays);

/********* change rate *********/
let halfButton = document.getElementById("half");
let fullButton = document.getElementById("full");

function changeRate(event) {
    if (event.target.id === "half") {
        halfButton.classList.add("clicked");
        fullButton.classList.remove("clicked");
        dayCost = 20;
    } else if (event.target.id === "full") {
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
        dayCost = 35;
    }

    calculateCost();
}

halfButton.addEventListener("click", changeRate);
fullButton.addEventListener("click", changeRate);

/********* calculate *********/
let calculatedCost = document.getElementById("calculated-cost");

function calculateCost() {
    cost = dayCost * dayCounter;
    calculatedCost.innerHTML = cost;
}
