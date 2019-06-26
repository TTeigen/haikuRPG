//object currentlocation

let currentLocation;
let totalLocations = 0;

function Chapter(name){
  this.name = name;
}

let ch1 = new Chapter("pond");

function bringUpMap(){
//user => setLocation();
}

function setLocation(location){
  currentLocation = location;
  //bringUpLocation();
}

function bringUpLocation(location){
  //shows background
}

function inputHaiku(){
  //have check here to see if it is valid
  //transition ghost
  //closing process => offer closelocation to front end
  closeLocation();
}

function closeLocation(){
  //if totallocations > gameEndCount
  currentLocation = false;
  //bringUpMap();
}

function bringUpFinalScreen(){

}

setLocation(ch1);
bringUpLocation(ch1);
inputHaiku(haiku);
