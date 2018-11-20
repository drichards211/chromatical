'use strict'

let userFormInput = ""
let activePianoKey = "none"
let menuActive = false
let pianoHorizontal = true
let bodyColor = "bg-grey"


function handleFormInput() {
  $('.search-form').submit(event => {
    event.preventDefault()
    logoSpin()
    userFormInput = $('#search-term').val()
    updateSearchParams(userFormInput)  
    console.log(userFormInput)
    const APIList = ["wikipedia", "youtube", /* "itunes", "google",*/]// "spotify",]   "tastedive", "ticketmaster",]
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
  //Fade circle piano
  console.log("logoSpin ran")
  $("#piano-bw").addClass("spin-me")
  $('.fade-out-logo').fadeOut(2600)  /* .delay(2800).promise().done(colorizePianos()); */
  setTimeout(function() {
    console.log("setTimeout ran")
    colorizePianos()
  }, 2300)
}

function addPianoLinks() {
  // add new <div> with code for buttons and labels. include class to style the text white with black stroke and shadow.
  // is it possible to fade these labels in the same way as the colors in colorizePiano()?

}

/* function fadeOut() {
  //Fade circle piano
    $("#piano-bw").addClass("spin-me")
    $('.fade-out-logo').fadeOut(2600)
    setTimeout(function() {
      console.log("setTimeout ran")
      colorizePianos()
    }, 2300)
} */

/* PIANO BUTTONS, COLORS, AND SOUNDS ============================== */


function pianoKeysUpdate() {
  // not sure what this is yet. maybe if it needs new links?
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

  

$(function() {
  handleFormInput()
  listenPianoTouch()
  preLoadAudio()
  movePiano()
})


