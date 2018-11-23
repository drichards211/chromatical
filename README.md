# chromatical
An API music mashup. The interface combines musical elements with colorful, prismatic light. 

NOTE: This is a work-in-progress. Features to be added are listed below, along with required bugfixes and styling notes.

Features Under Development:
  + "What is Chromatical?" page needs to be added, along with link on main page.

Upcoming Features:
  + Add API fetch calls for Spotify, Tastedive, and Ticketmaster.
  + Render content to the screen for the aforementioned APIs

Accessibility (a11y):
  + Entire page needs to be optimized for a11y, (ARIA tags, full keyboard control, etc.).
  + Piano menus are not currently navigable via keyboard.
  + Font sizes don't increase / decrease with CTRL + / -
  + Needs to be tested with screenreader (NVDA) and optimized as necessary.

Styling:
  + All API data renders require extensive styling, "more" button for additional results, and links for more info: "youtube, itunes, spotify, etc."
  + Chromatical search bar needs basic instructions. Needs to be centered. Requires styling.
  + Search bar needs to be fixed to top of screen and auto-hide when scrolling.
  + .results-container needs a colored border and a drop shadow.
  + .results-container needs to display height=100% even when empty or with very little content.
  + All piano keys on vertical menu need to be animated, not just center-octave.
  + Horizontal piano menu needs to be animated when hiding / revealing.
  + All \<body\> background colors require a fade-in transition.
  + Fonts need to be selected (Google Web Fonts) and implemented.
  
Housekeeping:
  + Excess .CSS entries to be deleted.
  + Old comments to be deleted.
  + Add new comments to better clarify code.
 
Troubleshooting:
  + Google custom search: How do I request the next page of results?
  + How will manual font-resizing affect piano menu display and usability? Possible to resize text without changing visible menu elements?
  

