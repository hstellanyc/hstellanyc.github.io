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

// just loop through the pencils and console.log them
function consoleLogPencils() {
  console.log("consoleLogPencils()");
  pencils.forEach((pencils) => {
    console.log("Pencils:", pencils);
  });
}

// loop through the pencils, create an h2 for each one, and add it to the page
function showPencils() {
  console.log("showPencils()");
  pencils.forEach((pencils) => {

    const h2 = document.createElement("h2");
    h2.innerText = pencils.fields.pencil_name;
    document.body.appendChild(h2);

    const img = document.createElement("img");
   	img.src = pencils.fields.image[0].url;
    document.querySelector(".container").appendChild(img);
  });

	try {
		displayPencils();
	}	catch (e) {
		console.log(e);
	}
}

function displayPencils() {
	pencils.forEach(function (pencil) {
		let li = document.createElement('li');
		li.innerText = `${pencil.fields.pencil_name} (${pencil.fields.image})`;
		li.dataset.name = pencil.fields.pencil_name;
		pencilsElement.append(li);
	});
}