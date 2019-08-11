'use strict'

let activePianoKey = "none"
let pianoHorizontal = true

function colorizePiano() {
/* Render and colorize the piano-menu buttons. */
  console.log("colorizePiano() ran")
  console.log('Rendering piano menu buttons')
  
  /* Make sure the piano isn't hidden */
  showPiano(true)
      
  /* Update .html() for piano MENU BUTTONS */
  setTimeout(function() {
    $(".piano-menu").html(
      `<nav class="select-content fade-in" role="navigation"> 
        <li><button class="anchor piano-button-large white-color" id="C"><div class="fade-in-text rotate-text text-c" style="display:none">ABOUT</div></button></li>
        <li><button class="anchor piano-button-large white-color" id="D"><div class="fade-in-text rotate-text text-d" style="display:none">VIDEOS</div></button><span id="Db"></span></li>
        <li><button class="anchor piano-button-large white-color" id="E"><div class="fade-in-text rotate-text text-e" style="display:none">IMAGES</div></button><span id="Eb"></span></li>
        <li><button class="anchor piano-button-large white-color" id="F"><div class="fade-in-text rotate-text text-f" style="display:none">PURCHASE</div></button></li>
        <li><button class="anchor piano-button-large white-color" id="G"><div class="fade-in-text rotate-text text-g" style="display:none">LISTEN</div></button><span id="Gb"></span></li>
        <li><button class="anchor piano-button-large white-color" id="A"><div class="fade-in-text rotate-text text-a" style="display:none">SIMILAR</div></button><span id="Ab"></span></li>
        <li><button class="anchor piano-button-large white-color" id="B"><div class="fade-in-text rotate-text text-b" style="display:none">CONCERTS</div></button><span id="Bb"></span></li>
      </nav>`)
  }, 1600)
  
  /* Fade-in colors and text for piano menu keys */
  setTimeout(function() {
    $(".fade-in-text").fadeIn(2000)
    $("#C").removeClass('white-color').addClass('C-color')
    $("#D").removeClass('white-color').addClass('D-color')
    $("#E").removeClass('white-color').addClass('E-color')
    $("#F").removeClass('white-color').addClass('F-color')
    $("#G").removeClass('white-color').addClass('G-color')
    $("#A").removeClass('white-color').addClass('A-color')
    $("#B").removeClass('white-color').addClass('B-color')
    renderBorder("hide") /*in index.js*/
  }, 2100)
  
  /* Replace black & white mini-piano-button with colorized version */
  $('#mini-piano-button').html(`
    <input type="image" id="hide-piano" src="assets/images/mini-piano-menu.png"/>`
  )
}

