import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setLocation, submitHaiku, getLocation, removeLocation } from './gameManager';
import {getMap, getMapObjectByRef} from './map';
import { isHaiku } from './haikuChecker';
// import { Constructor-Name } from './backend-code';
let currentLocationFrontEnd;
let clientMapLocation;
$(function() {
  showMap();
  $(".haiku1").hide();
  $(".haiku2").hide();
  $(".location").hide();
  //$(".narrative").hide();

  $(".haikuInput").submit(function(event){
    event.preventDefault();
    let line1 = $("input#line1").val();
    let line2 = $("input#line2").val();
    let line3 = $("input#line3").val();
    let haiku = [line1, line2, line3];

    //check if haiku is legit
    if (isHaiku(haiku)) {
      submitHaiku(haiku);
      //close form
      $(".haikuInput").hide()
      ghostProceedings(currentLocationFrontEnd);
    } else {
      $(".judgement").show();

      //override button or form input
    }

  });

  $("#backToMap").click(function(event){
    //put all this in "close location"
    currentLocationFrontEnd = null;
    removeLocation();
    $(".scene").removeClass('scene' + clientMapLocation.reference);
    $(".narrative").hide();
    $(".haiku2").hide();
    $(".haiku1").hide();
    $(".narrative").text("");
    $(".haiku2").text("");
    $(".haiku1").text("");
    $(".location").hide();
    //hide button
    $("#backToMap").hide();
    //empty values
    $("input#line1").val("");
    $("input#line2").val("");
    $("input#line3").val("");
    $(".judgement").hide();
    //show map
    showMap();

  });
});

function showMap(){
  //bring up map
  $(".mapScreen").show();
  let map = getMap();
  map.forEach(function(mapSpot){
    //$("#locations").append("<li value = " + mapSpot.reference + ">" + mapSpot.toString() + "</li>");
    $("#locations").append("<li class = 'mapImage' value = " + mapSpot.reference + "><img src='" + mapSpot.thumbnail + "'></li>");
    //dont know IF PROTYTP{E OF } PBJECT PASSED WITHOUT IMPORT
  });
  document.getElementById("locations").addEventListener("click",function(e) {
        if(e.target && e.target.parentNode.nodeName == "LI") {
          console.log(e.target.parentNode.value);
          chooseLocation(getMapObjectByRef(e.target.parentNode.value));
          closeMap();
        }
    });
}

function closeMap(){
  $(".mapScreen").hide();
  $("#locations").html("");
}

function chooseLocation(mapLocation){
  //these will match
  clientMapLocation = mapLocation;
  setLocation(clientMapLocation.reference);
  currentLocationFrontEnd = getLocation();
  bringUpLocation(currentLocationFrontEnd);

}

function bringUpLocation(currentLocation){
  $(".location").show();
  $("#backToMap").show();
  $(".haikuInput").show();
  $(".narrative").show();
  $(".scene").addClass('scene' + clientMapLocation.reference);
  $(".narrative").text(currentLocation.introNarrative + " " + currentLocation.ghostHaiku[0]);
  if (currentLocation.playerHaiku) {
    ghostProceedings(currentLocation);
    $(".haikuInput").hide();
    $(".narrative").hide();
  }
}

function ghostProceedings(currentLocation){
  clientMapLocation.setCompleted();
  $(".haiku2").text(currentLocation.ghostHaiku[0] + "\n" + currentLocation.ghostHaiku[1] + "\n" + currentLocation.ghostHaiku[2]);

  $(".haiku1").text(currentLocation.playerHaiku[0] + "\n" + currentLocation.playerHaiku[1] + "\n" + currentLocation.playerHaiku[2]);

  placeHaiku();


  setTimeout(function(){
    $(".haiku1").fadeIn();
  }, 500);
  setTimeout(function(){
    $(".haiku2").fadeIn();
  }, 1000);

}
function placeHaiku(){ //inherit values from location
  let haiku1query = document.querySelector(".haiku1");
  let haiku2query = document.querySelector(".haiku2");
       haiku1query.style.top = currentLocationFrontEnd.haikuPositions[0] + 'px';
       haiku1query.style.left = currentLocationFrontEnd.haikuPositions[1] + 'px';

       haiku2query.style.top = currentLocationFrontEnd.haikuPositions[2] + 'px';
       haiku2query.style.left = currentLocationFrontEnd.haikuPositions[3] + 'px';



}

//to do LIST:

//figure out how to set background location css in js
//hide narrative show 'ghost approaching' after submit
//give different locations for text
