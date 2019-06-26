//object currentlocation

let currentLocation;
let totalLocations = 0;
let chapters  = [];

let chapter1 = new Chapter()

function Chapter(name){
  this.name = name;
}

function setLocation(location){
  currentLocation = location;
  //bringUpLocation();
}
//

// }

function submitHaiku(){
  //run haikuChecker?
  //sets playerhaiku

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
