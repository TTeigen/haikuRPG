import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setLocation, submitHaiku, getLocation, removeLocation } from './gameManager';
// import { Constructor-Name } from './backend-code';
let currentLocationFrontEnd;
$(function() {

  $("#chooseLocation").click(function(event){
    setLocation(0);
    currentLocationFrontEnd = getLocation();
    //close map
    $(".mapScreen").hide();
    //bring up location

    bringUpLocation(currentLocationFrontEnd);
  });

  $(".haikuInput").submit(function(event){
    event.preventDefault();
    let line1 = $("input#line1").val();
    let line2 = $("input#line2").val();
    let line3 = $("input#line3").val();
    let haiku = [line1, line2, line3];
    submitHaiku(haiku);

    //check if haiku is legit
    //empty values
    $("input#line1").val("");
    $("input#line2").val("");
    $("input#line3").val("");
    //close form
    $(".haikuInput").hide()
    ghostProceedings(currentLocationFrontEnd);
  });

  $("#backToMap").click(function(event){
    //put all this in "close location"
    currentLocationFrontEnd = null;
    removeLocation();
    $(".narrative").hide();
    $(".haiku2").hide();
    $(".haiku1").hide();
    $(".narrative").text("");
    $(".haiku2").text("");
    $(".haiku1").text("");
    $(".location").hide();
    //hide button
    $("#backToMap").hide();
    //show map
    showMap();

  });


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
  //bring up map
  $(".mapScreen").show();

}

function closeMap(){
  //hide map
  //bringuplocation
}

function bringUpLocation(currentLocation){
  //do a bunch of stuff in html
  //figure out how to set background location css in js
  //set background image of location
  //show location
  $(".location").show();
  $(".haikuInput").show();
  //show introNarrative
  $(".narrative").show();
  $(".narrative").text(currentLocation.introNarrative + " " + currentLocation.ghostHaiku[0]);
}

function ghostProceedings(currentLocation){
  $(".haiku2").show();
  $(".haiku1").show();

  $(".haiku2").text(currentLocation.ghostHaiku[0] + "\n" + currentLocation.ghostHaiku[1] + "\n" + currentLocation.ghostHaiku[2]);

  $(".haiku1").text(currentLocation.playerHaiku[0] + "\n" + currentLocation.playerHaiku[1] + "\n" + currentLocation.playerHaiku[2])
  //diplay ghost interlude
  //put master haiku in haiku2
  //display button for back to map or whatever
  $("#backToMap").show();
}


//to do LIST:

//figure out how to set background location css in js
