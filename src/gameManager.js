import {Chapter} from './chapter';
//object currentlocation

let currentLocation;
let totalLocations = 0;
let chapters  = [];
let masterHaiku1 = ["An old silent pond...", "A frog jumps into the pond,","splash! Silence again."]
let ch1 = new Chapter ("Pond", "https://backgrounddownload.com/wp-content/uploads/2018/09/journal-page-background-3.jpg", "Matsuo Basho", masterHaiku1, 250, 450, 100, 300);


let masterHaiku2 = ["The crow has flown away:", "swaying in the evening sun,","a leafless tree."]
let ch2 = new Chapter ("Word", " https://www.publicdomainpictures.net/pictures/190000/nahled/tree-silhouette-in-nature.jpg", "Matsuo Basho", masterHaiku2, 500, 200, 300, 300);

let masterHaiku3 = ["Light of the moon", "Moves west, flowers' shadows","Creep eastward."]
let ch3 = new Chapter ("Pond", "https://www.publicdomainpictures.net/pictures/190000/nahled/tree-silhouette-in-nature.jpg", "Yosa Buson", masterHaiku3, 250, 450, 100, 300);

let masterHaiku4 = ["O snail", "Climb Mount Fuji,","But slowly, slowly!"]
let ch4 = new Chapter ("Pond", " http://1.bp.blogspot.com/-7E9oXQ6RqbQ/TwTpsnKodQI/AAAAAAAAECM/Icd7dpj8p_E/s1600/img945.jpg", "Kobayashi Issa", masterHaiku4, 250, 450, 100, 300);

let masterHaiku5 = ["The lamp once out", "Cool stars enter","The window frame."]
let ch5 = new Chapter ("Pond", "https://data.whicdn.com/images/316634574/large.jpg", "Natsume Soseki", masterHaiku5, 250, 450, 100, 300);

chapters.push(ch1);
chapters.push(ch2);
chapters.push(ch3);
chapters.push(ch4);
chapters.push(ch5);

export function setLocation(location){
  currentLocation = chapters[location];
  //bringUpLocation();
}
//

// }

export function submitHaiku(haiku){
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
