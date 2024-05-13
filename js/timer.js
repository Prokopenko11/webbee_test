document.addEventListener('DOMContentLoaded', function() {
  let startTime = sessionStorage.getItem('startTime');
  if (!startTime) {
      startTime = Date.now();
      sessionStorage.setItem('startTime', startTime);
  }

  function formatTime(elapsedTime) {
      let totalSeconds = Math.floor(elapsedTime / 1000);
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
      let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

      return String(hours).padStart(2, '0') + ':' + 
             String(minutes).padStart(2, '0') + ':' + 
             String(seconds).padStart(2, '0');
  }

  function updateTime() {
      let elapsedTime = Date.now() - startTime;
      document.getElementById('timer').textContent = formatTime(elapsedTime);
  }

  setInterval(updateTime, 1000); 
});