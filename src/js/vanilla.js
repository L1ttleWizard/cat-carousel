// cache frequently used DOM elements
const btnDeathMode = document.querySelector('.btn-container');
const buttonRefresh = document.querySelector('.btn-refr');
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

// declare variables
const animation = 'animate__tada';
const duration = '0.5s';
let curSlide = 0;
const maxSlide = slides.length - 1;

// add event listener to toggle class and change css property
btnDeathMode.addEventListener('click', function() {
  btnDeathMode.classList.add(animation);
  btnDeathMode.style.animationDuration = duration;
  setTimeout(function() {
    btnDeathMode.classList.remove(animation);
  }, 550);
  document.querySelector('body').classList.toggle('narc-bg');
  document.querySelector('.musicOn').classList.toggle('show');
  document.querySelector('h1').classList.toggle('nn');
});

// add event listener to fetch cat images and refresh slides
buttonRefresh.addEventListener('click', fetchCatImages);

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// add event listener and navigation functionality for next slide button
nextSlide.addEventListener("click", function() {
  if (curSlide === maxSlide) {
    fetchCatImages();
    curSlide = 0;  
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// add event listener and navigation functionality for previous slide button
prevSlide.addEventListener("click", function() {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;  
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// check if URL param 'free=1' is present and redirect
if (window.location.search.includes('free=1')) {
  if (confirm("Don't forget to use VPN") == true) {
    window.location.href = 'https://free.navalny.com';
  }
}

// Reading the cookie "shibe" value
const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('shibe='))
  .split('=')[1];

// fetch cat images using async/await
async function fetchCatImages() {
  let apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
  try {
      if(cookieValue == '1') {
        apiUrl = 'https://shibe.online/api/cats?count=3';
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           // Assuming element IDs for slides are: slide1, slide2, and slide3
           document.getElementById("slide1").src = data[0];
           document.getElementById("slide2").src = data[1];
           document.getElementById("slide3").src = data[2];
        })
       } 
      else {
       const response = await fetch(apiUrl);
       const data = await response.json();
       const urls = data.map(image => image.url);
       document.getElementById('slide1').src = urls[0];
       document.getElementById('slide2').src = urls[1];
       document.getElementById('slide3').src = urls[2];
      }
  } catch (error) {
    console.error(error);
  }
}

// call fetchCatImages on page load
fetchCatImages();
