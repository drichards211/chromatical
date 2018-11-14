'use strict'

let userFormInput = ""
let activePianoKey = "none"
let menuActive = false
let pianoHorizontal = true

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

function colorizePianos() {
  /* Called by handleFormInput(). Fade-in the colorized logo, fade-out
after delay. Render and colorize the piano-menu buttons. */
  console.log("colorizePianos ran")
  menuActive = true
  $(".piano-circle").html(`<img src="piano-circle-color-2.png" alt="circle piano logo" id="piano-bw" class="fade-in-logo" style="display:none">`)
  $(".fade-in-logo").fadeIn(1600).delay(300).fadeOut(2000)

  if (pianoHorizontal === true) {

    /* Update .html() for HORIZONTAL piano menu */
    setTimeout(function() {
    $(".piano-menu").html(`<form class="select-content fade-in"> 
      <li><div class="anchor piano-button-large white-color" type="button" id="C"><div class="fade-in-text" style="display:none">ABOUT</div></div></li>
      <li><div class="anchor piano-button-large white-color" type="button" id="D"><div class="fade-in-text" style="display:none">VIDEOS</div></div><span id="Db"></span></li>
      <li><div class="anchor piano-button-large white-color" type="button" id="E"><div class="fade-in-text" style="display:none">PURCHASE</div></div><span id="Eb"></span></li>
      <li><div class="anchor piano-button-large white-color" type="button" id="F"><div class="fade-in-text" style="display:none">IMAGES</div></div></li>
      <li><div class="anchor piano-button-large white-color" type="button" id="G"><div class="fade-in-text" style="display:none">LISTEN</div></div><span id="Gb"></span></li>
      <li><div class="anchor piano-button-large white-color" type="button" id="A"><div class="fade-in-text" style="display:none">SIMILAR</div></div><span id="Ab"></span></li>
      <li><div class="anchor piano-button-large white-color" type="button" id="B"><div class="fade-in-text" style="display:none">CONCERTS</div></div><span id="Bb"></span></li>
      </form>`)
    }, 1600)
  
  } else {
    
    /* Update .html() for VERTICAL piano MENU BUTTONS */
    setTimeout(function() {
      console.log("Rendering VERTICAL piano menu buttons")
        $(".piano-menu").html(`<form class="select-content fade-in"> 
          <li><span class="tut piano-button-large white-color" type="button" id="B"><div class="fade-in-text" style="display:none">CONCERTS</div></span></li>
          <li class="black-tut"><span class="tut" id="Bb"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="A"><div class="fade-in-text" style="display:none">SIMILAR</div></span></li>
          <li class="black-tut"><span class="tut" id="Ab"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="G"><div class="fade-in-text" style="display:none">LISTEN</div></span></li>
          <li class="black-tut"><span class="tut" id="Gb"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="F"><div class="fade-in-text" style="display:none">IMAGES</div></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="E"><div class="fade-in-text" style="display:none">PURCHASE</div></span></li>
          <li class="black-tut"><span class="tut" id="Eb"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="D"><div class="fade-in-text" style="display:none">VIDEOS</div></span></li>
          <li class="black-tut"><span class="tut" id="Db"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="C"><div class="fade-in-text" style="display:none">ABOUT</div></span></li>
        </form>`)
      }, 1600)
  }
  
  /* FadeIn() colors and text for piano menu keys */
  setTimeout(function() {
    console.log("setTimeout ran")
    $(".fade-in-text").fadeIn(2000)
    $("#C").removeClass('white-color').addClass('c-color')
    $("#D").removeClass('white-color').addClass('d-color')
    $("#E").removeClass('white-color').addClass('e-color')
    $("#F").removeClass('white-color').addClass('f-color')
    $("#G").removeClass('white-color').addClass('g-color')
    $("#A").removeClass('white-color').addClass('a-color')
    $("#B").removeClass('white-color').addClass('b-color')
  }, 2100)
  
  /* $(".fade-in").delay(2800).fadeIn(2800) */
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
/* When user clicks a COLORED piano button, change color to bright, 
play sound, and call renderNewContent() with argument.  
When user clicks a BLACK piano button, play sound. */
console.log("ListenPianoTouch() running")

const c5 = new Audio("./sounds/c5.mp3");
c5.preload = "auto"
const db = new Audio("./sounds/db.mp3");
db.preload = "auto"
const d = new Audio("./sounds/d.mp3");
d.preload = "auto"
const eb = new Audio("./sounds/eb.mp3");
eb.preload = "auto"
const e = new Audio("./sounds/e.mp3");
e.preload = "auto"
const f = new Audio("./sounds/f.mp3");
f.preload = "auto"
const gb = new Audio("./sounds/gb.mp3");
gb.preload = "auto"
const g = new Audio("./sounds/g.mp3");
g.preload = "auto"
const ab = new Audio("./sounds/ab.mp3");
ab.preload = "auto"
const a = new Audio("./sounds/a.mp3");
a.preload = "auto"
const bb = new Audio("./sounds/bb.mp3");
bb.preload = "auto"
const b = new Audio("./sounds/b.mp3");
b.preload = "auto"
const c6 = new Audio("./sounds/c6.mp3");
c6.preload = "auto"

    /* Piano note C */
    $("#p-wrapper").on('click', '#C', function(event) {
      console.log("piano key C pressed")
      resetPianoColors()   
      $('#C').removeClass('c-color').addClass('c-color-bright');
      activePianoKey = "C"
      c5.play()
      c5.currentTime=0;
    })
  
    /* Piano note Db */
    $("#p-wrapper").on('click', '#Db', function(event) {
      console.log("piano key Db pressed")
      /* let db = new Audio("./sounds/db.mp3");
      db.preload = "auto"  */
      db.play()
      db.currentTime=0;
    })
  
    /* Piano note D */
    $("#p-wrapper").on('click', '#D', function(event) {
      console.log("piano key D pressed")
      resetPianoColors()   
      $('#D').removeClass('d-color').addClass('d-color-bright');
      activePianoKey = "D"
      /* let d = new Audio("./sounds/d.mp3");
      d.preload = "auto"  */
      d.play()
      d.currentTime=0;
      renderNewContent("youtube")        
    })
  
    /* Piano note Eb */
    $("#p-wrapper").on('click', '#Eb', function(event) {
      console.log("piano key Eb pressed")
      eb.play()
      eb.currentTime=0;    
    })
    
    /* Piano note E */
    $("#p-wrapper").on('click', '#E', function(event) {
      console.log("piano key E pressed")    
      resetPianoColors()   
      $('#E').removeClass('e-color').addClass('e-color-bright');
      activePianoKey = "E"
      e.play()
      e.currentTime=0;
    })
    
    /* Piano note F */
    $("#p-wrapper").on('click', '#F', function(event) {
      console.log("piano key F pressed")    
      resetPianoColors()   
      $('#F').removeClass('f-color').addClass('f-color-bright');   
      activePianoKey = "F"
      f.play()
      f.currentTime=0;
    })
  
    /* Piano note Gb */
    $("#p-wrapper").on('click', '#Gb', function(event) {
      console.log("piano key Gb pressed")    
      gb.play()
      gb.currentTime=0;
    })
  
    /* Piano note G */
    $("#p-wrapper").on('click', '#G', function(event) {
      console.log("piano key G pressed") 
      resetPianoColors()   
      $('#G').removeClass('g-color').addClass('g-color-bright');
      activePianoKey = "G"
      g.play()
      g.currentTime=0;
    })
  
    /* Piano note Ab */
    $("#p-wrapper").on('click', '#Ab', function(event) {
      console.log("piano key Ab pressed")
      ab.play()
      ab.currentTime=0;
    })
  
    /* Piano note A */
    $("#p-wrapper").on('click', '#A', function(event) {
      console.log("piano key A pressed")
      resetPianoColors()   
      $('#A').removeClass('a-color').addClass('a-color-bright');
      activePianoKey = "A"
      a.play()
      a.currentTime=0;
    })
    
    /* Piano note Bb */
    $("#p-wrapper").on('click', '#Bb', function(event) {
      console.log("piano key Bb pressed")    
      bb.play()
      bb.currentTime=0;
    })
  
    /* Piano note B */
    $("#p-wrapper").on('click', '#B', function(event) {
      console.log("piano key B pressed") 
      resetPianoColors()      
      $('#B').removeClass('b-color').addClass('b-color-bright');
      activePianoKey = "B"
      b.play()
      b.currentTime=0;
    })
  }

