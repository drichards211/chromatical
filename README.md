# chromatical
An API music mashup. The interface combines musical elements with colorful, prismatic light. 

NOTE: This is a work-in-progress. Features to be added are listed below, along with required bugfixes and styling notes.

Features Under Development:
  + Add "What is Chromatical?" link on main page.
  + API result pages need 'view more on x' buttons to link directly to youtube, itunes, wikipedia, etc.
  + Need to add catches to fetch operations.
  + This README needs an 'about' section.

Upcoming Features:
  + Add API fetch calls for Spotify, Tastedive, and Ticketmaster.
  + Render content to the screen for the aforementioned APIs.
  + Use transitions for all content pages, no sudden renders.

Accessibility (a11y):
  + Entire page needs to be optimized for a11y, (ARIA tags, full keyboard control, etc.).
  + Needs to be tested with screenreader (NVDA) and optimized as necessary.
 
Styling:
  + Finish page styling for youtube, wikipedia, google, and itunes.
  + Chromatical search bar button needs to be sized to match search bar and abutted so as to look embedded within. 
  + Horizontal piano menu needs to be animated when hiding / revealing.
  + Tweak font sizes and layout for smaller screens.
    
Housekeeping:
  + Excess .CSS entries to be deleted.
  + Old comments to be deleted.
   
Troubleshooting:
  + Google custom search: How do I request the next page of results?
  + Android soft-keyboard pushes fixed design elements upwards.
  + Browser title-bar on mobile layouts eats-up screen real estate. Design for smaller viewport?
  + If mobile screen is rotated while piano menu is hidden, it rotates to new position as hidden, (needs to be visible).
  + Legend text left-aligns in Firefox browser... known bug. Either determine a workaround or discontinue using legend.
  + Can't add scrolling-marquee effect to form placeholder text. Impossible???

