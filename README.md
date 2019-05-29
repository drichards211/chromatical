# chromatical
An API music mashup. The interface combines musical elements with colorful, prismatic light. 

Live version of the app is [here:](https://drichards211.github.io/chromatical/)


NOTE: This is a work-in-progress. Features to be added are listed below, along with required bugfixes and styling notes.

Features Under Development:
  * [ ] API result pages need 'view more on x' buttons to link directly to youtube, itunes, wikipedia, etc.
  * [ ] Individual API results pages need a 'more' button to load additional results.
  * [ ] Add transparent 'floating' button to return to top of page.
  * [x] Make piano logo clickable, leads to "What is?" section.
  * [ ] This README needs an 'about' section.

Upcoming Features:
  * [ ] Add fetch calls for Spotify, Tastedive, and Ticketmaster.
  * [ ] Render content to the screen for the aforementioned APIs.
  * [ ] Use transitions for all content pages, no sudden renders.
  * [ ] Make entire piano playable.

Accessibility (a11y):
  * [X] Entire page needs to be re-checked for a11y, (ARIA tags, full keyboard control, etc.).
  * [x] Needs to be tested with screenreader (NVDA) and optimized if necessary.
 
Styling:
  * [ ] Horizontal piano menu needs to be animated when hiding / revealing.
  * [x] Test moving horizontal piano menu to right side of screen instead of left.
      
Housekeeping:
  * [ ] Some of the JavaScript code can be drier. 
  * [ ] JavaScript commenting should be reviewed for clarity.
   
Troubleshooting:
  * [ ] Android soft-keyboard pushes fixed design elements upwards. 
    	Update: Unavoidable. Android soft-keyboard resizes browser window by design.
    	Possible work-around: Detect when soft-keyboard is displayed and hide piano menu to re-gain screen real-estate.
  * [ ] Android soft-keyboard should be auto-hidden when the search-form is submitted.
  * [ ] Google customsearch API is limited to 100 requests / day. 
    	Replace with Bing API for images.
  * [ ] There seems to be agressive word-wrapping on Firefox but not on Chrome. Investigate.
  * [x] Entered search terms persist inside search-form in Firefox even after F5 hard refresh.
  * [ ] Wikipedia occassionally returns a re-direct page. 
    	Need to enable linking so user can select the exact page they want.
