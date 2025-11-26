let scene, mechTemplate, robo;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech");
  robo = new Mech( -10, 13, 0);
 
  loop();
})
function loop(){

  robo.rise();
  window.requestAnimationFrame( loop );
}
