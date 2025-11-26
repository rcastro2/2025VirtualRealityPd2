let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene,x = 60, time_text, one_ball;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  time_text = this.document.querySelector("#time_text");

  one_ball = new Ball(2,2,2);
  timer();
  loop();
})
function loop(){
  one_ball.move();
  window.requestAnimationFrame(loop);
}

function timer(){
  x--;
  console.log(x)
  time_text.setAttribute("value",x);
  window.setTimeout(timer, 1000);
}
