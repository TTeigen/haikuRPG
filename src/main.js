import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gameManager';
// import { Constructor-Name } from './backend-code';

$(function() {

  $("#chooseLocation").click(function(event){
    gameManager.setLocation(1);
    //close map
    //bring up location
  });

  $(".haikuInput").submit(function(event){
    event.preventDefault();
    let line1 = $("input#line1").val();
    let line2 = $("input#line2").val();
    let line3 = $("input#line3").val();
    let haiku = [line1, line2, line3];
    gameManager.submitHaiku(haiku);

    //check if haiku is legit
    //empty values
    $("input#line1").val("");
    $("input#line2").val("");
    $("input#line3").val("");

    //do ghost stuff
  });

  $("#backToMap"){
    //in backend: set location to nothing
    //hides location
    //show map screen
  }
  //submit: get value of three fields, check if haiku, backEnd: submithaiku
  //display your haiku on image,
  //then ghost shows up, with ghost poem,
  //then next location button


  //nextlocationButton: backend.closeLocation
  //close out all this stuff
  //bringUpMap()

  //backEnd.setLocation();
  //display location stuff--getting values from backend
});

function showMap(){
  //hide location bring up map
}

function closeMap(){
  //hide map
  //bringuplocation
}

function bringUpLocation(){
  //do a bunch of stuff in html
  //set background image of location
  //show form
  //show introNarrative
}

function ghostProceedings(){
  //put player haiku in haiku1--getting from chapter from backend
  //diplay ghost interlude
  //put master haiku in haiku2
  //display button for back to map or whatever
}


//to do LIST:

//figure out how to set background location css in js
