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
const gallery = document.querySelector('.gallery');
const container = document.querySelector('.container');
const info = document.querySelector('#info');
const details = document.querySelector('#details');

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
          <h2>${event.target.dataset.pencil_name}</h2>
          <h2>${event.target.dataset.length}</h2>
          <h2>${event.target.dataset.shade}</h2>         
        `;

        info.classList.add('show');
  }

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

	// const name = document.createElement("h2");
 //    name.innerText = pencils.fields.pencil_name;
 //    name.classList.add("item");
 //    document.querySelector(".container").append(name);

 //    const length = document.createElement("h2");
 //    length.innerText = pencils.fields.length;
 //    length.classList.add("item");
 //    document.querySelector(".container").append(length);

 //    const shade = document.createElement("h2");
 //    shade.innerText = pencils.fields.shade;
 //    shade.classList.add("item");
 //    document.querySelector(".container").append(shade);
    // document.body.appendChild(shade);

    const img = document.createElement("img");
   	img.src = pencils.fields.image[0].url;
   	img.classList.add("item");
    document.querySelector(".gallery").append(img);

    // const makeItem = document.createElement("div");
    // makeItem.classList.add("item");
    // document.querySelector(".container").append(makeItem);


 //    const li = document.createElement('li');
	// li.innerText = `${pencils.fields.pencil_name}`;
	// li.dataset.name = pencils.fields.pencil_name;
	// sectionName.append(li);


	// img.addEventListener("click", function(){
	// 	.classList.toggle("active");
	// }

	img.addEventListener('click', showInfo);

  });

	try {
		displayPencils();
	}	catch (e) {
		console.log(e);
	}
}





// function showPencils() {
// 	pencils.forEach(function (pencil) {
// 		const li = document.createElement('li');
// 		li.innerText = `${pencils.fields.pencil_name} (${pencils.fields.image})`;
// 		li.dataset.name = pencils.fields.pencil_name;
// 		pencilsElement.append(li);
// 	});
// }