function preLoadAudio() {
  let pianoNotes = ["c5", "db", "d", "eb", "e", "f", "gb", "g", "ab", "a", "bb", "b", "c6",]

  let pianoSounds = [
    "./sounds/c5.mp3",
    "./sounds/db.mp3",
    "./sounds/d.mp3",
    "./sounds/eb.mp3",
    "./sounds/e.mp3",
    "./sounds/f.mp3",
    "./sounds/gb.mp3",
    "./sounds/g.mp3",
    "./sounds/ab.mp3",
    "./sounds/a.mp3",
    "./sounds/bb.mp3",
    "./sounds/b.mp3",
    "./sounds/c6.mp3",
  ]
  /* var c5 = new Audio("./sounds/c5.mp3");
  c5.preload = "auto"
  var db = new Audio("./sounds/db.mp3");
  db.preload = "auto"
  var d = new Audio("./sounds/d.mp3");
  d.preload = "auto"
  var eb = new Audio("./sounds/eb.mp3");
  eb.preload = "auto"
  var e = new Audio("./sounds/e.mp3");
  e.preload = "auto"
  var f = new Audio("./sounds/f.mp3");
  f.preload = "auto"
  var gb = new Audio("./sounds/gb.mp3");
  gb.preload = "auto"
  var g = new Audio("./sounds/g.mp3");
  g.preload = "auto"
  var ab = new Audio("./sounds/ab.mp3");
  ab.preload = "auto"
  var a = new Audio("./sounds/a.mp3");
  a.preload = "auto"
  var bb = new Audio("./sounds/bb.mp3");
  bb.preload = "auto"
  var b = new Audio("./sounds/b.mp3");
  b.preload = "auto"
  var c6 = new Audio("./sounds/c6.mp3");
  c6.preload = "auto" */

  /* for (var i in pianoNotes) {
    /* var pianoNotes[i] = new Audio(`./sounds/${pianoNotes[i]}.mp3`) */
    /* pianoNotes[i].preload = "auto";
  } */


  /* for (let i in pianoSounds) {
    [i].preload = "auto";
  } */
}

