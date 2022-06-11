var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrumButtons;i++)
{

//adding event listener for mouse clicks
  document.querySelectorAll("button")[i].addEventListener("click",function(){

      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

      var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      animate(buttonInnerHTML);
  });
}


//adding event listener when a key is pressed on keyboard
document.addEventListener("keypress", function(event){
  playSound(event.key);
  animate(event.key);
})


//playing sound when a button is pressed
function playSound(buttonInnerHTML)
{
        switch (buttonInnerHTML)
        {
          case "d":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
          case "f":
            var kick = new Audio("sounds/tom-3.mp3");
            kick.play();
            break;
          case "g":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
          case "h":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
          case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
          case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
          case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
          default:
        }
}


//animation for pressing a button
function animate(buttonInnerHTML)
{
  var activateButton = document.querySelector("."+buttonInnerHTML);
  activateButton.classList.add("pressed");

  setTimeout(function(){
    activateButton.classList.remove("pressed")
  },.150);
}
