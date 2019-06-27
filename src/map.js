// Chapter Info/Reference
// Visited
// Thumbnail Img
// Position


let map = [];

export function getMapObjectByRef(ref){
  for(let i = 0; i < map.length; i++){
    if (map[i].reference === ref){
      return map[i]; //returns map object
    }
  }
  throw "there is no map object with the reference given";
}

export function getMap(){
  return map;
}

function MapObject (reference, thumbnail) {
  this.reference = reference;
  this.thumbnail = thumbnail;
  this.visited = false;
}

MapObject.prototype.setCompleted = function () {
  this.visited = true;
};

MapObject.prototype.toString = function(){
  return this.reference + " " +  this.thumbnail + " " + this.visited;
}

// let location1 = new MapObject (0, "https://www.thepondoutlet.com/shop/images/3144_uploaded.jpg")
// map.push(location1);
for(let i = 0; i < 15; i++){
  let location = new MapObject(i, "https://www.thepondoutlet.com/shop/images/3144_uploaded.jpg");
  map.push(location);
}

//reference matches array index of chapters and map position