/* function resetPianoKeys() {
  console.log("resetPianoKeys ran")
  $(".piano-menu").html(`<form class="select-content fade-in"> 
    <li><div class="anchor piano-button-large white-color" type="button" id="C"><div class="fade-in-text" style="display:none">ABOUT</div></div></li>
    <li><div class="anchor piano-button-large white-color" type="button" id="D"><div class="fade-in-text" style="display:none">VIDEOS</div></div><span id="Db"></span></li>
    <li><div class="anchor piano-button-large white-color" type="button" id="E"><div class="fade-in-text" style="display:none">PURCHASE</div></div><span id="Eb"></span></li>
    <li><div class="anchor piano-button-large white-color" type="button" id="F"><div class="fade-in-text" style="display:none">IMAGES</div></div></li>
    <li><div class="anchor piano-button-large white-color" type="button" id="G"><div class="fade-in-text" style="display:none">LISTEN</div></div><span id="Gb"></span></li>
    <li><div class="anchor piano-button-large white-color" type="button" id="A"><div class="fade-in-text" style="display:none">SIMILAR</div></div><span id="Ab"></span></li>
    <li><div class="anchor piano-button-large white-color" type="button" id="B"><div class="fade-in-text" style="display:none">CONCERTS</div></div><span id="Bb"></span></li>  <!-- class="piano-button-large" -->
    </form>`)
}
 */

