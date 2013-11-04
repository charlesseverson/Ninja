var gText: GUIText; // drag here the GUIText from Hierarchy view
var timer: float = 180;

function Update(){
  timer -= Time.deltaTime;
  if (timer < 0) {
  	
  	timer = 0; // clamp the timer to zero
  	Application.LoadLevel("lvl2n");
  	}
  
  var seconds: int = timer % 60; // calculate the seconds
  var minutes: int = timer / 60; // calculate the minutes
  gText.text = minutes + ":" + seconds;
}