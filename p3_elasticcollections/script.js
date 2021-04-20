/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyupDyzr4rqikZKv" }).base(
  "appJz4Rr6ODw3t0RZ"
);

//get the "pencils" table from the base, select ALL the records, and specify the functions that will receive the data
base("pencil_table").select({view: "Grid view"}).eachPage(gotPageOfPencils, gotAllPencils);

// an empty array to hold our pencil data
const pencils = [];
const body = document.querySelector("body");
const container = document.querySelector('.container');
const gallery = document.querySelector('.gallery');
const info = document.querySelector('#info');
const details = document.querySelector('#details');
const item = document.querySelector('.item');
const click = document.querySelector("#click");
const cover = document.querySelector('.overlay');
const title = document.querySelector('.title');
const blur = document.querySelector('.blur');
// callback function that receives our data
function gotPageOfPencils(records, fetchNextPage) {
  console.log("gotPageOfPencils()");
  // add the records from this page to our Pencils array
  pencils.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPencils(err) {
  console.log("gotAllPencils()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading pencils");
    console.error(err);
    return;
  }

  // call functions to log and show the pencils
  consoleLogPencils();
  showPencils();
}

function showInfo(event) {
  console.log(event);
  if (event.target.classList.contains('item')) {
      details.innerHTML = `
          <h2>${event.target.dataset.shade}</h2>  
          <h2>${event.target.dataset.pencil_name}</h2>
          <h2>${event.target.dataset.length}</h2>
        `;

        info.classList.add('show');
  }
}

 function highlight(event) {
  if (info.classList.contains('show')) {
    document.querySelectorAll('.chosen').forEach((pencil) => pencil.classList.remove('chosen'))
    event.target.setAttribute("class", "chosen");
 } else {
    event.target.classList.remove( "chosen");
 }
}

function paper(event) {
	if (document.body.classList.contains('paper')) {
		document.body.classList.remove('paper');
  	} else {
  	document.body.classList.add('paper');
  } 
 }

 function shift(event) {
  if (cover.classList.contains('overlay')) {
    cover.classList.add('goaway');
    title.classList.add('goaway');
    blur.classList.remove('blur');
    } else {
    cover.classList.add('goaway');
    title.classList.add('goaway');
    blur.classList.remove('blur');
  }
 }



// just loop through the pencils and console.log them
function consoleLogPencils() {
  console.log("consoleLogPencils()");
  pencils.forEach((pencil) => {
   console.log("Pencils:", pencil);
  });
}

// loop through the pencils, create an h2 for each one, and add it to the page
function showPencils() {
  console.log("showPencils()");
  pencils.forEach((pencil) => {
     const img = document.createElement("img");
    	 img.src = pencil.fields.image[0].url;
   	   img.classList.add("item");
       img.dataset.pencil_name = pencil.fields.pencil_name;
       img.dataset.length = pencil.fields.length;
       img.dataset.shade = pencil.fields.shade;
       document.querySelector(".gallery").append(img);
     const makeItem = document.createElement("div");
       makeItem.classList.add("item");
       document.querySelector(".container").append(makeItem);



	img.addEventListener('click', showInfo);
  img.addEventListener('click', highlight);
	click.addEventListener('click', paper);
  cover.addEventListener('click', shift);



});

	try {
		displayPencils();
	}	catch (e) {
		console.log(e);
	}
}
