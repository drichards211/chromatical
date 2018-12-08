'use strict'

/* let menuActive = false */
let activePianoKey = "none"
let pianoHorizontal = true

function colorizePiano(wait, time, delay) {
/* Render and colorize the piano-menu buttons. */
  console.log("colorizePiano() ran")
  console.log('Rendering piano menu buttons')
  /* menuActive = true */
  
  /* Update .html() for piano MENU BUTTONS */
  setTimeout(function() {
    $(".piano-menu").html(
      `<nav class="select-content fade-in"> 
      <li><button class="anchor piano-button-large white-color" id="C"><div class="fade-in-text rotate-text text-c" style="display:none">ABOUT</div></button></li>
      <li><button class="anchor piano-button-large white-color" id="D"><div class="fade-in-text rotate-text text-d" style="display:none">VIDEOS</div></button><span id="Db"></span></li>
      <li><button class="anchor piano-button-large white-color" id="E"><div class="fade-in-text rotate-text text-e" style="display:none">IMAGES</div></button><span id="Eb"></span></li>
      <li><button class="anchor piano-button-large white-color" id="F"><div class="fade-in-text rotate-text text-f" style="display:none">PURCHASE</div></button></li>
      <li><button class="anchor piano-button-large white-color" id="G"><div class="fade-in-text rotate-text text-g" style="display:none">LISTEN</div></button><span id="Gb"></span></li>
      <li><button class="anchor piano-button-large white-color" id="A"><div class="fade-in-text rotate-text text-a" style="display:none">SIMILAR</div></button><span id="Ab"></span></li>
      <li><button class="anchor piano-button-large white-color" id="B"><div class="fade-in-text rotate-text text-b" style="display:none">CONCERTS</div></button><span id="Bb"></span></li>
      </nav>`)
    }, wait)
  
  /* Fade-in colors and text for piano menu keys */
  setTimeout(function() {
    $(".fade-in-text").fadeIn(time)
    $("#C").removeClass('white-color').addClass('C-color')
    $("#D").removeClass('white-color').addClass('D-color')
    $("#E").removeClass('white-color').addClass('E-color')
    $("#F").removeClass('white-color').addClass('F-color')
    $("#G").removeClass('white-color').addClass('G-color')
    $("#A").removeClass('white-color').addClass('A-color')
    $("#B").removeClass('white-color').addClass('B-color')
  }, delay)

  /* Replace black & white mini-piano-button with colored version */
  $('#mini-piano-button').html(`
    <input type="image" id="hide-piano" class="hidden" src="assets/images/mini-piano-menu.png"/>`
  )
}

function listenPianoTouch(){ /*
When user clicks a COLORED piano <button>:
    (1) Reset any previously clicked button to normal color.
    (2) Change <body> background-color and border-top to match new button. 
    (3) Change new button color to bright. 
    (4) Update activePianoKey global variable.
    (5) Play piano sound.
    (6) Call renderNewContent() with argument from APINames{}.  
When user clicks a BLACK piano <span>, just play sound (7). 
*/
  console.log("ListenPianoTouch() running")
     
  const pianoSounds = {
    C: new Audio("assets/sounds/c5.mp3"), 
    Db: new Audio("assets/sounds/db.mp3"),
    D: new Audio("assets/sounds/d.mp3"),
    Eb: new Audio("assets/sounds/eb.mp3"),
    E: new Audio("assets/sounds/e.mp3"),
    F: new Audio("assets/sounds/f.mp3"),
    Gb: new Audio("assets/sounds/gb.mp3"),
    G: new Audio("assets/sounds/g.mp3"),
    Ab: new Audio("assets/sounds/ab.mp3"),
    A: new Audio("assets/sounds/a.mp3"),
    Bb: new Audio("assets/sounds/bb.mp3"),
    B: new Audio("assets/sounds/b.mp3"),
    C6: new Audio("assets/sounds/c6.mp3"),
  }

  const APINames = {
    C: "wikipedia",
    D: "youtube",
    E: "google",
    F: "itunes",
    G: "spotify",
    A: "tastedive",
    B: "ticketmaster",
  }
  
  $(".piano-menu").on('click', 'button, span', function(event) {
    if (`${$(this).prop('id')}` !== "silent") {
      let noteID = `${$(this).prop('id')}`
      console.log(`piano key ${noteID} pressed`)
      if (noteID.length < 2) { 
      /* WHITE KEYS ONLY */
        /* (1) */
        resetPianoColors()
        renderMiniBanner()
        /* (2) */
        $('body').removeClass(`bg-${activePianoKey}`).addClass(`bg-${noteID}`)
        $('#piano-bw-mini').removeClass(`shadow-${activePianoKey}`).addClass(`shadow-${noteID}`)
        /* $('.results-container').removeClass(`border-${activePianoKey}`).addClass(`border-${noteID}`) */
        /* (3) */
        $(`#${noteID}`).removeClass(`${noteID}-color`).addClass(`${noteID}-color-bright`)
        /* (4) */
        activePianoKey = noteID
        /* (5) */
        pianoSounds[noteID].play()
        pianoSounds[noteID].currentTime = 0
        /* (6) */
        renderNewContent(`${APINames[noteID]}`) /*(in index.js)*/
      } else {
      /* BLACK KEYS ONLY */
        /* (7) */
        pianoSounds[noteID].play()
        pianoSounds[noteID].currentTime = 0
      }
    } else {
      console.log("Silent piano key pressed")
    }
  })
}
    
