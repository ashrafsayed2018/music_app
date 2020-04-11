window.addEventListener('load', function () {
    const sounds = this.document.querySelectorAll('.sound');
    const pads   = this.document.querySelectorAll('.pads div');
    const visual  = this.document.querySelector('.visual');
    const volume = this.document.getElementById('volume');
    const volumeResult = this.document.querySelector('.volume-result');
    volume.addEventListener('input',function () {
        volumeResult.innerHTML = volume.value;
        sounds.volume = volume.value;
        console.log(sounds.volume)
    });
    
    var  color  = []

    
    // let get going with sound here 
    
    pads.forEach(function (pad,index) { // start for each 
      
      pad.addEventListener('click',function () {
        sounds[index].currentTime = 0; 
        sounds[index].duration = 1;
        sounds[index].volume = volume.value;
        sounds[index].play();
        const style = getComputedStyle(pad);
        const background = style.backgroundColor;
        color.push(background);
         createBubbles(background,index);
         setTimeout(()=> {

            sounds[index].pause();
            sounds[index].currentTime = 0; 
      
        }, 300);
      
      });
  
    });  // end foreach 
   // create function to make bubbles 

   function createBubbles(background,index) {
      const bubble = this.document.createElement('div');
      visual.appendChild(bubble);
      bubble.style.backgroundColor = background;
      bubble.style.animation = "jump 1s ease";
      bubble.addEventListener('animationend',function () {
          visual.removeChild(this);
      })
   }
});

