<!-- Now, answer these questions in the .md file:

What does it do?
 What interactive elements exist?
 How do you interact with them?
 What visual effects are produced by interacting?
How does it do it?
 What existing HTML elements are changed?
 What new HTML elements are created?
 What CSS styles are used to produce the effect? -->

# What does it do?

## Interactive elements

* _header_
* _paragraph_
* _header-icons_

## How do we interact with them, and what changes?

* _header_: mouse over
          : on click - expand the section under h1 (what my P will be)

          : on click when expanded - collapse section under h1 (P goes away)

* _header-icon_: arrow points right  
on hover, arrow points bottom right.  
on click, arrow points down

* _header-icon-color_: grey to start  
on hover, color to blue
on click, color goes to blue permanently

## How does it do it?

* _Paragraph click_: there is probably a JS property for reveal or show or open or something...does it create the P? on click, text content of P = content? seems like the wrong place to keep content.

* _header-icon-color_: I would use the CSS property `:hover` if I was going to do the color change in CSS. Is there an equivalent in JS?
