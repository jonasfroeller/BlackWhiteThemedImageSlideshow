document.getElementById("arrowLeft").addEventListener("click", loadLeft);
document.getElementById("arrowRight").addEventListener("click", loadRight);
let imagesTags = document.getElementsByClassName("img");
let imagesArray = [
  "./imgs/img1.jpg", // 0 => 8 | 0 => 1
  "./imgs/img2.jpg", // 1 => 0 | 1 => 2
  "./imgs/img3.jpg", // 2 => 1 | 2 => 3
  "./imgs/img4.jpg", // 3 => 2 | 3 => 4
  "./imgs/img5.jpg", // 4 => 3 | 4 => 5
  "./imgs/img6.jpg", // 5 => 4 | 5 => 6
  "./imgs/img7.jpg", // 6 => 5 | 6 => 7
  "./imgs/img8.jpg", // 7 => 6 | 7 => 8
  "./imgs/img9.jpg", // 8 => 7 | 8 => 0
];

function loadLeft() {
  clearInterval(runSlide);
  imagesArray.unshift(imagesArray.pop());
  updateImages();
  runSlide = setInterval(slide, 5000);
}

function loadRight() {
  clearInterval(runSlide);
  slide();
  runSlide = setInterval(slide, 5000);
}

let runSlide = setInterval(slide, 5000);

function slide() {
  imagesArray.push(imagesArray.shift());
  updateImages();
}

function updateImages() {
  [...imagesTags].forEach((img, i) => {
    img.src = imagesArray[i];
  });
}
