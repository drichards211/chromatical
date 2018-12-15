# chromatical
An API music mashup. The interface combines musical elements with colorful, prismatic light. 

NOTE: This is a work-in-progress. Features to be added are listed below, along with required bugfixes and styling notes.

Features Under Development:
  + API result pages need 'view more on x' buttons to link directly to youtube, itunes, wikipedia, etc.
  + This README needs an 'about' section.

Upcoming Features:
  + Add fetch calls for Spotify, Tastedive, and Ticketmaster.
  + Render content to the screen for the aforementioned APIs.
  + Use transitions for all content pages, no sudden renders.

Accessibility (a11y):
  + Entire page needs to be checked for a11y, (ARIA tags, full keyboard control, etc.).
  + Needs to be tested with screenreader (NVDA) and optimized if necessary.
 
Styling:
  + Finish page styling for iTunes, add any required branding.
  + Add ability to play iTunes song samples within Chromatical (if possible).
  + Horizontal piano menu needs to be animated when hiding / revealing.
  + Test moving horizontal piano menu to right side of screen instead of left.
      
Housekeeping:
  + Some of the JavaScript code can be drier. 
  + JavaScript commenting should be reviewed for clarity.
   
Troubleshooting:
  + Android soft-keyboard pushes fixed design elements upwards. 
    Update: Unavoidable. Android soft-keyboard resizes browser window by design.
    Possible work-around: Detect when soft-keyboard is displayed and hide piano menu to re-gain screen real-estate.
  + Android soft-keyboard should be auto-hidden when the search-form is submitted.
  + Google customsearch API is limited to 100 requests / day. 
    Replace with a different API for music and band images that has fewer restrictions.
  + There seems to be agressive word-wrapping on Firefox but not on Chrome. Investigate.
  + Search terms persist inside search-form in Firefox even after F5 hard refresh.
  + Wikipedia occassionally returns a re-direct page. 
    Need to enable linking so user can select the exact page they want.
