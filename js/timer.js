let inputs, clock, alarm, timerWorker;

window.addEventListener('load', () => {
  inputs = Array.from(document.getElementsByClassName('number'));
  clock = document.querySelector('.clock');
  alarm = new Audio('../src/sound/alarm.mp3');
  
  // Crear Web Worker
  timerWorker = new Worker('../js/timer-worker.js');
  
  timerWorker.onmessage = function(e) {
    const { action, hours, minutes, seconds } = e.data;
    
    if (action === 'update') {
      updateDisplay(hours, minutes, seconds);
    } else if (action === 'alarm') {
      alarm.play();
    }
  };
});

function startTimer() {
  parseTime();
  updateDisplay(hours, minutes, seconds);
  
  // Enviar al Web Worker
  timerWorker.postMessage({
    action: 'start',
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });
}

function stopTimer() {
  timerWorker.postMessage({ action: 'stop' });
  alarm.pause();
  alarm.currentTime = 0;
  location.reload();
}

function parseTime() {
  hours = Number(inputs[0].value);
  minutes = Number(inputs[1].value);
  seconds = Number(inputs[2].value);
}

function updateDisplay(h, m, s) {
  clock.innerHTML = `<p class="number">${h > 9 ? h : ('0' + h)}</p><span>hs</span><p class="number">${m > 9 ? m : ('0' + m)}</p><span>min</span><p class="number">${s > 9 ? s : ('0' + s)}</p><span>sec</span>`;
  document.title = `${h > 9 ? h : ('0' + h)}:${m > 9 ? m : ('0' + m)}:${s > 9 ? s : ('0' + s)}`;
}