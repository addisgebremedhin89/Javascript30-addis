/*First get our elements */

const player = document.querySelector('.player');
const video = document.player.querySelector('.viewer');
const progress = document.player.querySelector('.progress');
const progressBar = document.player.querySelector('.progress__filled');
const toggle = document.player.querySelector('.toggle');
const skipButtons = document.player.querySelector('.data-skip');
const ranges = document.player.querySelector('.player__slider');

/*Build out our function */

function togglePlay() {
  //paused is a property on video by default
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
function updateButton(){
  const icon = this.paused ? 'play' : 'pause';
  console.log('Update the button');
  }
}

function skip() {
  //console.log(this.dataset.skip);
  video.currentTIme += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] ] this.value;
  //console.log(this.name);
  //console.log(this.value);
}

function handleProgress() {
  //current time and duration are properties on the object video
  const percent = video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = 'S{percent}%';
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

/*Hook up the event listeners*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip)
);
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = trues);
progress.addEventListener('mousemove',() => mousedown = false);