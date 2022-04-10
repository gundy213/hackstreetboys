
function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "click.mp3";
 }
}

else {
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}

$(document).ready(function() {
    $('form').on('submit', function(e){
    e.preventDefault();
    var x = Math.floor((Math.random() * 5) + 1);
    var sound = new Audio();
  switch (x) {
    case 1:
         sound.src = "sounds/sound1.mp3";
         break;
    case 2:
         sound.src = "sounds/sound2.mp3";
         break;
    case 3:
         sound.src = "sounds/sound3.mp3";
         break;
    case 4:
         sound.src = "sounds/sound4.mp3";
         break;
    case 5:
         sound.src = "sounds/sound5.mp3";
         break;
  }
    sound.play()
    });
  });
  