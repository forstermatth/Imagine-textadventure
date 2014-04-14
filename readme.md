# Imagine - Text Adventure

---------------

Imagine's purpose is to create a unique world in each players minds. By using vague descriptions and little direction, I hoped to give the user as much power as possible. I designed the whole website around this theme, and used as little 'colourful' styling as possible to avoid leading the user in a direction other than their own. There is story to the game, but as I am not the best creative writer, I am sure it is lacking. I believe Imagine serves its purpose, giving the player something to think about.

My audience is anybody with an imagination. We don't use our imaginations enough these days (or, people don't read enough novels these days), and sometimes it is nice to have something to exercise it. People of all ages can enjoy the game and gain something from the experience.

I went for a theme that expressed a classic no frills text adventure game. I tried to emulate the look of an old console game, using typing as the input and providing text prompts. As people these days do not use the console much, unless they are an advanced user, it is always fun to bring the days of the command line back into memory. For the styling, I used Mono-spaced font, almost no colour, and a simple white background. I gave as little visual direction as possible, to give the user a chance to create a world of their own inside their mind. I used the HTML5 Boilerplate ([h5bp/html5-boilerplate][1] `css/vendor/boilerplate.css`) CSS file to maximize cross browser compatibility and Twitter's Bootstrap ([twbs/bootstrap][2] `css/vendor/bootstrap.min.css`) CSS library for the grid like div system and initial base styling. I then created my own overrides for specific classes and IDs as needed. I also created specific overrides using media queries in the main CSS file (`css/styles.css`) to allow for responsive design.

The greatest challenge of this project would have been the creation the dynamic map. I wanted to challenge myself during this project, as I have been building my knowledge of browser and web languages for a few years now. One thing I had not done yet was play with the HTML5 canvas element. I decided that a cool addition to the game would be a map - and to stick to my theme of giving no direction, one that would not be immediately clear. This was a cool experience and it opened my knowledge up to libraries like [d3js.org][3].

After the initial critiques, I made a few changes. The force directed map was to volatile and didn't offer much help to people who weren't careful with it. I made some changes to the variables to allow the map to more readily take its natural form, and to allow users to drag the nodes around more easily. I thought about anchoring the start point at the bottom of the map but decided against it - I want people to have to think about it.

When it comes to things I would do differently, perhaps thinking of other direction descriptors other than compass directions. These directions lead users to believe they are starting in the southern most area, which stops them from thinking of it themselves (maybe its the northern most area?). This is the only guidance that the game provides at this time, and if removed, would hand the experience over to the user completely.
On a side note, I would like to do more HTML5 Canvas, as I don't understand everything about it, just enough to draw the map and use the arbor.js library ([samizdatco/arbor][4] `js/vendor/arbor.js`). I'm sure I'll get around to exploring it this summer. 

As a developer, every time I learn something new I can see it implemented in new and exciting ways. This has great relevance to the web, as it moves forward faster than any other architecture out there.

[1]: https://github.com/h5bp/html5-boilerplate "Github Repository: HTML5 Boilerplate"
[2]: https://github.com/twbs/bootstrap "Github Repository: Bootstrap"
[3]: http://d3js.org "D3 Data Visualization Javascript Library"
[4]: https://github.com/samizdatco/arbor "Github Repository: Arbor"

