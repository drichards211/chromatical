function colorizePianos() {
  /* Called by handleFormInput(). Fade-in the colorized logo, fade-out
after delay. Render and colorize the piano-menu buttons. */
  console.log("colorizePianos ran")
  menuActive = true
  $(".piano-circle").html(`<img src="piano-circle-color-2.png" alt="circle piano logo" id="piano-bw" class="fade-in-logo" style="display:none">`)
  $(".fade-in-logo").fadeIn(1600).delay(300).fadeOut(2000)

  if (pianoHorizontal === true) {

    /* Update .html() for HORIZONTAL piano MENU BUTTONS */
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
          <li><a href="#" class="tut piano-button-large white-color" type="button" id="B"><div class="fade-in-text" style="display:none">CONCERTS</div></a></li>
          <li class="black-tut"><a href="#" id="Bb"></a></li>
          <li><a href="#" class="tut piano-button-large white-color" type="button" id="A"><div class="fade-in-text" style="display:none">SIMILAR</div></a></li>
          <li class="black-tut"><a href="#" id="Ab"></a></li>
          <li><a href="#" class="tut piano-button-large white-color" type="button" id="G"><div class="fade-in-text" style="display:none">LISTEN</div></a></li>
          <li class="black-tut"><a href="#" id="Gb"></a></li>
          <li><a href="#" class="tut piano-button-large white-color" type="button" id="F"><div class="fade-in-text" style="display:none">IMAGES</div></a></li>
          <li><a href="#" class="tut piano-button-large white-color" type="button" id="E"><div class="fade-in-text" style="display:none">PURCHASE</div></a></li>
          <li class="black-tut"><a href="#" id="Eb"></a></li>
          <li><a href="#" class="tut piano-button-large white-color" type="button" id="D"><div class="fade-in-text" style="display:none">VIDEOS</div></a></li>
          <li class="black-tut"><a href="#" id="Db"></a></li>
          <li><a href="#" class="tut piano-button-large white-color" type="button" id="C"><div class="fade-in-text" style="display:none">ABOUT</div></a></li>
        </form>`)
      }, 1600)
  }
  
  /* FadeIn() colors and text for piano menu keys */
  fadeIn(2000, 2100)
}

function listenPianoTouch(){
  /* When user clicks a COLORED piano button, change color to bright, 
  play sound, change <body> background color to match, and call renderNewContent() with argument.  
  
  When user clicks a BLACK piano button, just play sound. */
  
  console.log("ListenPianoTouch() running")
  
  const c5 = new Audio("./sounds/c5.mp3")
  c5.preload = "auto"
  const db = new Audio("./sounds/db.mp3")
  db.preload = "auto"
  const d = new Audio("./sounds/d.mp3")
  d.preload = "auto"
  const eb = new Audio("./sounds/eb.mp3")
  eb.preload = "auto"
  const e = new Audio("./sounds/e.mp3")
  e.preload = "auto"
  const f = new Audio("./sounds/f.mp3")
  f.preload = "auto"
  const gb = new Audio("./sounds/gb.mp3")
  gb.preload = "auto"
  const g = new Audio("./sounds/g.mp3")
  g.preload = "auto"
  const ab = new Audio("./sounds/ab.mp3")
  ab.preload = "auto"
  const a = new Audio("./sounds/a.mp3")
  a.preload = "auto"
  const bb = new Audio("./sounds/bb.mp3")
  bb.preload = "auto"
  const b = new Audio("./sounds/b.mp3")
  b.preload = "auto"
  const c6 = new Audio("./sounds/c6.mp3")
  c6.preload = "auto"
  
    /* Piano note C */
    $("#p-wrapper").on('click', '#C', function(event) {
      console.log("piano key C pressed")
      resetPianoColors()   
      $('#C').removeClass('c-color').addClass('c-color-bright')
      $('body').removeClass(`${bodyColor}`).addClass('bg-violet')
      bodyColor = "bg-violet"
      /* $(".bg-violet").fadeIn(2000)  */
      activePianoKey = "C"
      c5.play()
      c5.currentTime=0;
    })
  
    /* Piano note Db */
    $("#p-wrapper").on('click', '#Db', function(event) {
      console.log("piano key Db pressed")
      db.play()
      db.currentTime=0;
    })
  
    /* Piano note D */
    $("#p-wrapper").on('click', '#D', function(event) {
      console.log("piano key D pressed")
      resetPianoColors()   
      $('#D').removeClass('d-color').addClass('d-color-bright')
      $('body').removeClass(`${bodyColor}`).addClass('bg-raspberry')
      bodyColor = "bg-raspberry"
      /* $(".bg-raspberry").fadeIn(2000)  */
      activePianoKey = "D"
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
      $('#E').removeClass('e-color').addClass('e-color-bright')
      $('body').removeClass(`${bodyColor}`).addClass('bg-orange')
      bodyColor = "bg-orange"
      activePianoKey = "E"
      e.play()
      e.currentTime=0;
    })
    
    /* Piano note F */
    $("#p-wrapper").on('click', '#F', function(event) {
      console.log("piano key F pressed")    
      resetPianoColors()   
      $('#F').removeClass('f-color').addClass('f-color-bright')   
      $('body').removeClass(`${bodyColor}`).addClass('bg-yellow')
      bodyColor = "bg-yellow"
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
      $('#G').removeClass('g-color').addClass('g-color-bright')
      $('body').removeClass(`${bodyColor}`).addClass('bg-green')
      bodyColor = "bg-green"
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
      $('#A').removeClass('a-color').addClass('a-color-bright')
      $('body').removeClass(`${bodyColor}`).addClass('bg-cyan')
      bodyColor = "bg-cyan"
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
      $('#B').removeClass('b-color').addClass('b-color-bright')
      $('body').removeClass(`${bodyColor}`).addClass('bg-blue')
      bodyColor = "bg-blue"
      activePianoKey = "B"
      b.play()
      b.currentTime=0;
    })
  }
  
  function preLoadAudio() {
    /* Load all sound files when page loads */
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
  }
  
  function resetPianoColors() {
    /* Resets an active (brightly-colored) piano key to default (faded) color value */
      console.log("resetPianoColors ran")
      if ((activePianoKey === "none") === false) {
        $(`#${activePianoKey}`).removeClass(`${activePianoKey.toLowerCase()}-color-bright`).addClass(`${activePianoKey.toLowerCase()}-color`)
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

/* Hide Piano Tray when scrolling */
$(document).ready(function(){
  console.log("hide piano running")
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50){
      console.log("hiding piano")
      $('#nav-piano').addClass("hidden")
      $('#hide-piano').removeClass("hidden")
    } else {
      console.log("showing piano")
      $('#nav-piano').removeClass("hidden")
      $('#hide-piano').addClass("hidden")
    }
  })
  $("#p-wrapper").on('click', '#hide-piano', function(event) {
    console.log("manually revealed piano tray")
    $('#nav-piano').removeClass("hidden")
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
function fadeIn(time, delay) {
  /* FadeIn() colors and text for piano menu keys */
  console.log("Rendering piano menu COLORS AND TEXT")
  setTimeout(function() {
    console.log("setTimeout ran")
    $(".fade-in-text").fadeIn(time)
    $("#C").removeClass('white-color').addClass('c-color')
    $("#D").removeClass('white-color').addClass('d-color')
    $("#E").removeClass('white-color').addClass('e-color')
    $("#F").removeClass('white-color').addClass('f-color')
    $("#G").removeClass('white-color').addClass('g-color')
    $("#A").removeClass('white-color').addClass('a-color')
    $("#B").removeClass('white-color').addClass('b-color')
  }, delay)
}

function movePiano() {
  /* Renders html() for piano menus. Switches between vertical or horizontal mode depending upon user viewport */
  console.log("movePiano() running")
  
  let mediaQuery = window.matchMedia("(max-width: 900px) and (orientation: landscape)")
  if (mediaQuery.matches) {
  /* Move piano menu to vertical postion for mobile landscape viewports */ 

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
        <li><a href="#" class="tut piano-button-large white-color" type="button" id="B"><div class="fade-in-text" style="display:none">CONCERTS</div></a></li>
        <li class="black-tut"><a href="#" id="Bb"></a></li>
        <li><a href="#" class="tut piano-button-large white-color" type="button" id="A"><div class="fade-in-text" style="display:none">SIMILAR</div></a></li>
        <li class="black-tut"><a href="#" id="Ab"></a></li>
        <li><a href="#" class="tut piano-button-large white-color" type="button" id="G"><div class="fade-in-text" style="display:none">LISTEN</div></a></li>
        <li class="black-tut"><a href="#" id="Gb"></a></li>
        <li><a href="#" class="tut piano-button-large white-color" type="button" id="F"><div class="fade-in-text" style="display:none">IMAGES</div></a></li>
        <li><a href="#" class="tut piano-button-large white-color" type="button" id="E"><div class="fade-in-text" style="display:none">PURCHASE</div></a></li>
        <li class="black-tut"><a href="#" id="Eb"></a></li>
        <li><a href="#" class="tut piano-button-large white-color" type="button" id="D"><div class="fade-in-text" style="display:none">VIDEOS</div></a></li>
        <li class="black-tut"><a href="#" id="Db"></a></li>
        <li><a href="#" class="tut piano-button-large white-color" type="button" id="C"><div class="fade-in-text" style="display:none">ABOUT</div></a></li>
      </form>`)

      /* FadeIn() colors and text for piano menu keys */
      fadeIn(0, 0)
    }
  } else {

    /* Update .html() for HORIZONTAL piano */
    console.log("Updating html for horizontal piano")
    pianoHorizontal = true
    $("main").removeClass("left-piano-margin")
    $('#p-wrapper').html(`<input type="image" id="hide-piano" class="hidden" src="mini-piano-menu.png"/>  
    <div id="nav-piano">
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
      fadeIn(0, 0)
    }
  }
}

window.addEventListener("resize", movePiano);
window.addEventListener('orientationchange', movePiano);