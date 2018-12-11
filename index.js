'use strict'

let userFormInput = ""

function handleUserNav() {
/* Handles navigation buttons outside the piano menu */
  console.log("handleUserNav() runnning")
  $('#chromatical').click(function(event) {
    event.preventDefault()
    let buttonID = `${$(this).prop('id')}`
    if (buttonID === "chromatical") {
      console.log("Chromatical title clicked")
      renderMiniBanner()
      renderNewContent("chromatical")
    }
  })
  $('#home-button').click(function(event) {
  /* Resets app appearance and behavior to initial state */  
    event.preventDefault()
    console.log("Home button clicked")
    renderHomePage()
  })
  $('#search-term').focus(function(event){
  /* Hides searchbox marquee */
    event.preventDefault()
    console.log('Hiding marquee')
    $('#marquee-text').addClass('hidden')
  })
}

function handleFormInput() {
  /* Listens for .search-form submission, */
  console.log('handleFormInput() running')
  $('.col-12 .search-form').submit(event => {
    event.preventDefault()
    console.log('.search-form submission detected')
    if (userFormInput !== "") {
    /* Reset appearance if user performs sequential searches on the home page */
      showPianoLogo()
      resetPianoKeys() 
    }
    userFormInput = $('#search-term').val()
    if (userFormInput === "") {
      alert('Please enter a search term')
    } else {
      performSearch(userFormInput)
    }
  })
  /* Listens for .search-form-mini submission, */
  $('.col-12 .search-form-mini').submit(event => { 
      event.preventDefault()
      console.log('.search-form-mini submission detected')
      userFormInput = $('#search-term').val()
      if (userFormInput === "") {
        alert('Please enter a search term')
      } else {
        showPianoLogo()
        resetPianoKeys() /*in piano.js*/
        renderBorder("hide")
        performSearch(userFormInput)
      }
    })
}

function performSearch(searchInput) {
  console.log("performSearch() running")
  console.log(`User searched for string "${searchInput}"`)
  console.log("Resetting API responseData")
  responseData = {}
  logoSpin()
  updateSearchParams(searchInput)  
  const APIList = ["wikipedia", "youtube", /* "google", */ "itunes",] /* "spotify", "tastedive", "ticketmaster",] */
  for (let i = 0; i < APIList.length; i++) {
    fetchAPIData(APIList[i], searchInput) /*in fetch-api.js*/
  }
}

function updateSearchParams(searchInput) {
/* Updates APIInfo object (in fetch-api.js) with user search string */
  APIInfo.youtube.searchParams.q = searchInput
  APIInfo.wikipedia.searchParams.titles = searchInput  
  APIInfo.itunes.searchParams.term = searchInput
  APIInfo.google.searchParams.q = searchInput
  APIInfo.spotify.searchParams.q = searchInput
}

function logoSpin() {
/* Spin the B&W piano logo for 2 seconds, fade out. Call colorizePiano() */
  console.log("logoSpin() ran")
  $("#piano-bw").addClass("spin-me")
  $('.fade-out-logo').fadeOut(2600)
  setTimeout(function() {
    $(".piano-circle").html(`<img src="./assets/images/piano-circle-color-2.png" alt="circle piano logo" id="piano-bw" class="fade-in-logo" style="display:none">`)
    $(".fade-in-logo").fadeIn(1600).delay(300).fadeOut(2000)
    colorizePiano(1600, 2000, 2100) /*in piano.js*/
  }, 2300)
}

function showPianoLogo() {
  console.log("showPianoLogo() running")
  $('.results-container').html(
    `<div class="piano-circle">
    <img src="./assets/images/piano-circle-bw.png" alt="circle piano logo" id="piano-bw" class="fade-out-logo">
  </div>`
  )
  $('#mini-piano-button').html(`
    <input type="image" id="hide-piano" class="hidden" src="assets/images/mini-piano-menu-bw.png"/>`
  )
}

function renderMiniBanner() {
/* Adds html for mini-search banner */
  console.log("renderMiniBanner() ran")
  $('#banner').html(`
    <div class="mini-banner">
      <fieldset> 
        <div class="mini-logo">
          <a href="#" id="home-button">
            <img src="./assets/images/piano-circle-bw.png" alt="mini circle piano logo" id="piano-bw-mini" class="shadow-${activePianoKey}">
          </a>
        </div>
        <form action="#" class="search-form-mini">
          <label for="query"></label>
          <label><input type="text" id="search-term" class="js-query" value="${userFormInput}"></label>
        </form>
      </fieldset>
      <br>
      <br>
    </div>`)
  handleFormInput()
  handleUserNav()
}

function renderHomePage() {
/* Resets app appearance and behavior to initial state */
  console.log("renderHomePage() ran")
  userFormInput = ""
  $('#banner').html(`
    <a href="#" id="chromatical"><h1>Chromatical</h1></a>
    <fieldset> 
      <form action="#" class="search-form">
          <label for="query"></label>
          <label>
            <div class="floating-marquee">
            <marquee behavior="scroll" direction="left"><span id="marquee-text">Search for an artist,&nbsp album or song title.</span></marquee>
            </div>
            <input type="text" id="search-term" class="js-query">
          </label>
      </form>
    </fieldset>`)
  $('.results-container').html(`
    <div class="piano-circle">
      <img src="./assets/images/piano-circle-bw.png" alt="circle piano logo" id="piano-bw" class="fade-out-logo">
    </div>`)
  renderBorder("hide")
  resetPianoKeys() /*in piano.js*/
  handleUserNav()
  handleFormInput()
}

