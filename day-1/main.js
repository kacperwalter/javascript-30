window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing')
});

const keys = document.querySelectorAll('.key');
const i = 1;
