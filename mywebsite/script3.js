const click = document.querySelector("#click");
const flexible = document.querySelector(".flexible");
const current = document.querySelector(".current");
const project = document.querySelectorAll(".project");
const projectTitle = document.querySelectorAll(".project-title");
const icon = document.querySelectorAll(".cls-1");
const content = document.querySelector(".content");
const social = document.querySelector(".social");
const extra = document.querySelector("#extra");



icon.forEach(x => console.log(x));


function shift(event) {
	if (document.body.classList.contains('dark')) {
		document.body.classList.remove('dark');
		document.body.classList.add('light');
		flexible.classList.remove('textwhite');
		flexible.classList.add('textblack');
		current.classList.remove('textwhite');
		current.classList.add('textblack');
		content.classList.remove('textwhite');
		content.classList.add('textblack');
		social.classList.remove('textwhite');
		social.classList.add('textblack');
		extra.classList.remove('textwhite');
		extra.classList.add('textblack');

		
		


		for (i=0; i<projectTitle.length; i++){
			projectTitle[i].classList.remove('textwhite');
			projectTitle[i].classList.add('textblack');
        }
		
		for (i=0; i<icon.length; i++){
			icon[i].classList.add('icondark');
			icon[i].classList.remove('iconlight');
		}


  	} else {
  		document.body.classList.remove('light');
  		document.body.classList.add('dark');
  		flexible.classList.remove('textblack');
  		flexible.classList.add('textwhite');
		current.classList.remove('textblack');
		current.classList.add('textwhite');
		content.classList.remove('textblack');
		content.classList.add('textwhite');
		social.classList.remove('textblack');
		social.classList.add('textwhite');
		extra.classList.remove('textblack');
		extra.classList.add('textwhite');
		

	
		for (i=0; i<icon.length; i++){
			icon[i].classList.remove('icondark');
			icon[i].classList.add('iconlight');
		}

		for (i=0; i<projectTitle.length; i++){
			projectTitle[i].classList.add('textwhite');
			projectTitle[i].classList.remove('textblack');
        }
     
   //  	for (i=0; i<project.length; i++){
			// project[i].classList.remove('box-shadow');
			// project[i].classList.add('box-shadow');
   //      }
       console.log(project);
  } 
  console.log('clicked');
 }


click.addEventListener('click', shift);


