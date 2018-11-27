# chromatical
An API music mashup. The interface combines musical elements with colorful, prismatic light. 

NOTE: This is a work-in-progress. Features to be added are listed below, along with required bugfixes and styling notes.

Features Under Development:
  + "What is Chromatical?" page needs to be added, along with link on main page.
  + Search bar needs to be fixed to top of screen and auto-hide when scrolling.
  + API result pages need 'more' buttons to load additonal content.
  + API result pages need 'view more on x' buttons to link directly to youtube, itunes, wikipedia, etc.
  + Need to add catches to fetch operations.
  + This README needs an 'about' section.

Upcoming Features:
  + Add API fetch calls for Spotify, Tastedive, and Ticketmaster.
  + Render content to the screen for the aforementioned APIs

Accessibility (a11y):
  + Entire page needs to be optimized for a11y, (ARIA tags, full keyboard control, etc.).
  + Needs to be tested with screenreader (NVDA) and optimized as necessary.
 
Styling:
  + All API data renders require extensive styling, "more" button for additional results, and links for more info: "youtube, itunes, spotify, etc."
  + Chromatical search bar needs basic instructions. Needs to be centered. Requires styling.
  + .results-container needs to display height=100% even when empty or with very little content.
  + Horizontal piano menu needs to be animated when hiding / revealing.
  + Fonts need to be selected (Google Web Fonts) and implemented.
  
Housekeeping:
  + Excess .CSS entries to be deleted.
  + Old comments to be deleted.
   
Troubleshooting:
  + Google custom search: How do I request the next page of results?
  + Android soft-keyboard pushes fixed design elements upwards.
  + Browser title-bar on mobile layouts eats-up screen real estate. Design for smaller viewport?
  + If mobile screen is rotated while piano menu is hidden, it rotates to new position as hidden, (needs to be visible).