function resetPianoColors() {
/* Resets an active (brightly-colored) piano key to default (faded) color value */
    console.log("resetPianoColors() ran")
    if (activePianoKey !== "none") {
      $(`#${activePianoKey}`).removeClass(`${activePianoKey}-color-bright`).addClass(`${activePianoKey}-color`)
    }
}
  
function resetPianoKeys() {
/* Resets piano menu keys to white, and background to grey */
  console.log("resetPianoKeys() ran")
  $('body').removeClass(`bg-${activePianoKey}`).addClass(`bg-none`)
  $('.results-container').removeClass(`border-${activePianoKey}`).addClass(`border-none`)
  activePianoKey = "none"
  $('.piano-menu').html(`
  <li><div class="anchor"></div></li>
  <li><div class="anchor"></div><span id="silent"></span></li>
  <li><div class="anchor"></div><span id="silent"></span></li>
  <li><div class="anchor"></div></li>
  <li><div class="anchor"></div><span id="silent"></span></li>
  <li><div class="anchor"></div><span id="silent"></span></li>
  <li><div class="anchor"></div><span id="silent"></span></li>`
  )
  $('#mini-piano-button').html(`
    <input type="image" id="hide-piano" class="hidden" src="assets/images/mini-piano-menu-bw.png"/>`
  )
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


function hidePiano() {
/* Hide HORIZONTAL Piano Tray when scrolling */
  console.log("hidePiano() running")
    $(window).scroll(function(){
      if (pianoHorizontal === true) {  
        if ($(window).scrollTop() > 50){
            console.log("hiding piano")
            $('#nav-piano').addClass('hidden')
            $('#hide-piano').removeClass('hidden')
        } else {
           console.log("showing piano")
            $('#nav-piano').removeClass("hidden")
            $('#hide-piano').addClass("hidden")
        }
      }
    })
    $("#p-wrapper").on('click', '#hide-piano', function(event) {
      console.log("manually revealed piano tray")
      $('#nav-piano').removeClass("hidden")
      $('#hide-piano').addClass("hidden")  
    })  
}
  
function rotatePiano() {
/* Switch between vertical or horizontal menu depending upon viewport */
  console.log("rotatePiano() running")
  let mediaQuery = window.matchMedia("(max-width: 900px) and (orientation: landscape)")
  if (mediaQuery.matches) {
  /* Update .html for VERTICAL piano for mobile landscape viewports */ 
    console.log("Updating html for vertical piano")
    pianoHorizontal = false
    $("main").addClass("left-piano-margin")
    $("#p-wrapper").removeClass("wrapper-horizontal").addClass("wrapper-vertical")
    $("#nav-piano").removeClass("nav-horizontal").addClass("nav-vertical")
  } else {
  /* Update .html() for HORIZONTAL piano */
    console.log("Updating html for horizontal piano")
    pianoHorizontal = true
    $("main").removeClass("left-piano-margin")
    $("#p-wrapper").removeClass("wrapper-vertical").addClass("wrapper-horizontal")
    $("#nav-piano").removeClass("nav-vertical").addClass("nav-horizontal")
  }
}

window.addEventListener("resize", rotatePiano)
window.addEventListener('orientationchange', rotatePiano)

$(function() {
  listenPianoTouch()
  rotatePiano()
  hidePiano()
})