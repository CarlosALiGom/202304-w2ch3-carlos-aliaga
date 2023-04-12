const screenDisplayNumber = document.querySelector(".number");
const decrementButton = document.querySelector(".decrement");
const restartButton = document.querySelector(".restart");
const incrementButton = document.querySelector(".increment");
const parrafmin = document.querySelector(".min");
const parrafmax = document.querySelector(".max");
screenDisplayNumber.textContent = 0;

restartButton.addEventListener("click", () => {
  screenDisplayNumber.textContent = 0;
});

incrementButton.addEventListener("click", () => {
  if (screenDisplayNumber.textContent <= 9) {
    screenDisplayNumber.textContent++;
  } else {
    parrafmax.classList.remove("hidden");
    setTimeout(() => {
      parrafmax.classList.add("hidden");
    }, 3000);
  }
});

decrementButton.addEventListener("click", () => {
  if (screenDisplayNumber.textContent > 0) {
    screenDisplayNumber.textContent--;
  } else {
    parrafmin.classList.remove("hidden");
    setTimeout(() => {
      parrafmin.classList.add("hidden");
    }, 3000);
  }
});
