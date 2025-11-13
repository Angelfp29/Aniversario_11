const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");

const part1Slides = document.querySelectorAll("#part1 .slide");
const part2Slides = document.querySelectorAll("#part2 .slide");

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

let currentSlide = 0;
let intervalId = null;

function showSlide(slides, index){
  slides.forEach((s,i) => s.classList.remove("active"));
  if(slides[index]) slides[index].classList.add("active");
}

function nextSlide(slides){
  currentSlide++;
  if(currentSlide < slides.length){
    showSlide(slides, currentSlide);
  } else {
    clearInterval(intervalId);
    if(slides === part1Slides){
      audio1.pause();
      nextBtn.style.display = "inline-block";
    } else {
      audio2.pause();
    }
  }
}

startBtn.addEventListener("click", ()=>{
  // Ocultar overlay
  const overlay = document.querySelector(".overlay");
  if(overlay) overlay.style.display = "none";

  startBtn.style.display = "none";
  part1.style.display = "block";
  nextBtn.style.display = "none";

  currentSlide = 0;
  showSlide(part1Slides, currentSlide);

  audio1.currentTime = 0;
  audio1.play();

  intervalId = setInterval(()=> nextSlide(part1Slides), 12500);
});

nextBtn.addEventListener("click", ()=>{
  nextBtn.style.display = "none";
  part1.style.display = "none";
  part2.style.display = "block";

  currentSlide = 0;
  showSlide(part2Slides, currentSlide);

  audio2.currentTime = 0;
  audio2.play();

  intervalId = setInterval(()=> nextSlide(part2Slides), 19400);
});