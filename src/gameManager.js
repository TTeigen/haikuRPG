import {Chapter} from './chapter';
//object currentlocation

let currentLocation;
let totalLocations = 0;
let chapters  = [];
let masterHaiku = ["An old silent pond...", "A frog jumps into the pond,","splash! Silence again."]
for(let i = 0; i < 15; i++){
  let ch = new Chapter ("Pond", "file.name", "Matsuo Basho", masterHaiku);
  chapters.push(ch);
}

export function setLocation(location){
  currentLocation = chapters[location];
  //bringUpLocation();
}
//

// }

export function submitHaiku(haiku){
  //run haikuChecker?
  //sets playerhaiku
  currentLocation.setHaiku(haiku);
}

export function removeLocation(){
  //if totallocations > gameEndCount
  currentLocation = false;
  //bringUpMap();
}

export function getLocation() {
  return currentLocation;
}
