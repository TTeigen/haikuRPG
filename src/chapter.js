function Chapter(name, img, ghostName, line1, line2, line3, introNarrative){
  this.name = name;
  this.img = img;
  this.ghostName = ghostName;
  this.line1 = line1;
  this.line2 =line2;
  this.line3 = line3;
  this.introNarrative = "You find yourself approaching..."
  //ghost intro
  if (introNarrative){
    this.introNarrative = introNarrative;
  }
}

let ch1 = new Chapter ("Pond", "file.name", "Matsuo Basho", "An old silent pond...", "A frog jumps into the pond,","splash! Silence again.");


Chapter.prototype.setHaiku = function(haikuArray){
  this.haikuArray = haikuArray;
}

Chapter.prototype.toString() = function(){
  return (this.name + this.ghostName + this.line1 + this.line2 + this.line3 + this.introNarrative);
}

//map object, beenThere flag, chapter, location on screen, thumbnail
