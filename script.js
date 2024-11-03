let audio = document.querySelector('audio');
document.onclick = function () {
  document.body.style.display = 'flex';
  audio.play();
  audio.muted = false;
  audio.loop = true;
  audio.playbackRate = 1.3;
}
 