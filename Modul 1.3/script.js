console.log("Tasks Modul 1.3");
console.log("Exercise 1");
//Make a folder js.
//In js make two javascript files:
//script.js
//anotherScript.js
//Edit index.html to make it load the two files, 
//in given order, after the rest of the content in the 
//HTML file has loaded.
//Add a short console log statement in the beginning of each 
//js-file to identify it, and make sure you see both statements 
//when opening console in the browser once ìndex.html has been loaded.



console.log("Exercise 2");
//In script.js : Given the pseudo JSON string:
const myCats = `
{
    "theStarks": [
        { "name":"Sansa", "color":"brownish stripes", "hair":"short", "gender":"female" },
        { "name":"Arya", "color":"grayish stripes", "hair":"short", "gender":"female" },
        { "name":"Bran", "color":"light orange stripes", "hair":"long", "gender":"male" }
    ]
}
`;
//a) Make list item for each cat, and insert into the ul#allCats in the HTML.
//The form for each list item should be similar to this for all 3:
//Sansa, a female cat, fur is short haired with brownish stripes.
console.log("a)");
const myCatsArray = JSON.parse(myCats).theStarks;
console.log(myCatsArray);

const allCatsElement = document.querySelector("ul#allCats");
allCatsElement.innerHTML = "";
for (let cat of myCatsArray) {
    let newLiElement = `<li>${cat.name}, a ${cat.gender} cat, fur is ${cat.hair} haired with ${cat.color}</li>`;
    allCatsElement.innerHTML += newLiElement;
}

//b) Make another set of list items for just the cats whose gender 
//is "female" and insert into ul#femaleCats.
//The form for each cat may be the same as above.
console.log("b)");
const femaleCatsElement = document.querySelector("ul#femaleCats");
femaleCatsElement.innerHTML = "";
for (let cat of myCatsArray) {
     if (cat.gender === "female") {
         let newLiElement = `<li>${cat.name}, a ${cat.gender} cat, fur is ${cat.hair} haired with ${cat.color}</li>`;
         femaleCatsElement.innerHTML += newLiElement;
     }
}

//c) Make a function to list the cats, with a parameter (gender) that 
//- if set - only chooses that, and then use that same function to redo a) 
//and b), plus list all male cats into ul#maleCats.
console.log("c)");
function listCatsBasedOnGender(array, gender) {
    console.log(array, gender);
    let outElement;
    if (gender === "male") {
        outElement = document.querySelector("ul#maleCats");
    } else if (gender === "female") {
        outElement = document.querySelector("ul#femaleCats");
    } else {
        outElement = document.querySelector("ul#allCats");
    }

    outElement.innerHTML = "";
    for (let cat of array) {
        if (gender === undefined || cat.gender === gender) {
            let newLiElement = `<li><b style="color: red;">New</b>: 
            ${cat.name}, a ${cat.gender} cat, fur is ${cat.hair} haired with 
            ${cat.color}</li>`;
            outElement.innerHTML += newLiElement;
        }
    }
}
listCatsBasedOnGender (myCatsArray, "male");
listCatsBasedOnGender (myCatsArray, "female");
listCatsBasedOnGender (myCatsArray);




console.log("Exercise 3");
//In anotherScript.js : Given the pseudo JSON string:
// const bestAlbumsOfAllTime = `
// {
//     "albums": [
//         { "title":"Dookie", "artist":"Green Day", "year": 1994, "cover":"https://www.geek.no/noroff/albums/Green_Day_-_Dookie_cover.jpg" },
//         { "title":"London Calling", "artist":"The Clash", "year": 1979, "cover":"https://www.geek.no/noroff/albums/TheClashLondonCallingalbumcover.jpg" },
//         { "title":"The Number of the Beast", "artist":"Iron Maiden", "year": 1982, "cover":"https://www.geek.no/noroff/albums/IronMaiden_NumberOfBeast.jpg" },
//         { "title":"Nevermind", "artist":"Nirvana", "year": 1991, "cover":"https://www.geek.no/noroff/albums/NirvanaNevermindalbumcover.jpg" },
//         { "title":"The Final Cut", "artist":"Pink Floyd", "year": 1983, "cover":"https://www.geek.no/noroff/albums/FloydFC-Cover01.jpg" },
//         { "title":"Appetite For Destruction", "artist":"Guns N’ Roses", "year": 1987, "cover":"https://www.geek.no/noroff/albums/GunsnRosesAppetiteforDestructionalbumcover.jpg" },
//         { "title":"Legend", "artist":"Bob Marley and the Wailers", "year": 1984, "cover":"https://www.geek.no/noroff/albums/BobMarley-Legend.jpg" },
//         { "title":"Tattoo You", "artist":"The Rolling Stones", "year": 1981, "cover":"https://www.geek.no/noroff/albums/TattooYou81.jpg" },
//         { "title":"The Process of Belief", "artist":"Bad Religion", "year": 2002, "cover":"https://www.geek.no/noroff/albums/BadReligionTheProcessOfBelief.jpg" },
//         { "title":"The Stone Roses", "artist":"The Stone Roses", "year": 1989, "cover":"https://www.geek.no/noroff/albums/Stoneroses.jpg" }
//     ]
// }
// `
// console.log(myAlbums);
//a) List albums in the order given into the ol#albums element in given order, on the form:
//1. Dookie, Green Day, 1994
//2. London Calling, The Clash, 1979 
//3. etc.
// console.log("a)");


//b) Make a CSS file and style the list and list items, so it looks something like this (or better):
// console.log("b)");

//c) Add an event listener to button#sortByArtist and make a function that sorts the lists, 
//and re-lists it into ol#albums, sorted on the value of the Artist (alphabetically, ascending, ie. the normal way).
// console.log("c)");

//d) Add another eventlistener to button#sortByYearAsc, and make a function that sorts the list by the numeric 
//value of the year, and lists the albums back into ol#albums in ascending order (oldest first).
// console.log("d)");

//e) Add another eventlistener to button#sortByYearDesc, and make a function that sorts the list by the 
//numeric value of the year, and lists the albums back into ol#albums in descending order (newest first).
// console.log("e)");

//f) Add another button to the HTML, that - when clicked - re-lists the albums, 
//back into ol#albums in the original order given.
// console.log("f)");