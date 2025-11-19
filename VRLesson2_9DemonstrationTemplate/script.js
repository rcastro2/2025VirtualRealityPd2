 let maze = [
    "----xxxxxxxxxxxxxxx--------",
    "----x-------------x-----",
    "----x----ttt--ttt-------x-----",
    "-----x------------x-----",
    "-----x------------x-----",
    "-----x------------x-----",
    "-----x-----ttt-------x-----",
    "-----x------------x-----",
    "-----x-----------x------",
    "-----xxxxxxxxxxxx-----------------",
    "----------------------",
    "----------------------",
  ];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < maze.length; i++){
    let row = maze[i];
    for(let j = 0; j < row.length; j++){
      let c = row.substring(j,j+1);
      if( c == "x"){
        new Block(i * 2, 1, j*2);
      }else if(c == "t"){
        new Tree(i*1.5, 1, j*2);
      }



    }

  }

})