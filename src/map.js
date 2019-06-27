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
  let location1 = new MapObject(0, "https://www.pngfind.com/pngs/m/53-532483_free-png-frog-png-images-transparent-frog-no.png");
  map.push(location1);

let location2 = new MapObject(1, "https://banner2.kisspng.com/20171212/4ac/flying-the-crows-5a30ad7f638ad2.3692298115131395834077.jpg");
map.push(location2);

let location3 = new MapObject(2, "http://pngimg.com/uploads/moon/moon_PNG46.png");
map.push(location3);

let location4 = new MapObject(3, "http://pngimg.com/uploads/snails/snails_PNG13216.png");
map.push(location4);

let location5 = new MapObject(4, "https://banner2.kisspng.com/20180402/wce/kisspng-pixar-luxo-jr-lamp-logo-pixar-5ac293ffbeddd5.0247002215227013117818.jpg");
map.push(location5);


//reference matches array index of chapters and map position

//IF YOU HAVE MORE MAP OBJEcTS THAT CHAPTERS IT CRASHES
