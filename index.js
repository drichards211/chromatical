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
      renderNewContent("chromatical")
    }
  })
  $('#home-button').click(function(event) {
  /* Reset app appearance and behavior to initial state */  
    event.preventDefault()
    console.log("Home button clicked")
    renderHomePage()
  })
  $('#search-term').focus(function(event){
  /* Hide searchbox marquee */
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
        renderMiniBanner()
        showPianoLogo()
        resetPianoKeys() /*in piano.js*/
        performSearch(userFormInput)
      }
    })
}

function performSearch(searchInput) {
  console.log("performSearch() running")
  console.log(`User searched for string "${searchInput}"`)
  responseData = {
    google: {"kind":"customsearch#search","url":{"type":"application/json","template":"https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"},"queries":{"request":[{"title":"Google Custom Search - bjork","totalResults":"118000000","searchTerms":"bjork","count":10,"startIndex":1,"inputEncoding":"utf8","outputEncoding":"utf8","safe":"off","cx":"000457940223891916115:vv6akwfhiiy","searchType":"image"}],"nextPage":[{"title":"Google Custom Search - bjork","totalResults":"118000000","searchTerms":"bjork","count":10,"startIndex":11,"inputEncoding":"utf8","outputEncoding":"utf8","safe":"off","cx":"000457940223891916115:vv6akwfhiiy","searchType":"image"}]},"context":{"title":"Entire Web Image Search"},"searchInformation":{"searchTime":0.637915,"formattedSearchTime":"0.64","totalResults":"118000000","formattedTotalResults":"118,000,000"},"items":[{"kind":"customsearch#result","title":"björk (@bjork) | Twitter","htmlTitle":"<b>björk</b> (@<b>bjork</b>) | Twitter","link":"https://pbs.twimg.com/profile_images/925346722087342080/HPCZu3m4_400x400.jpg","displayLink":"twitter.com","snippet":"björk (@bjork) | Twitter","htmlSnippet":"<b>björk</b> (@<b>bjork</b>) | Twitter","mime":"image/jpeg","image":{"contextLink":"https://twitter.com/bjork","height":400,"width":400,"byteSize":37389,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSucQvGRc5TDhptTCJbOw4jWGb2p2DEr7VMiK7ThReIH_ZCxzZ0IyJquA","thumbnailHeight":124,"thumbnailWidth":124}},{"kind":"customsearch#result","title":"5 interesting facts about Björk | Red Bull Music","htmlTitle":"5 interesting facts about <b>Björk</b> | Red Bull Music","link":"https://image.redbull.com/rbcom/010/2016-09-12/1331817316287_2/0100/0/1/bj%C3%B6rk-portrait-taken-in-tokyo-in-2016.jpg","displayLink":"www.redbull.com","snippet":"5 interesting facts about Björk | Red Bull Music","htmlSnippet":"5 interesting facts about <b>Björk</b> | Red Bull Music","mime":"image/jpeg","image":{"contextLink":"https://www.redbull.com/gb-en/5-things-we-didn-t-know-about-bjork","height":2000,"width":3000,"byteSize":367837,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTBmFyLqzntZuIGT775Hl2941LAip6qmI17lT_XeFmhQzucnGg1-SK_w","thumbnailHeight":100,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Oh so quietly, Björk joins the bitcoin revolution | News | The Times","htmlTitle":"Oh so quietly, <b>Björk</b> joins the bitcoin revolution | News | The Times","link":"https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa177fbce-bfe6-11e7-b58a-4186f6049f2e.jpg?crop=1901%2C1069%2C53%2C450&resize=685","displayLink":"www.thetimes.co.uk","snippet":"Oh so quietly, Björk joins the bitcoin revolution | News | The Times","htmlSnippet":"Oh so quietly, <b>Björk</b> joins the bitcoin revolution | News | The Times","mime":"image/jpeg","image":{"contextLink":"https://www.thetimes.co.uk/article/oh-so-quietly-bjork-joins-the-bitcoin-revolution-36wnlbvkb","height":385,"width":685,"byteSize":40976,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMGzHGnFLVBCFkboe0EAanNe0zVui0lERsTrcumKY2tu-X0aRUQ0Ow_A","thumbnailHeight":78,"thumbnailWidth":139}},{"kind":"customsearch#result","title":"Swan dress - Wikipedia","htmlTitle":"Swan dress - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bj%C3%B6rk_and_the_Swan_Dress.jpg/220px-Bj%C3%B6rk_and_the_Swan_Dress.jpg","displayLink":"en.wikipedia.org","snippet":"Swan dress - Wikipedia","htmlSnippet":"Swan dress - Wikipedia","mime":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Swan_dress","height":230,"width":220,"byteSize":13445,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rE_xYWfSnDUTPqKzoojuh6m0eGsaOQIw_06OvyP5wRftoeu5m-sKp8A","thumbnailHeight":108,"thumbnailWidth":103}},{"kind":"customsearch#result","title":"Bjork At 50 – The Iconic Artist's Life And Career In Pictures - NME","htmlTitle":"<b>Bjork</b> At 50 – The Iconic Artist&#39;s Life And Career In Pictures - NME","link":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/11/2015_Bjork_Youtube_191115-920x609.jpg","displayLink":"www.nme.com","snippet":"Bjork At 50 – The Iconic Artist's Life And Career In Pictures - NME","htmlSnippet":"<b>Bjork</b> At 50 – The Iconic Artist&#39;s Life And Career In Pictures - NME","mime":"image/jpeg","image":{"contextLink":"https://www.nme.com/photos/bjork-at-50-the-iconic-artist-s-life-and-career-in-pictures-1420130","height":609,"width":920,"byteSize":42713,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7SsTDZjyrDQMWeh8c85JGIuVZ-ea_FHqxMr3dL4WKua9i8uFZ4xWtqY7","thumbnailHeight":97,"thumbnailWidth":147}},{"kind":"customsearch#result","title":"Björk on creativity as an ongoing experiment – The Creative ...","htmlTitle":"<b>Björk</b> on creativity as an ongoing experiment – The Creative ...","link":"https://s3.amazonaws.com/tci-assets/uploads/bjo1%202017_FINAL_V_preview.jpg","displayLink":"thecreativeindependent.com","snippet":"Björk on creativity as an ongoing experiment – The Creative ...","htmlSnippet":"<b>Björk</b> on creativity as an ongoing experiment – The Creative ...","mime":"image/jpeg","image":{"contextLink":"https://thecreativeindependent.com/people/bjork-on-creativity-as-an-ongoing-experiment/","height":2560,"width":1920,"byteSize":646693,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87owxN9a2KXdaNiQQVpUyoAEcaJed3K8aeENRrLXRIW9ki8xSFbRdLpI","thumbnailHeight":150,"thumbnailWidth":113}},{"kind":"customsearch#result","title":"The Utopian: Björk On Loss, Moving On, Activism & Seeking Change ...","htmlTitle":"The Utopian: <b>Björk</b> On Loss, Moving On, Activism &amp; Seeking Change ...","link":"https://i2.wp.com/grapevine.is/wp-content/uploads/Bjork_by_Santiago_Felipe-Web-Crop.jpg?fit=1855%2C1704&quality=85&ssl=1","displayLink":"grapevine.is","snippet":"The Utopian: Björk On Loss, Moving On, Activism & Seeking Change ...","htmlSnippet":"The Utopian: <b>Björk</b> On Loss, Moving On, Activism &amp; Seeking Change ...","mime":"image/jpeg","image":{"contextLink":"https://grapevine.is/culture/music/2017/12/07/the-utopian-bjork-on-loss-moving-on-activism-seeking-change/","height":1704,"width":1855,"byteSize":444212,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkUFlX_RWjq6PFc83V3pGxpW7dtS3W9x4Bhwe3_t4QFUi4tatLp-lzZT-","thumbnailHeight":138,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Björk – Telekom Electronic Beats","htmlTitle":"<b>Björk</b> – Telekom Electronic Beats","link":"http://www.electronicbeats.net/app/uploads/2015/03/Bjork_EB.jpg","displayLink":"www.electronicbeats.net","snippet":"Björk – Telekom Electronic Beats","htmlSnippet":"<b>Björk</b> – Telekom Electronic Beats","mime":"image/jpeg","image":{"contextLink":"http://www.electronicbeats.net/artist/bjork/","height":1000,"width":1600,"byteSize":112043,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFksmqD-iGhIvveIfzvqphXyMxCMMvKN9NS3NIGePgSqR__1gxVdTDRdG1","thumbnailHeight":94,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Björk - Home | Facebook","htmlTitle":"<b>Björk</b> - Home | Facebook","link":"https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=6747251459","displayLink":"www.facebook.com","snippet":"Björk - Home | Facebook","htmlSnippet":"<b>Björk</b> - Home | Facebook","mime":"image/","image":{"contextLink":"https://www.facebook.com/bjork/","height":960,"width":960,"byteSize":147219,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91SFwH4DglkZqxcdyMRw8NkouWEjKpf7vJ3z-F25bC3q54lIvNl7M9EVH","thumbnailHeight":148,"thumbnailWidth":148}},{"kind":"customsearch#result","title":"Björk - Wikipedia","htmlTitle":"<b>Björk</b> - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bj%C3%B6rk_by_deep_schismic_at_Big_Day_Out_2008%2C_Melbourne_Flemington_Racecourse.jpg/220px-Bj%C3%B6rk_by_deep_schismic_at_Big_Day_Out_2008%2C_Melbourne_Flemington_Racecourse.jpg","displayLink":"en.wikipedia.org","snippet":"Björk - Wikipedia","htmlSnippet":"<b>Björk</b> - Wikipedia","mime":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Bj%C3%B6rk","height":310,"width":220,"byteSize":22292,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DWVdJrbwTcpVuBc9--IEsxfvhL7un8_zH2DJpozFqi_IUCBjxDSDcw","thumbnailHeight":117,"thumbnailWidth":83}}]},
  }
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
    colorizePiano(1600, 2000, 2100) /*(in piano.js)*/
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
      <div class="mini-logo">
        <a href="#" id="home-button">
          <img src="./assets/images/piano-circle-bw.png" alt="mini circle piano logo" id="piano-bw-mini">
        </a>
      </div>
      <fieldset> 
        <form action="#" class="search-form-mini">
          <label for="query"></label>
          <label><input type="text" id="search-term" class="js-query" value="${userFormInput}"></label>
          <button type="submit" class="find-button"><span class="fas fa-search"></span></button>
        </form>
      </fieldset>
      <br>
      <br>
    </div>`)
  handleFormInput()
  handleUserNav()
}

function renderHomePage() {
  console.log("renderHomePage() ran")
  userFormInput = ""
  $('#banner').html(`
    <a href="#" id="chromatical"><h1>Chromatical</h1></a>
    <fieldset> 
      <form action="#" class="search-form">
          <label for="query"></label>
          <label>
            <div class="floating-marquee">
              <marquee behavior="scroll" direction="left"><span id="marquee-text">Search for an artist, album, or song title.</span></marquee>
            </div>
            <input type="text" id="search-term" class="js-query">
            <button type="submit" class="find-button"><span class="fas fa-search"></span></button>
          </label>
      </form>
    </fieldset>`)
  $('.results-container').html(`
    <div class="piano-circle">
      <img src="./assets/images/piano-circle-bw.png" alt="circle piano logo" id="piano-bw" class="fade-out-logo">
    </div>`)
  resetPianoKeys() /*in piano.js*/
  handleUserNav()
  handleFormInput()
}

function renderNewContent(apiName) {
/* updates .results-container with selected API data */
  console.log(`renderNewContent("${apiName}") ran`)
  let response = responseData[apiName]
  $('.results-container').empty()
  renderMiniBanner()
  
  if (apiName === "chromatical") {
    $('.results-container').html(`
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
      </div>`
    )
  }
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
          <div class="wiki-text">
          ${extract}
          </div>
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
        </li>
        `)
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
        `<div class="itunes-results">
        <img src="${response.results[i].artworkUrl100}" alt="album thumbnail" class="itunesImg">
        <a href=${response.results[i].trackViewUrl} target="_blank">${response.results[i].trackName}</a>
        <a href=${response.results[i].artistViewUrl} target="_blank">${response.results[i].artistName}</a> 
        <a href=${response.results[i].collectionViewUrl} target="_blank">${response.results[i].collectionName}</a>  
        </div>`
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