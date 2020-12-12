// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action=start]'),
  stopBtn: document.querySelector('button[data-action=stop]'),
};

refs.startBtn.addEventListener('click', onStartClickHandler);
refs.stopBtn.addEventListener('click', onStopClickHandler);

function bodyColorSet(color) {
  refs.body.style.backgroundColor = color;
}

let intervalId = null;

function onStartClickHandler() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    bodyColorSet(colors[randomIntegerFromInterval(0, colors.length)]);
  }, 1000);
}

function onStopClickHandler() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
