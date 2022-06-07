window.addEventListener('keydown', (e) => {
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio === null) return;
    
    key.classList.toggle('playing')
    audio.play();
    audio.currentTime = 0;
    console.log(e.propertyName)
  });
  
  window.addEventListener('keyup', (e) => {
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.remove('playing')
  })
  
  