function listenPianoTouch(){ /*
When user clicks a COLORED piano <button>:
    (1) Reset any previously clicked button to normal color.
    (2) Change <body> background-color and mini-logo color to match new button. 
    (3) Change new piano button color to bright. 
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
      console.log(`[Piano key ${noteID} pressed]`)
      if (noteID.length < 2) { 
      /* WHITE KEYS ONLY */
        if(activePianoKey === "none") {
          renderMiniBanner() /*in index.js*/
        }
        /* (1) */
        resetPianoColors()
        /* (2) */
        $('body').removeClass(`bg-${activePianoKey}`).addClass(`bg-${noteID}`)
        $('#piano-bw-mini').removeClass(`shadow-${activePianoKey}`).addClass(`shadow-${noteID}`)
        /* (3) */
        $(`#${noteID}`).removeClass(`${noteID}-color`).addClass(`${noteID}-color-bright`)
        /* (4) */
        activePianoKey = noteID
        /* (5) */
        pianoSounds[noteID].play()
        pianoSounds[noteID].currentTime = 0
        /* (6) */
        renderNewContent(`${APINames[noteID]}`, `${noteID}`) /*in index.js*/
      } else {
      /* BLACK KEYS ONLY */
        /* (7) */
        pianoSounds[noteID].play()
        pianoSounds[noteID].currentTime = 0
      }
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
/* Resets piano menu keys to white, and <body> background to grey */
  console.log("resetPianoKeys() ran")
  $('body').removeClass(`bg-${activePianoKey}`).addClass(`bg-none`)
  $('#piano-bw-mini').removeClass(`shadow-${activePianoKey}`).addClass(`shadow-none`)
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
    <input type="image" id="hide-piano" src="assets/images/mini-piano-menu-bw.png"/>`
  )
}

function handleScroll() {
/* Hide HORIZONTAL Piano Tray when scrolling */
  console.log("handleScroll() running")
  let lastScrollPosition = 0
    $(window).scroll(function(){
      let currentScroll = $(this).scrollTop()
      if (pianoHorizontal === true) {
        if (currentScroll > lastScrollPosition) {
        // User is scrolling down:
          showPiano(false)
        } else if (currentScroll < lastScrollPosition) {
        // User is scrolling up:
          showPiano(true)
        }
        lastScrollPosition = currentScroll
      }
    })
    $("#p-wrapper").on('click', '#hide-piano', function(event) {
      console.log("handleScroll() manually revealed piano tray")
      showPiano(true)
    })  
}

function rotatePiano() {
/* Switch between vertical or horizontal menu depending upon viewport */
  console.log("rotatePiano() running")
  let mediaQuery = window.matchMedia("(max-width: 900px) and (min-width: 568px) and (orientation: landscape)")
  if (mediaQuery.matches) {
  /* Update .html for VERTICAL piano for mobile landscape viewports */ 
    console.log("Updating html for vertical piano")
    pianoHorizontal = false
    showPiano(true) /* Make sure piano tray is visible before rotating */
    $('#hide-piano').addClass("hidden") /* Hide the mini-piano-button */
    $("main").addClass("left-piano-margin")
    $("#p-wrapper").removeClass("wrapper-horizontal").addClass("wrapper-vertical")
    $("#nav-piano").removeClass("nav-horizontal").addClass("nav-vertical")
  } else {
  /* Update .html for HORIZONTAL piano */
    console.log("Updating html for horizontal piano")
    pianoHorizontal = true
    $('#hide-piano').removeClass("hidden") /* Reveal mini-piano-button */
    $("main").removeClass("left-piano-margin")
    $("#p-wrapper").removeClass("wrapper-vertical").addClass("wrapper-horizontal")
    $("#nav-piano").removeClass("nav-vertical").addClass("nav-horizontal")
  }
}

function showPiano(bool, duration, wait) {
/* Show or hide the piano */
  if (bool === true) {
  /* show the piano */
    console.log('showPiano() showing piano')
    setTimeout(function() {
      $('#nav-piano').fadeIn(duration)
    }, wait)
  } else if (bool === false) {
  /* hide the piano */
    console.log('showPiano() hiding piano')
    setTimeout(function() {
      $('#nav-piano').fadeOut(duration)
    }, wait)
  }
}

function handleSoftKeyboard() {
  /* The Android soft keyboard forces a window resize, (unlike the iPhone keyboard which is an overlay). This 
  function determines when the Android keyboard is active, and hides the piano in portrait mode to prevent obscuring 
  the input field. */
  let portrait = window.matchMedia("(orientation: portrait)")
  let initialOrient = (portrait.matches ? 'portrait' : 'landscape')
  let initialHeight = window.innerHeight
  console.log(`Intitial viewport orientation = ${initialOrient}`)
  console.log(`Intitial viewport height = ${initialHeight}px`)
  let duckPiano = function() {
    console.log('Screen resize detected: duckPiano() running')
    let landscape = window.matchMedia("(orientation: landscape)")
    let newOrient = (landscape.matches ? 'landscape' : 'portrait')
    let newHeight = window.innerHeight
    console.log(`New viewport orientation = ${newOrient}`)
    console.log(`New viewport height = ${newHeight}px`)
    if ((/Mobi|Android/i.test(navigator.userAgent)) && (newOrient === initialOrient) && 
      (newHeight < (initialHeight * .9)) && !(landscape.matches)) {
    /* If the device is mobile, and the screen orientation hasn't changed, and the current viewport height is 
    < 90% of initialHeight, the soft-keyboard is likely responsible for resize. 
    Hide the piano if the screen orientation is portrait: */
      console.log('Android soft-keyboard detected: ducking the piano')
      showPiano(false, 0, 0)
    } else {
    /* The device isn't mobile, or else the resize was caused by rotation or scrolling, not the soft-keyboard. 
    Update initialOrient and initialHeight values: */
      initialOrient = newOrient
      initialHeight = newHeight
    }
  }
  window.addEventListener("resize", duckPiano)
}

window.addEventListener("resize", rotatePiano)

$(function() {
  listenPianoTouch()
  rotatePiano()
  handleScroll()
  handleSoftKeyboard()
})
