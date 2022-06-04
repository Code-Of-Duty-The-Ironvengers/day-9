console.log("HELLO");
const body = document.body;

let numberOfTimesButtonClicked = 0;

// Get elements:
// querySelector
// querySelectorAll
// getElementById

// React to user events
// addEventListener

// change properties of an element
// li.style (changes the syle)
// li.innerText (changes the text of an element)
// img.src (adds a src attribute to an img)

function getFirstElementByCssSelector(query) {
  return document.querySelector(query);
}

function getAllElementsByCssSelectors(query) {
  return document.querySelectorAll(query);
}

const h1 = getFirstElementByCssSelector("h1");

const span = document.querySelector("span");
const button = document.querySelector("button");

function buttonClicked() {
  numberOfTimesButtonClicked++;

  span.innerText = numberOfTimesButtonClicked;
}

// event based systems
// buttonclicked being used below has a name of `callback function`
button.addEventListener("click", function (event) {
  console.log("event:", event);
  numberOfTimesButtonClicked++;
  span.innerText = numberOfTimesButtonClicked;

  if (numberOfTimesButtonClicked === 10) {
    // create an image
    // https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
    // make the image appear in the webpage

    const img = document.createElement("img");
    img.src =
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

    body.appendChild(img);
  }
});
// button.addEventListener("click", buttonClicked);

span.innerText = numberOfTimesButtonClicked;
// innerHTML vs innerText
// const body = document.querySelector('body')

function getRandomTo255() {
  const randomUpTo255 = Math.random() * 255;
  const wholeNonFloatingOrDecimal = Math.floor(randomUpTo255);
  return wholeNonFloatingOrDecimal;
}

// querySelector -> getElementsByCssSelector

const allListItems2 = document.querySelectorAll("#just-here li");

// console.log("allListItems:", allListItems);

// for (const li of allListItems) {
//   const red = getRandomTo255();
//   const blue = getRandomTo255();
//   const green = getRandomTo255();

//   li.style.color = `rgb(${red}, ${green}, ${blue})`;
// }

const specialUl = document.getElementById("just-here");

const allListItems = specialUl.children;

function makeRandomRgb() {
  const red = getRandomTo255();
  const blue = getRandomTo255();
  const green = getRandomTo255();

  return `rgb(${red}, ${green}, ${blue})`;
}

for (const li of allListItems) {
  li.style.color = makeRandomRgb();
}

// event
// target
// value

const input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // capture what the user wrote in the input
    // create a list item to add to the ul
    // add that list item
    // clear the input
    // rinse and repeat

    const inputValue = event.target.value;
    const newLi = document.createElement("li");
    newLi.innerText = inputValue;
    newLi.style.color = makeRandomRgb();
    specialUl.appendChild(newLi);
    event.target.value = "";
  }
});

// input.addEventListener("input", function (event) {
//   console.log("event:", event.target.value);
// });
