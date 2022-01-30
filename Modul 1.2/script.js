console.log("Tasks Modul 1.2");
console.log("Exercise 1");
// a) Change the text of the H1 element to "Shiny, new title".
//b) Change the background color of the (body of the) page from beige to lightsteelblue.
//c) Change the style on the button to use:
//background-color: darkred;
//border: 1px solid white;
//color: white;
//padding: 12px 24px;
//text-align: center;
//text-decoration: none;
//display: inline-block;
//font-size: 1.5em;
console.log("a)");
const myH1 = document.querySelector("h1");
myH1.innerHTML = "Shiny, new title";

console.log("b)");
document.body.style.backgroundColor = "lightsteelblue";

console.log("c)");
const myBtn = document.querySelector("button");
myBtn.style.backgroundColor = "darkred";
myBtn.style.border = "1px solid white";
myBtn.style.color = "white";
myBtn.style.padding = "12px 24px";
myBtn.style.textAlign = "center";
myBtn.style.textDecoration = "none";
myBtn.style.display = "inline-block";
myBtn.style.fontSize = "1.5em";
//Her ville det egentlig vært lettere å lage en klasse med alle
//properties og lagt til klassen til button-elementet 



console.log("Exercise 2");
//a) Console log out the text content of the second paragraph on the page.
//b) Change the style of the first paragraph on the page to use font-size at 1.5em and italic font-style.
//c) Add the class makeMeGreen to the H1 element.
//d) Add the class makeMeBlue to the last P element.
//e) Add an alt attribute to the (only) image on the page with the value "Giorgio A. Tsoukalos is a nutter!".
//f) Add a <footer> element at the bottom of the body, containing the text "@2021 Whatever".
//g) Add a link around all the text in the third paragraph that goes to the address: https://no.wikipedia.org/wiki/Dill
//h) Remove the subheading element (H2).
const allParagraphs = document.querySelectorAll("p");
console.log("a)");
console.log(allParagraphs[1].innerText);

console.log("b)");
const firstParagraph = allParagraphs[0];
firstParagraph.style.fontSize = "1.em";
firstParagraph.style.fontStyle = "italic";

console.log("c)");
myH1.classList.add('makeMeGreen');

console.log("d)");
const lastParagraph = allParagraphs[allParagraphs.length-1];
lastParagraph.classList.add('makeMeBlue');

console.log("e)");
const imgElement = document.querySelector('img');
imgElement.setAttribute('alt', "Giorgio A. Tsoukalos is a nutter!");

console.log("f)");
document.body.insertAdjacentHTML('beforeend', `<footer>@2021 Whatever</footer>`);

console.log("g)");
const thirdElement = allParagraphs[2];
let oldContent = thirdElement.innerText;
let newContent = `<a href="https://no.wikipedia.org/wiki/Dill ">${oldContent}</a>`;
thirdElement.innerHTML = newContent;

console.log("h)");
document.querySelector("h2").remove();



console.log("Exercise 3");
//Given the Array of objects:
//Populate the ol (with id "myList") with list items, 
//that is given the value from the 
//lang property in each object from the Array. 
//(In short: List the Array on the web page.)
let programmingLanguages = [
    { lang: "C", rank: 5 },
    { lang: "Go", rank: 7 },
    { lang: "JavaScript", rank: 2 },
    { lang: "C++", rank: 6 },
    { lang: "Swift", rank: 9 },
    { lang: "Python", rank: 1 },
    { lang: "PHP", rank: 10 },
    { lang: "Java", rank: 3 },
    { lang: "R", rank: 8 },
    { lang: "C#", rank: 4 }
];
console.log(programmingLanguages);
const orderedListElement = document.querySelector("ol#myList"); //output element
programmingLanguages.sort((a,b) => a.rank-b.rank);
//Level 2: Using n Inline compare function that uses numeric value rank to sort the items
for (const pl of programmingLanguages) {
    orderedListElement.innerHTML += `<li>${pl.lang} (${pl.rank})</li>/n`;
}




console.log("Exercise 4");
//Add an eventListener to the button (with id "tBtn") and make a 
//function to toggle the class makeMeRed on and off for the footer element.
const tBtn = document.querySelector("button#tBtn");
tBtn.addEventListener('click', () => {
    const footerElement = document.querySelector('footer');
    footerElement.classList.toggle('makeMeRed');
});