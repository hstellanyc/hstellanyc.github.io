changeHairColor(document.querySelector('#hairColor input').value);

const modify = document.querySelector(".modify");
const canvas = document.querySelector(".canvas");

//functions
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

function addFeature() {
  const feature = this.dataset.type;
  const featureImg = this.firstElementChild.cloneNode(true);
  featureImg.classList.add('feature', feature);
  const target = canvas.querySelector(`.target.${feature}`);
  while (target.querySelectorAll(`.${feature}`).length > 0) {
    target.querySelector(`.${feature}`).remove();
  }
  target.appendChild(featureImg);
};

function changeHairColor(color) {
  document.querySelectorAll('path.hair-color').forEach((svg) => {
    svg.style.fill = color;
  });
}

function changeEyeColor(color) {
  document.querySelectorAll('path.eye-color').forEach((svg) => {
    svg.style.fill = color;
  });
}

function changeClothingColor(color) {
  document.querySelectorAll('path.clothing-color').forEach((svg) => {
    svg.style.fill = color;
  });
}

document.querySelectorAll('.modify').forEach((button) => {
  button.addEventListener('click', addFeature);
});
document.querySelector('#hairColor input').addEventListener('input', (event) => {
  changeHairColor(event.target.value);
});
document.querySelector('#eyeColor input').addEventListener('input', (event) => {
  changeEyeColor(event.target.value);
});
document.querySelector('#clothingColor input').addEventListener('input', (event) => {
  changeClothingColor(event.target.value);
});

function download() {
  const c = document.createElement('canvas');
  c.width = 300;
  c.height = 300;
  const ctx = c.getContext('2d');
  const imgLoadPromises = [];
  canvas.querySelectorAll('.feature').forEach((child) => {
    if (child.tagName === 'IMG') {
      imgLoadPromises.push({
        promise: child.decode(),
        img: child
      });
    } else if (child.tagName === 'svg') {
      const data = child.outerHTML;
      const svg = new Blob([data], {
        type: 'image/svg+xml'
      });
      const img = document.createElement('img');
      img.src = URL.createObjectURL(svg);
      imgLoadPromises.push({
        promise: img.decode(),
        img
      });
    }
  });

Promise.all(imgLoadPromises.map((i) => i.promise)).then(() => {
    imgLoadPromises.forEach((i) => {
      ctx.drawImage(i.img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      URL.revokeObjectURL(i.img.src);
    });
    c.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = 'avatar.png';
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
    });
  });
}