layer = 3;
let modify = document.querySelector(".modify");
let canvas = document.querySelector(".canvas");
let haircolor = document.querySelector(".cls-1");
let draw_color = "black";



function openOptions(event, feature) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(feature).style.display = "block";
  event.currentTarget.className += " active";
}

// document.querySelector('.scroll').addEventListener('click', (event) => {
//     if (event.target.tagName === 'IMG') {
//         //canvas.src = event.target.src;
//         let feature = event.target.parentNode.dataset.type;
//         let featureElement = canvas.querySelector(`.${feature}`);
//         console.log(feature, featureElement);
//         if (featureElement) {
//         	featureElement.src = event.target.src;
//         } else {
//         	let featureImg = document.createElement('img');
//         	featureImg.classList.add(feature);
//         	featureImg.src = event.target.src;
//         	canvas.append(featureImg);
//         } 
//     }
// });

function addFeature(event) {
  if (event.target.tagName === 'IMG') {
    let feature = event.target.parentNode.dataset.type;
        let featureElement = canvas.querySelector(`.${feature}`);
        console.log(feature, featureElement);
        if (featureElement) {
        	featureElement.src = event.target.src;
        } else {
        	let featureImg = document.createElement('img');
        	featureImg.style.zIndex = layer;
        	layer += 1;
        	featureImg.classList.add(feature);
        	featureImg.src = event.target.src;
        	canvas.append(featureImg);
        }
  }
};


function change_haircolor(element) {
  draw_color = element.style.background;
  featureImg = draw_color;


}

document.querySelector('#faceShape .scroll').addEventListener('click', addFeature);
document.querySelector('#hairStyle .scroll').addEventListener('click', addFeature);







// console.log('helloworld');

// const canvas = document.getElementById('canvas');
// canvas .width = window.innerWidth - 60;
// canvas.height = 400;

// let context = canvas.getContext("2d");
// let start_background_color = "white";
// context.fillStyle = start_background_color;
// context.fillRect(0, 0, canvas.width, canvas.height);

// let draw_color = "black";
// let draw_width = "2";
// let is_drawing = false;

// let restore_array = [];
// let index = -1;

// function change_color(element) {
// 	draw_color = element.style.background;
// }

// canvas.addEventListener("touchstart", start, false);
// canvas.addEventListener("touchmove", draw, false);
// canvas.addEventListener("mousedown", start, false);
// canvas.addEventListener("mousemove", draw, false);

// canvas.addEventListener("touchend", stop, false);
// canvas.addEventListener("mouseup", stop, false);
// canvas.addEventListener("mouseout", stop, false);

// function start(event) {
// 	is_drawing = true; 
// 	context.beginPath();
// 	context.moveTo(event.clientX - canvas.offsetLeft, 
// 				   event.clientY - canvas.offsetTop);

// 	event.preventDefault(); 

// }

// function draw(event) {
// 	if (is_drawing) {
// 		context.lineTo(event.clientX - canvas.offsetLeft, 
// 				   	   event.clientY - canvas.offsetTop);
// 		context.strokeStyle = draw_color;
// 		context.lineWidth = draw_width;
// 		context.lineCap = "round";
// 		context.lineJoin= "round";
// 		context.stroke();

// 	}
// 	event.preventDefault();
// }

// function stop(event) {
// 	if (is_drawing) {
// 		context.stroke();
// 		context.closePath();
// 		is_drawing = false;
// 	}
// 	event.preventDefault();

// 	if ( event.type != 'mouseout' ) {
// 		restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
// 		index +=1;
// 	}
// }

// function clear_canvas() {
// 	context.fillStyle = start_background_color;
// 	context.clearRect(0, 0, canvas.width, canvas.height);
// 	context.fillRect(0, 0, canvas.width, canvas.height);

// 	restore_array = [];
// 	index = -1;
// }

// function undo_last() {
// 	if (index <= 0) {
// 		clear_canvas();
// 	} else {
// 		index -= 1;
// 		restore_array.pop();
// 		context.putImageData(restore_array[index], 0, 0);
// 	}
// }

// function createDownload() {
//         const downloadURL = document.getElementById('c').toDataURL();
//         document.getElementById('downloadLink').href = downloadURL;
//     }