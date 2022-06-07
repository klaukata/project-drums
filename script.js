window.addEventListener('keydown', (e) => {
    //let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio === null) return;
    
    audio.play();
    audio.currentTime = 0;
});