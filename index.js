// button detector
for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
var buttoninnerHTML= this.innerHTML ;
makeSound(buttoninnerHTML) ;
buttonAnimation(buttoninnerHTML) ;
});
}
// key detector added on entire document
document.addEventListener("keydown",function (event){
  var press= event.key ;
  makeSound(press) ;
  buttonAnimation(press) ;
});
//sound maker
function makeSound(key) {
  switch (key.toLowerCase()) {
    case "w" :
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "a" :
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "s" :
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "d" :
      var tom4 = new Audio(".mp3");
      tom4.play();
      break;
    case "j" :
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "k" :
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "l" :
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey.toLowerCase()) ;
  activeButton.classList.add("pressed");
  setTimeout(function(){
  activeButton.classList.remove("pressed");
  },100);
}
