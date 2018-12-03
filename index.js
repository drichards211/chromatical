'use strict'

let userFormInput = ""

function handleUserNav() {
/* Handles navigation buttons outside the piano menu */
  console.log("handleUserNav() runnning")
  /* $('.results-container').on('.click', '#banner a', function(event) { */
  $('#chromatical').click(function(event) {
    event.preventDefault();
    let buttonID = `${$(this).prop('id')}`
    if (buttonID === "chromatical") {
      console.log("Chromatical title clicked")
    $('.results-container').empty()
    $('.results-container').append(`
    <div class="whatis">
    <h2>What is Chromatical?</h2>
    <br>
    <p><b>chroma</b>:</p>
    <p>-- from the Greek chrôma (color) --</p>
    <p>A quality of color combining hue and saturation.</p>
    <br>
    <p><b>chromatic</b>:</p>
    <p>A musical structure derived from the twelve-note chromatic scale.</p>
    <br>
    <p><b>-al</b>: (suffix)</p>
    <p>Having the form or character of.</p>
    <br>
    <p><b>automatic</b>:</p>
    <p>Done or produced as if by machine.</p>

    </div>
    `
    
    )
    }
    
  })
}

function handleFormInput() {
  /* Listens for .search-form submission, */
  console.log('handleFormInput() running')
  $('.col-12 .search-form').submit(event => {    /* $('.search-form').submit(event => { */
    event.preventDefault()
    /* let menuID = `${$(this).prop('id')}`
    console.log(`${menuID} menu input detected`) */
    userFormInput = $('#search-term').val()
    if (userFormInput === "") {
      alert('Please enter a search term')
    } else {
      console.log(`User searched for string "${userFormInput}"`)
      logoSpin()
      updateSearchParams(userFormInput)  
      const APIList = ["wikipedia", "youtube", /*"google",*/ "itunes",] /* "spotify", "tastedive", "ticketmaster",] */
      for (let i = 0; i < APIList.length; i++) {
        fetchAPIData(APIList[i], userFormInput)
      }
    }
  })
  /* Listens for .search-form-mini submission, */
  $('.col-12 .search-form-mini').submit(event => {    /* $('.search-form').submit(event => { */
      event.preventDefault()
      userFormInput = $('#search-term').val()
      if (userFormInput === "") {
        alert('Please enter a search term')
      } else {
        console.log(`User searched for string "${userFormInput}"`)
        $('.results-container').empty()
        $('.results-container').append(
          `<header role="banner" id="banner">
            <fieldset> 
              <form action="#" class="search-form-mini">
                <label for="query"></label>
                <label><input type="text" id="search-term" class="js-query" value="${userFormInput}"></label>
                <button type="submit" class="find-button"><span class="fas fa-search"></span></button>
              </form>
            </fieldset>
            <br>
            <br>
            <br>
          </header>
          <div class="piano-circle">
          <img src="./assets/images/piano-circle-bw.png" alt="circle piano logo" id="piano-bw" class="fade-out-logo">
        </div>`
        )
        resetPianoKeys() /* in piano.js */
        handleFormInput()
        logoSpin()
        updateSearchParams(userFormInput)  
        const APIList = ["wikipedia", "youtube", /*"google",*/ "itunes",] /* "spotify", "tastedive", "ticketmaster",] */
        for (let i = 0; i < APIList.length; i++) {
          fetchAPIData(APIList[i], userFormInput)
        }
      }
    })

  }

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

function logoSpin() {
  /* Spin the B&W logo for 2 seconds, fade out. Call colorizePiano() */
  console.log("logoSpin() ran")
  $("#piano-bw").addClass("spin-me")
  $('.fade-out-logo').fadeOut(2600)
  setTimeout(function() {
    $(".piano-circle").html(`<img src="./assets/images/piano-circle-color-2.png" alt="circle piano logo" id="piano-bw" class="fade-in-logo" style="display:none">`)
    $(".fade-in-logo").fadeIn(1600).delay(300).fadeOut(2000)
    colorizePiano(1600, 2000, 2100) /*(in piano.js)*/
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

function renderNewContent(apiName) {
/* updates main container with selected API data */
  console.log(`renderNewContent("${apiName}") ran`)
  let response = responseData[apiName]
  $('.results-container').empty()
  $('.results-container').append(
    `<header role="banner" id="banner">
      <fieldset> 
        <form action="#" class="search-form-mini">
          <label for="query"></label>
          <label><input type="text" id="search-term" class="js-query" value="${userFormInput}"></label>
          <button type="submit" class="find-button"><span class="fas fa-search"></span></button>
        </form>
      </fieldset>
      <br>
      <br>
      <br>
    </header>`
  )
  handleFormInput()
 
  if (apiName === "wikipedia") {
    console.log("Rendering wikipedia API data")
    if (response.query.pageids[0] === "-1") {
      $('.results-container').append(
        `<p>No encyclopedia results are available for your search term.</p>`)
    } else {
      let pageID = response.query.pageids[0]
      let thumbnail = response.query.pages[pageID].thumbnail.source
      /* put catch here*/
      let original = response.query.pages[pageID].original
      /* put catch here */
      let pageImage = response.query.pages[pageID].pageimage
      /* put catch here */
      let extract = response.query.pages[pageID].extract
      $('.results-container').append(`
        <div class="wikipedia">
          <div class="wiki-thumbnail">
          <img src="${thumbnail}" alt="" id="" class="">
          </div>
          ${extract}
          </div>`)
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
  handleUserNav()
  handleFormInput()
})