function resetPianoColors() {
  /* Resets a previously-active (bright-colored) piano key to default color value */
    console.log("resetPianoColors ran")
    if ((activePianoKey === "none") === false) {
      $(`#${activePianoKey}`).removeClass(`${activePianoKey.toLowerCase()}-color-bright`).addClass(`${activePianoKey.toLowerCase()}-color`)
    }
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


/* var windowHeight = $(window).height();
var windowWidth = $(window).width();
  $('#footer').scrollTop(($('#p-wrapper').height()/2)-(windowHeight/2));
  $('#footer').scrollLeft(($('#p-wrapper').width()/2)-(windowWidth/2)); */

/* Hide Piano Tray when scrolling */
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50){
      $('#centered').addClass("hidden")
      $('#hide-piano').removeClass("hidden")
    } else {
      $('#centered').removeClass("hidden")
      $('#hide-piano').addClass("hidden")
    }
  })
  $("#p-wrapper").on('click', '#hide-piano', function(event) {
    console.log("manually revealed piano tray")
    $('#centered').removeClass("hidden")
    $('#hide-piano').addClass("hidden")  
  })  
  
})  


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
function movePiano() {
  console.log("movePiano() running")
  let mediaQuery = window.matchMedia("(max-width: 900px) and (orientation: landscape)")
  if (mediaQuery.matches) { 

    /* Update .html() for VERTICAL piano */
    console.log("Updating html for vertical piano")
    pianoHorizontal = false
    $("main").addClass("left-piano-margin")
    $('#p-wrapper').html(`<nav id="nav-piano">
        <ul>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          
          <div class="piano-menu">
          <li><span class="tut"></span></li>
            <li class="black-tut"><span class="tut"></span></li>
            <li><span class="tut"></span></li>
            <li class="black-tut"><span class="tut"></span></li>
            <li><span class="tut"></span></li>
            <li class="black-tut"><span class="tut"></span></li>
            <li><span class="tut"></span></li>
            <li><span class="tut"></span></li>
            <li class="black-tut"><span class="tut"></span></li>
            <li><span class="tut"></span></li>
            <li class="black-tut"><span class="tut"></span></li>
            <li><span class="tut"></span></li>
          </div>
          
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          <li class="black-tut"><span class="tut"></span></li>
          <li><span class="tut"></span></li>
          
        </ul>
      </nav>`
    )
    if (menuActive === true) {
      /* Update .html() for VERTICAL piano MENU BUTTONS */
      console.log("Rendering VERTICAL piano menu buttons")
        $(".piano-menu").html(`<form class="select-content fade-in"> 
          <li><span class="tut piano-button-large white-color" type="button" id="B"><div class="fade-in-text" style="display:none">CONCERTS</div></span></li>
          <li class="black-tut"><span class="tut" id="Bb"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="A"><div class="fade-in-text" style="display:none">SIMILAR</div></span></li>
          <li class="black-tut"><span class="tut" id="Ab"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="G"><div class="fade-in-text" style="display:none">LISTEN</div></span></li>
          <li class="black-tut"><span class="tut" id="Gb"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="F"><div class="fade-in-text" style="display:none">IMAGES</div></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="E"><div class="fade-in-text" style="display:none">PURCHASE</div></span></li>
          <li class="black-tut"><span class="tut" id="Eb"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="D"><div class="fade-in-text" style="display:none">VIDEOS</div></span></li>
          <li class="black-tut"><span class="tut" id="Db"></span></li>
          <li><span class="tut piano-button-large white-color" type="button" id="C"><div class="fade-in-text" style="display:none">ABOUT</div></span></li>
        </form>`)

      /* FadeIn() colors and text for piano menu keys */
      console.log("Rendering piano menu COLORS AND TEXT")
      setTimeout(function() {
        console.log("setTimeout ran")
        $(".fade-in-text").fadeIn(2000)
        $("#C").removeClass('white-color').addClass('c-color')
        $("#D").removeClass('white-color').addClass('d-color')
        $("#E").removeClass('white-color').addClass('e-color')
        $("#F").removeClass('white-color').addClass('f-color')
        $("#G").removeClass('white-color').addClass('g-color')
        $("#A").removeClass('white-color').addClass('a-color')
        $("#B").removeClass('white-color').addClass('b-color')
      }, 2100)
    }
  } else {

    /* Update .html() for HORIZONTAL piano */
    console.log("Updating html for horizontal piano")
    pianoHorizontal = true
    $("main").removeClass("left-piano-margin")
    $('#p-wrapper').html(`<input type="image" id="hide-piano" class="hidden" src="piano-circle-color-2.png"/>  <!-- "cmyk-triangle-m-up.png" -->
    <!-- <div id="hide-piano" type="button" img src="prism-triangle-large.png">TEST</div> -->
    <!-- <input type="image" id="hide-piano" src="prism-triangle-large.png"/>  -->
      <!-- imgsrc="/prism-triangle-large.png">SHOW ME</div> -->  
    <div id="nav-piano"> <!-- "centered" --> 
      <ul id="piano">
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        
        <div class="piano-menu">
          <li><div class="anchor"></div></li>
          <li><div class="anchor"></div><span></span></li>
          <li><div class="anchor"></div><span></span></li>
          <li><div class="anchor"></div></li>
          <li><div class="anchor"></div><span></span></li>
          <li><div class="anchor"></div><span></span></li>
          <li><div class="anchor"></div><span></span></li>
        </div>                  
        
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div><span></span></li>
        <li><div class="anchor"></div></li>
      </ul>
      
    </div>`)
    
    if (menuActive === true) {
      
      /* Update .html() for HORIZONTAL piano MENU BUTTONS */
      console.log("Rendering piano menu buttons")
        $(".piano-menu").html(`<form class="select-content fade-in"> 
          <li><div class="anchor piano-button-large white-color" type="button" id="C"><div class="fade-in-text" style="display:none">ABOUT</div></div></li>
          <li><div class="anchor piano-button-large white-color" type="button" id="D"><div class="fade-in-text" style="display:none">VIDEOS</div></div><span id="Db"></span></li>
          <li><div class="anchor piano-button-large white-color" type="button" id="E"><div class="fade-in-text" style="display:none">PURCHASE</div></div><span id="Eb"></span></li>
          <li><div class="anchor piano-button-large white-color" type="button" id="F"><div class="fade-in-text" style="display:none">IMAGES</div></div></li>
          <li><div class="anchor piano-button-large white-color" type="button" id="G"><div class="fade-in-text" style="display:none">LISTEN</div></div><span id="Gb"></span></li>
          <li><div class="anchor piano-button-large white-color" type="button" id="A"><div class="fade-in-text" style="display:none">SIMILAR</div></div><span id="Ab"></span></li>
          <li><div class="anchor piano-button-large white-color" type="button" id="B"><div class="fade-in-text" style="display:none">CONCERTS</div></div><span id="Bb"></span></li>
          </form>`)
      
      /* FadeIn() colors and text for piano menu keys */
      setTimeout(function() {
        console.log("setTimeout ran")
        $(".fade-in-text").fadeIn(2000)
        $("#C").removeClass('white-color').addClass('c-color')
        $("#D").removeClass('white-color').addClass('d-color')
        $("#E").removeClass('white-color').addClass('e-color')
        $("#F").removeClass('white-color').addClass('f-color')
        $("#G").removeClass('white-color').addClass('g-color')
        $("#A").removeClass('white-color').addClass('a-color')
        $("#B").removeClass('white-color').addClass('b-color')
      }, 2100)
    }
  }
}
  


$(function() {
  handleFormInput()
  listenPianoTouch()
  preLoadAudio()
  movePiano()
})

window.addEventListener("resize", movePiano);
window.addEventListener('orientationchange', movePiano);
