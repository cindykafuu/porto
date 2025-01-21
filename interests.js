$(document).ready(function () {
  const video = document.getElementById('carouselVideo');
  video.addEventListener('click', function () {
    if (video.paused) {
      video.muted = false;
      video.play();
    } else {
      video.pause();
    }
  });
});
