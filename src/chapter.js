export function Chapter(name, img, ghostName, ghostHaiku, playerYPosition, playerXPosition, ghostYPosition, ghostXPosition, introNarrative){
  this.name = name;
  this.img = img;
  this.ghostName = ghostName;
  this.ghostHaiku = ghostHaiku;
  this.introNarrative = "You find yourself approaching...";
  //haiku position determined in order of Player's haiku top margin, left margin and then ghost's haiku top margin, left margin
  this.haikuPositions = [playerYPosition, playerXPosition, ghostYPosition, ghostXPosition];

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
