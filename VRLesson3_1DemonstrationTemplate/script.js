let size = true;
window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.getElementById("myBox")
  myBox.addEventListener("click",function(){
    console.log(this);
    this.setAttribute("scale","2 2 2");
  })
  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("color","red");
  })
  myBox.addEventListener("mouseleave",function(){
    this.setAttribute("color","white");
  })

})