function renderNewContent(apiName, noteID) {
/* updates .results-container with selected API data */
  console.log(`renderNewContent("${apiName}") ran`)
  let response = responseData[apiName]
  $('.results-container').empty()
  renderBorder()

  if (apiName === "chromatical") {
    renderBorder("hide")
    $('.results-container').html(`
      <div class="whatis">
        <h2>What is Chromatical?</h2><br>
        <p><b>chroma</b>:</p>
        <p>-- from the Greek chrôma (color) --</p>
        <p>A quality of color combining hue and saturation.</p><br>
        <p><b>chromatic</b>:</p>
        <p>A musical structure derived from the twelve-note chromatic scale.</p><br>
        <p><b>-al</b>: (suffix)</p>
        <p>Having the form or character of.</p><br>
        <p><b>automatic</b>:</p>
        <p>Done or produced as if by machine.</p>
      </div>`)
  }
  if (apiName === "wikipedia") {
    console.log("Rendering wikipedia API data")
    if (responseData[apiName] !== undefined && response.query.pageids[0] !== "-1") {
        let pageID = response.query.pageids[0]
        let thumbnail = response.query.pages[pageID].thumbnail
        let sourceImg = response.query.pages[pageID].original
        let extract = response.query.pages[pageID].extract
        /* renderBorder("hide") */
        if (thumbnail === undefined || thumbnail === null) {
          $('.results-container').append(`
          <div class="wikipedia">
            <div class="wiki-text">
            ${extract}
            </div>
          </div>`)
        } else {
          $('.results-container').append(`
            <div class="wikipedia">
              <div class="wiki-text">
              <div class="wiki-thumbnail">
              <a href=${sourceImg.source} target="_blank"><img src="${thumbnail.source}" alt="Wikipedia image"></a>
              </div>
              ${extract}
              </div>
            </div>`)
        }
    } else {
      renderZeroResults("encyclopedia results")
    }
  }
  if (apiName === "youtube") {
    console.log("Rendering youtube API data")
    if (responseData[apiName] !== undefined ) {
      /* renderBorder("hide") */
      for (let i = 0; i < response.items.length; i++){
        $('.results-container').append(
          `<li><h3>${response.items[i].snippet.title}</h3>
          <p>${response.items[i].snippet.description}</p>
          <img src='${response.items[i].snippet.thumbnails.default.url}'>
          </li>
          `)
      }
    } else {
      renderZeroResults("videos")
    }
  }
  if (apiName === "google") {
    console.log("Rendering google API data")
    let resultsHtml = ""
    if (responseData[apiName] !== undefined ) {
      for (let i = 0; i < response.items.length; i++) {
        resultsHtml += `
          <a href=${response.items[i].link} target="_blank"><img src="${response.items[i].link}" alt="Google image ${i}"></a>`
      }
      renderBorder("hide")
      $('.results-container').append(
        `<div class="google-results"><div class="flexbin flexbin-margin">${resultsHtml}</div></div>`)
    } else {
      renderZeroResults("images")
    }
  }
  if (apiName === "itunes") {
    console.log("Rendering itunes API data")
    if (responseData[apiName] !== undefined ) {
      let numResults = responseData.itunes.results.length
      for (let i = 0; i < numResults; i++) {
        $('.results-container').append(
          `<div class="itunes-results">
          <img src="${response.results[i].artworkUrl100}" alt="album thumbnail" class="itunesImg">
          <a href=${response.results[i].trackViewUrl} target="_blank">${response.results[i].trackName}</a>
          <a href=${response.results[i].artistViewUrl} target="_blank">${response.results[i].artistName}</a> 
          <a href=${response.results[i].collectionViewUrl} target="_blank">${response.results[i].collectionName}</a>  
          </div>`)
      }
      /* renderBorder("hide") */
    } else {
      renderZeroResults("iTunes results")
    }
  }
  if (apiName === "spotify") {
    console.log("Rendering spotify API data")
    featureUnavailable()
  }
  if (apiName === "tastedive") {
    console.log("Rendering tastedive API data")
    featureUnavailable()
  }
  if (apiName === "ticketmaster") {
    console.log("Rendering ticketmaster API data")
    featureUnavailable()
  }
}

function renderZeroResults(message) {
/* updates .results-container with error message */
  console.log("renderZeroResults() ran")
  $('.results-container').append(
    ` <div class="no-results">
        <h2>No ${message} are available for that query</h2>
        <p>Please try a different search term, or press another piano key</p>
      </div> `)
  renderBorder()
}

function featureUnavailable() {
/* updates .results-container with "unavailable" message */
  console.log("featureUnavailable() ran")
  $('.results-container').append(
    `<div class="no-results">
    <h2>This feature is still being developed</h2>
    <p>Please press another piano key</p>
    </div>`)
  renderBorder()
}

function renderBorder(display) {
/* Displays or hides 1px border-top */
  if (display === "hide") {
    console.log('renderBorder("hide") ran')
    $('.results-container').removeClass('border-gray').addClass('border-none')
  } else {
    console.log('renderBorder() ran')
    $('.results-container').removeClass('border-none').addClass('border-gray')
  }
}

$(function() {
  handleUserNav()
  handleFormInput()
})