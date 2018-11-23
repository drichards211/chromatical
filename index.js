'use strict'

let userFormInput = ""
let activePianoKey = "none"
let menuActive = false
let pianoHorizontal = true
let bodyColor = "bg-grey"


function handleFormInput() {
  /* Listens for user search-form submission, */
  console.log('handleFormInput() running')
  $('.search-form').submit(event => {
    event.preventDefault()
    userFormInput = $('#search-term').val()
    if (userFormInput === "") {
      alert('Please enter a search term')
    } else {
      console.log(`User searched for string "${userFormInput}"`)
      logoSpin()
      updateSearchParams(userFormInput)  
      const APIList = ["wikipedia", "youtube", "google", "itunes",] /* "spotify", "tastedive", "ticketmaster",] */
      for (let i = 0; i < APIList.length; i++) {
        fetchAPIData(APIList[i], userFormInput)
      }
    }
  })

function updateSearchParams(searchInput) {
  /* Updates APIInfo object (inside fetch-api.js) with user search string */
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
  /* Spin the B&W logo for 2 seconds, fade out. Call colorizePianos() */
  console.log("logoSpin() ran")
  $("#piano-bw").addClass("spin-me")
  $('.fade-out-logo').fadeOut(2600)
  setTimeout(function() {
    colorizePiano() /*(in piano.js)*/
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
      colorizePiano()
    }, 2300)
} */


/* PIANO BUTTONS, COLORS, AND SOUNDS ============================== */

function renderNewContent(apiName) {
/* updates main container with selected API data */
  console.log(`renderNewContent("${apiName}") ran`)
  let response = responseData[apiName]
  $('.results-container').empty()
 
  if (apiName === "wikipedia") {
    console.log("Rendering wikipedia API data")
    if (response.query.pageids[0] === "-1") {
      $('.results-container').append(
        `<p>No encyclopedia results are available for your search term.</p>`)
    } else {
      let pageID = response.query.pageids[0]
      let thumbnail = response.query.pages[pageID].thumbnail.source
      let original = response.query.pages[pageID].original
      let pageImage = response.query.pages[pageID].pageimage
      let extract = response.query.pages[pageID].extract
      $('.results-container').append(`${extract}`)
    }
  }
  if (apiName === "youtube") {
    console.log("Rendering youtube API data")
    for (let i = 0; i < response.items.length; i++){
      $('.results-container').append(
        `<li><h3>${response.items[i].snippet.title}</h3>
        <p>${response.items[i].snippet.description}</p>
        <img src='${response.items[i].snippet.thumbnails.default.url}'>
        </li>`)
    }
  }
  if (apiName === "google") {
    console.log("Rendering google API data")
    let resultsHtml = ""
    for (let i = 0; i < response.items.length; i++) {
      resultsHtml += `<a href=${response.items[i].link} target="_blank"><img src="${response.items[i].image.thumbnailLink}" alt="Google image thumbnail ${i}" class="googleImg"></a>`
    }
    $('.results-container').append(
      `<div class="googleResults">${resultsHtml}</div>`
    )
  }
  if (apiName === "itunes") {
    console.log("Rendering itunes API data")
    let numResults = responseData.itunes.results.length
    for (let i = 0; i < numResults; i++) {
      $('.results-container').append(
        `<img src="${response.results[i].artworkUrl100}" alt="album thumbnail" class="itunesImg">
        <a href=${response.results[i].trackViewUrl} target="_blank">${response.results[i].trackName}</a>
        <a href=${response.results[i].artistViewUrl} target="_blank">${response.results[i].artistName}</a> 
        <a href=${response.results[i].collectionViewUrl} target="_blank">${response.results[i].collectionName}</a>`  
      )
    }
  }
  if (apiName === "spotify") {
    console.log("Rendering spotify API data")
    $('.results-container').append(
      `<p>This feature is currently under development.</p>`
    )
  }
  if (apiName === "tastedive") {
    console.log("Rendering tastedive API data")
    $('.results-container').append(
      `<p>This feature is currently under development.</p>`
    )
  }
  if (apiName === "ticketmaster") {
    console.log("Rendering ticketmaster API data")
    $('.results-container').append(
      `<p>This feature is currently under development.</p>`
    )
  }
}

$(function() {
  handleFormInput()
  listenPianoTouch()
  renderPiano()
  hidePiano()
})