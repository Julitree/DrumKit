


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing');
}


(function clickSound(){
    const audioClick = document.querySelectorAll(`.key`);
    audioArray = Array.from(audioClick);
    audioArray.map(function(item) {
            item.addEventListener('click', function() {
                this.classList.add('playing')
                 const audioClick = document.querySelector(`audio[data-key="${item.dataset['key']}"]`);
                 audioClick.play();
                     })
            })
 })()


function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove('playing')
}


const keys = document.querySelectorAll(".key");
keys.forEach(key =>key.addEventListener('transitionend', removeTransition));
keys.forEach(key =>key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

