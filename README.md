# Assignment 3 - Web Project
## New Media 1000
### Matt Forster, 001044291
#### April 14th, 2014

---------------

## Research Sites:

For my research sites, I picked my two topmost visited sites (excluding school related websites): [github.com][1] and [starcitygames.com][2].

#### GitHub:

![Github Landing Page][gh]

* _Stylistic / design elements_

	* simple, user based interface and landing page (when logged in)
	* easy to use git repository browser
	* easy to use git repository code management

* _What works? What doesn't?_
	* __Works__
		+ The hosted repositories are invaluable to the open source community and GitHub has almost single handedly pushed the community into the general public spotlight by simplifying sharing and contributing.
		+ The recently changed explore page promotes different categories of open source projects - not just the most popular across the board.
	* __Doesn't__
		- The news feed can be spammed by one person working hard and drown out any other projects youre working on.

* _What would you change?_  
Filter the news feed into manageable chunks, perhaps grouping large amount of actions together.

* _Who is the intended audience?_  
Developers, code junkies, anyone interested in using or exploring open source content (from scientists to journalists for the NY times).

#### StarCity Games:

![StarCityGames Home Page][scg]

* _Stylistic / design elements_

	* solid colour styles prevelant throughtout the whole site
	* columnized news presentation
	* modularized site - separating store and news / article pages

* _What works? What doesn't?_
	* __Works__
		+ easy to find articles in chronological order
		+ easy to search the store for products
		+ tagged articles allows for browsing of similar stories
	* __Doesn't__
		- busy homepage, hard to gain a foothold for new users
		- a lot of information is initially hidden by the long length of the homepage
		- account logic and wishlists do not work as expected a lot of the time

* _What would you change?_  
	Fix the bugs with the accounts and wishlists to provide a more solid and flowing experience.

* _Who is the intended audience?_  
	Geeks addicted to cardboard crack (see [cardboard-crack.com][3]), myself included.

## My own site (Imagine):

Imagine's purpose is to create a unique world in each players minds. By using vague descriptions and little direction, I hoped to give the user as much power as possible. I designed the whole website around this theme, and used as little 'colourful' styling as possible to avoid leading the user in a direction other than their own. There is story to the game, but as I am not the best creative writer, I am sure it is lacking. I believe Imagine serves its purpose, giving the player something to think about.

My audience is anybody with an imagination. We don't use our imaginations enough these days (or, people don't read enough novels these days), and sometimes it is nice to have something to exercise it. People of all ages can enjoy the game and gain something from the experience.

I went for a theme that expressed a classic no frills text adventure game. I tried to emulate the look of an old console game, using typing as the input and providing text prompts. As people these days do not use the console much, unless they are an advanced user, it is always fun to bring the days of the command line back into memory. For the styling, I used Mono-spaced font, almost no colour, and a simple white background. I gave as little visual direction as possible, to give the user a chance to create a world of their own inside their mind. I used the HTML5 Boilerplate ([h5bp/html5-boilerplate][4] `css/vendor/boilerplate.css`) CSS file to maximize cross browser compatibility and Twitter's Bootstrap ([twbs/bootstrap][5] `css/vendor/bootstrap.min.css`) CSS library for the grid like div system and initial base styling. I then created my own overrides for specific classes and IDs as needed. I also created specific overrides using media queries in the main CSS file (`css/styles.css`) to allow for responsive design.

The greatest challenge of this project would have been the creation the dynamic map. I wanted to challenge myself during this project, as I have been building my knowledge of browser and web languages for a few years now. One thing I had not done yet was play with the HTML5 canvas element. I decided that a cool addition to the game would be a map - and to stick to my theme of giving no direction, one that would not be immediately clear. This was a cool experience and it opened my knowledge up to libraries like [d3js.org][6].

After the critiques, I made a few changes. The force directed map was to volatile and didn't offer much help to people who weren't careful with it. I made some changes to the variables to allow the map to more readily take its natural form, and to allow users to drag the nodes around more easily. I thought about anchoring the start point at the bottom of the map but decided against it - I want people to have to think about it.

When it comes to things I would do differently, perhaps thinking of other direction descriptors other than compass directions. These directions lead users to believe they are starting in the southern most area, which stops them from thinking of it themselves (maybe its the northern most area?). This is the only guidance that the game provides at this time, and if removed, would hand the experience over to the user completely.
On a side note, I would like to do more HTML5 Canvas, as I don't understand everything about it, just enough to draw the map and use the arbor.js library ([samizdatco/arbor][7] `js/vendor/arbor.js`). I'm sure I'll get around to exploring it this summer. 

As a developer, every time I learn something new I can see it implemented in new and exciting ways. This has great relevance to the web, as it moves forward faster than any other architecture out there.

[1]: https://github.com "Github"
[2]: http://www.starcitygames.com "Star City Games"
[3]: http://cardboard-crack.com "Cardboard Crack Comic Strip"
[4]: https://github.com/h5bp/html5-boilerplate "Github Repository: HTML5 Boilerplate"
[5]: https://github.com/twbs/bootstrap "Github Repository: Bootstrap"
[6]: http://d3js.org "D3 Data Visualization Javascript Library"
[7]: https://github.com/samizdatco/arbor "Github Repository: Arbor"

[gh]: http://mattforster.ca/pictures/githubcap.png "Github Screencap"
[scg]: http://mattforster.ca/pictures/scgcap.png "Star City Games Screencap"

