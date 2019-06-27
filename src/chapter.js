export function Chapter(name, img, ghostName, ghostHaiku, introNarrative){
  this.name = name;
  this.img = img;
  this.ghostName = ghostName;
  this.ghostHaiku = ghostHaiku;
  this.introNarrative = "You find yourself approaching..."
  //ghost intro
  if (introNarrative){
    this.introNarrative = introNarrative;
  }
}


Chapter.prototype.setHaiku = function(haiku){
  this.playerHaiku = haiku;
}

Chapter.prototype.toString = function(){
  return (this.name + this.ghostName + currentLocation.ghostHaiku[0] +  currentLocation.ghostHaiku[1] +  currentLocation.ghostHaiku[2] + this.introNarrative);
}


//map object, beenThere flag, chapter, location on screen, thumbnail
