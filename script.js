const drumPad = document.querySelectorAll(".drum-pad"); 
const displayText = document.getElementById("display");
document.addEventListener("DOMContentLoaded", function() {
  document.body.focus();
});

const drumAudio = [
  {title: "Heater 1",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3", 
  id: "Q"},
  {
  title: "Heater 2",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3", 
  id: "W"
  }, 
  {
  title: "Heater 3",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3", 
  id: "E"
  }, 
  {
   title: "Heater 4",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3", 
  id: "A"
  }, 
  {
  title: "Clap",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3", 
  id: "S",
  }, 
  {
  title: "Open-HH",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3", 
  id: "D"
  }, 
  {
  title: "Kick-n'-Hat",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3", 
  id: "Z"
  }, 
  {
  title: "Kick",
  src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3", 
  id: "X"
  }, 
  {
  title: "Closed-HH",
  src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3", 
  id: "C"
  }
  
  ]

function playDrum(song) {
  if (song) {
    displayText.textContent = song.title; 
  }
}

drumPad.forEach(function(drum){
 
  const song = drumAudio.find(function(item){
    return drum.id.toUpperCase() === item.id;
  }); 
  drum.addEventListener("click", function(){
     const audio = drum.querySelector(".clip")
    audio.currentTime = 0;
    audio.play();
    playDrum(song);
  })
}); 

document.addEventListener("DOMContentLoaded", function() {
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  
  document.body.addEventListener("click", function() {
    document.body.focus();
  });
});

document.addEventListener("keydown", function(e) {
  const key = e.key.toUpperCase();
  
  drumPad.forEach(function(drum) {
    if (key === drum.innerText.trim()) {
      const audio = drum.querySelector(".clip");
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        const song = drumAudio.find(function(item) {
          return key === item.id;
        });
        playDrum(song);
      }
    }
  });
});
