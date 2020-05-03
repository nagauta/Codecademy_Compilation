function PlayAudio(sound){
  sound.play();
};

window.onload = function(){
  var Chomolungma= document.getElementById('Chomolungma')
  var sound = new Howl({
    src: [Chomolungma.src],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });
  document.getElementById('btnRec').onclick = PlayAudio(sound);

};
