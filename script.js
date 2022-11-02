const circle = document.querySelector(".circle");
const result = document.querySelector(".result");

let start = new Date().getTime();

circle.addEventListener("click", function () {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function circleAppear() {
    let top = Math.random() * 400;
    let left = Math.random() * 400;

    circle.style.top = top + "px";
    circle.style.left = left + "px";

    circle.style.backgroundColor = getRandomColor();

    circle.classList.remove("hidden");

    start = new Date().getTime();
  }
  setTimeout(circleAppear, Math.random() * 2000);

  circle.classList.add("hidden");

  let end = new Date().getTime();

  let totalTime = (end - start) / 1000;

  result.textContent = `${totalTime}s`;
});
