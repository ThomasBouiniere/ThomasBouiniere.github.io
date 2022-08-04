const counterDisplay = document.querySelector("h3");
const levelDisplay = document.querySelector("span");
const timer = document.querySelector("div");
let counter = 0;
let lvl = 1;
let speed = 8;
let temps = 30;

const bubbleMaker = () => {
  if (temps != 0) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 120 + "%";
    bubble.style.left = Math.random() * 100 + 120 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", plusMinus * (Math.random() * 100) + "%");

    bubble.style.setProperty("animation-duration", speed + "s");

    bubble.addEventListener("click", () => {
      bubble.remove();
      counter++;
      counterDisplay.textContent = counter;
      if (counter % 10 == 0) {
        lvl++;
        levelDisplay.textContent = "Niveau " + lvl;
        speed = speed * 0.75;
        temps = 30;
      }
    });
    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }
};

function diminuerTemps() {
  timer.textContent = "Timer : " + temps;
  if (temps != 0) {
    temps--;
  }
}

setInterval(diminuerTemps, 1000);
setInterval(bubbleMaker, 1000);
