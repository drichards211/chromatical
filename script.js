'use strict'

let userFormInput = ""

function handleFormInput() {
  $('.search-form').submit(event => {
    event.preventDefault();
    userFormInput = $('#search-term').val()
    updateSearchParams(userFormInput)  
    console.log(userFormInput)
    const APIList = ["wikipedia", "youtube", "itunes", "google",]// "spotify",]   "tastedive", "ticketmaster",]
    for (let i = 0; i < APIList.length; i++) {
      fetchAPIData(APIList[i], userFormInput)
    }
  })

function updateSearchParams(searchInput) {
  APIInfo.youtube.searchParams.q = searchInput
  APIInfo.wikipedia.searchParams.titles = searchInput  
  APIInfo.itunes.searchParams.term = searchInput
  APIInfo.google.searchParams.q = searchInput
  APIInfo.spotify.searchParams.q = searchInput
}

  /*   
 // listen for form submit, update userFormInput value, run all fetchAPI() functions. When results are positive, pass arguments to updatePianoKeys()
 // spin the Chromatical logo using CSS for a second or two while API calls are happening... can even use the promise to
 // stop the logo spin once data is available.
  })  */

  // call function logoSpin()
  // call function addPianoLinks() and colorizePiano()
}

function logoSpin() {
  // spin the B&W logo for 2 seconds, fade to blank, fade-in colorized logo which remains until a user selects a piano key
  // which will update the DOM with new content.
}

function addPianoLinks() {
  // add new <div> with code for buttons and labels. include class to style the text white with black stroke and shadow.
  // is it possible to fade these labels in the same way as the colors in colorizePiano()?

}

function colorizePiano() {
  // update each key with a new background (add css IDs). 
  // css should be set with background invisible or at 0% opacity.
  // fade-in each at a different rate so that the far left key
  // colors-in first, and the far-right last.
  // borrow code from ST quiz app for fade-in
}

function pianoKeysUpdate() {
  // not sure what this is yet. maybe if it needs new links?
}

function listenPianoTouch(){
// when users click piano buttons, call renderNewContent() with appropriate argument.  
  $("#piano").on('click', '#C', function(event) {
    console.log("piano key C pressed")
  })
  $("#piano").on('click', '#Db', function(event) {
    console.log("piano key Db pressed")    
  })
  $("#piano").on('click', '#D', function(event) {
    console.log("piano key D pressed")
    renderNewContent("youtube")        
  })
  $("#piano").on('click', '#Eb', function(event) {
    console.log("piano key Eb pressed")    
  })
  $("#piano").on('click', '#E', function(event) {
    console.log("piano key E pressed")    
  })
  $("#piano").on('click', '#F', function(event) {
    console.log("piano key F pressed")    
  })
  $("#piano").on('click', '#Gb', function(event) {
    console.log("piano key Gb pressed")    
  })
  $("#piano").on('click', '#G', function(event) {
    console.log("piano key G pressed")    
  })
  $("#piano").on('click', '#Ab', function(event) {
    console.log("piano key Ab pressed")    
  })
  $("#piano").on('click', '#A', function(event) {
    console.log("piano key A pressed")    
  })
  $("#piano").on('click', '#Bb', function(event) {
    console.log("piano key Bb pressed")    
  })
  $("#piano").on('click', '#B', function(event) {
    console.log("piano key B pressed")    
  })
    
  
}

// updates main container with new API data
function renderNewContent(apiName) {
  console.log(`renderNewContent ran, ${apiName}`)
  console.log(responseData[apiName])
  let response = responseData[apiName]
  console.log(response);
  $('.results-container').empty();
  // if (apiName === wikipedia) {
  // do this thing
  // }
  if (apiName === "youtube") {
  // iterate through the items array
    for (let i = 0; i < response.items.length; i++){
  // for each video object in the items 
  //array, add a list item to the results 
  //list with the video title, description,
  //and thumbnail
      $('.results-container').append(
        `<li><h3>${response.items[i].snippet.title}</h3>
        <p>${response.items[i].snippet.description}</p>
        <img src='${response.items[i].snippet.thumbnails.default.url}'>
        </li>`
      )};
    //display the results section  
    $('#results').removeClass('hidden');
  }
}



function resetPianoKeys() {
  // remove all links
}
function updatePianoKeys() {
  // push new clickable button html data to piano keys corresponding with received arguments.
  // example:
  /* function foo() {
    for (var i = 0; i < arguments.length; i++) {
      $("p").append(`Some appended html ${i} plus some more html`);
    }
  } */
}

// AN EXPERIMENT
/* function resizeKeyboard() {
  $(".p-wrapper").css({
      height:$(window).height(),
      width:$(window).width()
  });
}
$(function() { resizeKeyboard(); });
$(window).resize(function() { resizeKeyboard(); });
 */


var windowHeight = $(window).height();
var windowWidth = $(window).width();
  $('#footer').scrollTop(($('#p-wrapper').height()/2)-(windowHeight/2));
  $('#footer').scrollLeft(($('#p-wrapper').width()/2)-(windowWidth/2));

/* Hide Piano Tray when scrolling */
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50){
      $('#centered').addClass("hidden");
    } else {
      $('#centered').removeClass("hidden");
    }
});
});  


/* $(document).scroll(function() {
    $('#p-wrapper').toggle($(this).scrollTop() > 1);
}); */

/* $(document).scroll(function() {
  $('p').toggleClass($("hidden").scrollTop() > 1);
});
 */

/* This Works */
/* $(document).ready(function(){
  $(document).scroll(function(){
      $("p").toggleClass("hidden").scrollTop() > 10
  });
});
 */
/* $('#p-wrapper').css('display','none');
$( "#p-wrapper" ).toggleClass( "hidden" ) */

/* $("header").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
 */
$(function() {
  handleFormInput()
  listenPianoTouch()  
})

