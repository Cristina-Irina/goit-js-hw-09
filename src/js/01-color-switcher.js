function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

var intervalId = null;
var startButton = document.querySelector('[data-start]');
var stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', function () {
  if (intervalId === null) {
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
  }
});

stopButton.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;

  startButton.disabled = false;
  stopButton.disabled = true;
});
