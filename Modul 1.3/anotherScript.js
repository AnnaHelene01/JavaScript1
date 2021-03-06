console.log("Exercise 3");
//In anotherScript.js : Given the pseudo JSON string:
const bestAlbumsOfAllTime = `
{
    "albums": [
        { "title":"Dookie", "artist":"Green Day", "year": 1994, "cover":"https://www.geek.no/noroff/albums/Green_Day_-_Dookie_cover.jpg" },
        { "title":"London Calling", "artist":"The Clash", "year": 1979, "cover":"https://www.geek.no/noroff/albums/TheClashLondonCallingalbumcover.jpg" },
        { "title":"The Number of the Beast", "artist":"Iron Maiden", "year": 1982, "cover":"https://www.geek.no/noroff/albums/IronMaiden_NumberOfBeast.jpg" },
        { "title":"Nevermind", "artist":"Nirvana", "year": 1991, "cover":"https://www.geek.no/noroff/albums/NirvanaNevermindalbumcover.jpg" },
        { "title":"The Final Cut", "artist":"Pink Floyd", "year": 1983, "cover":"https://www.geek.no/noroff/albums/FloydFC-Cover01.jpg" },
        { "title":"Appetite For Destruction", "artist":"Guns N’ Roses", "year": 1987, "cover":"https://www.geek.no/noroff/albums/GunsnRosesAppetiteforDestructionalbumcover.jpg" },
        { "title":"Legend", "artist":"Bob Marley and the Wailers", "year": 1984, "cover":"https://www.geek.no/noroff/albums/BobMarley-Legend.jpg" },
        { "title":"Tattoo You", "artist":"The Rolling Stones", "year": 1981, "cover":"https://www.geek.no/noroff/albums/TattooYou81.jpg" },
        { "title":"The Process of Belief", "artist":"Bad Religion", "year": 2002, "cover":"https://www.geek.no/noroff/albums/BadReligionTheProcessOfBelief.jpg" },
        { "title":"The Stone Roses", "artist":"The Stone Roses", "year": 1989, "cover":"https://www.geek.no/noroff/albums/Stoneroses.jpg" }
    ]
}
`
//a) List albums in the order given into the ol#albums element in given order, on the form:
//1. Dookie, Green Day, 1994
//2. London Calling, The Clash, 1979 
//3. etc.
console.log("a)");
const myAlbums = JSON.parse(bestAlbumsOfAllTime).albums;

const albumList = document.getElementById("albums");
albumList.innerHTML = "";
for (let album of myAlbums) {
    albumList.innerHTML += `<li class="listitem">
    <img src="${album.cover}"/>
    <div>
    <h2>${album.title}</h2> 
    <p>${album.artist}</p>
    <p>${album.year}</p> 
    </div>
    </li>`;
}
console.log(albumList);



//b) Make a CSS file and style the list and list items, so it looks something like this (or better):
console.log("b)");
console.log("Sjekk CSS fil");



//c) Add an event listener to button#sortByArtist and make a function that sorts the lists, 
//and re-lists it into ol#albums, sorted on the value of the Artist (alphabetically, ascending, ie. the normal way).
console.log("c)");
const sortByArtistBtn = document.querySelector("button#sortByArtist");
sortByArtistBtn.addEventListener('click', sortArtist);

function sortArtist(test) {
    const newAlbum =  
}


//navnene må være lik
//Den forteller sort at når du går gjennom hele listen så plukker du ut to og to
//elementer, eksempel 1. og 2. element. Den assigner det ene til a og det andre til b. Deretter må du fortelle
//Hvordan den skal rangere de to elemenetene. Siden det er et objekt må vi ta ut info
//vi henter artist.name og setter begge til store bokstaver for å være sikker. 

//d) Add another eventlistener to button#sortByYearAsc, and make a function that sorts the list by the numeric 
//value of the year, and lists the albums back into ol#albums in ascending order (oldest first).
console.log("d)");

//e) Add another eventlistener to button#sortByYearDesc, and make a function that sorts the list by the 
//numeric value of the year, and lists the albums back into ol#albums in descending order (newest first).
console.log("e)");

//f) Add another button to the HTML, that - when clicked - re-lists the albums, 
//back into ol#albums in the original order given.
console.log("f)");