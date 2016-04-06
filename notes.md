# Talk notes

## 1. Title TBC
- Thank you hello everyone.
- Tonight I'm going to give you an overview of Front End build tools, what they are, why you would need them and some examples of how you might use them.
- Warning: this talk contains some swearing, Donald Trump and some retro memes.

## 2. Who the hell are you?
- Firstly, my name is Matt.
- Matthewbeta on these things and most other places
- I am chief curmudgeon at a design studio in Cardiff, called Bluegg

## 3. [BLUEGG LOGO]
- You may have heard of us for our design or our strong rap game

## 4. [rap still]

## 5. Why the hell would I use build tools?
- Well you might ask. The short answer is because it makes your life easier, but that wouldn't be much of a talk.
- I will go over 3 facets of coding and show how build tols can help with them.

## 6. Reason #1: Compiling
- Coding languages are not all born equal
- Some are very "low level" and are as close to computers native language as possible, meaning they are very performant and super fast. These are the sort of languages you put on space ships or program operating sstems with.
- Lower level languages tend to be harder to write and make it easier for developers to make mistakes, so other smart people write languages on top of the low level ones, which sacrifice some level of performance for ease of authoring
- In web world, the interpretor of the code is the browser.
CSS is pretty fast these days, but if you have written it for more than 5 minutes, it is annoying. Hence CSS preprocessors, you hve probably heard of Sass, maybe Less or Stylus. These are languages that we use to get cool features and error reporting, but the browser does not understand them, so we need to compile them into CSS.

## 7. Example #1: Online Code Editors
- These are web apps where you can open a new project, edit the code inline and have the result displayed in the browser instantly.
- Most of these have support for preprocessing some languages.

## 8. What are they good for?
- Getting up and running really fast. No setup, no configuration just open a tab and code
- This is useful for testing, debugging, showing quick examples, trying out ideas. I think of it as my sketchbook

## 9. Codepen.io
- My preferred one is called codepen. Others are available but they didn't give me any wicked cool stickers
- Pros: Its free (for most features and public pens), its social, its very creative & design focused (the original idea came from Dribbble for code I think), many sweet features.
- Great resource for patterns, or collecting inspiration
- Live coding (classroom), pair coding (colab mode), preprocess All. The. Things.

## CODEPEN DEMO  ##
* set up a pen
* preprocess stuff
* example
* export files

## 10. Reason #2: Delivery
- Here is a picture of my desk

# 11. [Desk Img]
- Your desk is probably almost identical to this yeah?
- Everything is optimised and configured to make your experience at the computer as easy and comfortable as possible.
- Easy reach of your cacti, little nook for your pen in your fucking mouse mat, wtf is that for. Seriously.
- The issue with this is when you want to move desks, you cant just carry the whole lot like this. You need to pack it all (neatly) into as small a box as possible and move it to the new spot

## 12. [NEW SLIDE TBC]
- Code is basically the same. You want to split it all up and organise it into neat files and folders, layout everything just so so its easy to find, read and write. In otherwords fit for human consumption.
- To optimise for the browser though we need to bundle everything up into the smallest and fewest files possible. This is to save on network and bandwidth. Not just important on mobile, Have you ever tried to use the internet on a train on a laptop? I have. It sucked ass.
- We need to remove all the whitespace, jam all the files together and make the code suitable for robots.

## 13. Example #2: Desktop Apps
- These you can download from your app store of choice, install on your computer and get them to compile and prepare your code for delivery to a browser.

## 14. What are they good for?
- Generally easy to use
- No scary coding or command line to deal with
- Usually offer some form of web server so you can preview your code with live reloading
- Make it easy to combine files for build

## 15. Prepros
- Drag and Drop easy
- Cross Platform
- Cheap as (several bags of) chips ($29)
- Loads of preprocessor goodness
- Minification and concatenation (removing white space and munjing together files - ALSO IMAGES)
- Lots of config options

## PREPROS DEMO ##
* Drag and drop a folder
* Show how its separated
* Demo site in browser
* Show live reload working by changing some of the code

## 16. Reason #3: Laziness/Boredom/monotony
- These tools are all well and good but there are a lot of other things you could/should be doing
- Some of these things (and ones we've already looked at) can be run manually through apps or the command line, so you could do that..
- Our typical build requires the following:
- Styles: Sass compilation, Base 64 encoding of images (sometimes), CSS prefixing, CSS minification, CSS cache busting
- Javascript: Concatenating code, minifying code, consuming local and 3rd party modules, dynamically configuring modernizr.
- Images: minifying bitmap and SVG images, SVG icon sprites, providing PNG fallbacks
- HTML: includes, could include minification
- Could also include linting, unit testing, checking style guides, generating favicons and code

## 17. [FUNNY IMG TBC]

- Running all of this manually is not cool.
- This is boring and I am lazy
- 21. What if we could program them all. What if we could watch for changes. What if we could encue tasks? What if there were hundreds of cool tasks we could get from the Internet?

## 18. Example #3: Javascript Build Tools
- These are where all the developers are right now.
- They allow complete control of your Build
- You can update or tweak it whenever you want without the maintainer needing to update an app
- They can do everything we've seen so far and a lot more
- They are a bit more technical though

## 19. The tools of the build tool trade
- Node and NPM
-- Node is Javascript that can run outside of a browser, on a server (which is just a computer like yours or mine)
-- NPM is a package manager for Node which makes it super easy to install packages to your project or your computer
-- We can install Node and NPM by going to the NodeJS website and hitting the big green button
-- Most JS build tools are installed using NPM
- Github
-- Most of the Tools and plugins for them are open source (basically they're free). ~~Most~~ All open source code is hosted on Github. Generally they will have a page with a set of documentation, which will be on github. This is where you go to work out how the tools or plugins work
- The command line
-- Do not fear the command line. It is not as scary as you might think
-- If you use these tools, you will get comfortable in the command line very quickly

## 20. Grunt
- Arguably the oldest and most used JS build tool
- Arguaby, No longer the coolest
- Arguably one of the easiest to get your feet wet with, as it favours configuration over writing code
- Arguably the coolest logo

## 21. Basics
- Grunt is software that runs in your command line
- It has a huge number of plugins (tasks) to do everything from minify javascript, to deploy via FTP, to playing a beep when you get an error
- It is a task runner - you configure tasks and tell it when to run those tasks
- This can be explicit (eg. typing ```grunt minify_images```) or it can respond to events, like when you save a file or when another task finishes running (like sass runs > then css minification runs)

## 22. [Install plugins example]
- You install plugins through the command line using NPM
```
npm install grunt-sass grunt-contrib-watch --save-dev
```
- here we install a watch task which we can tell to watch our sass files and a sass task to compile our sass when it changes

## 23. [Gruntfile Example]
- You configure grunt, and its plugins using the Gruntfile. This is just a Javascript file.
- Here is some boilerplate you will cut and paste every time you create a gruntfile
- You can see here we configure the watch task
- Here is the sass task
- and we need to create a default task for when we enter ```grunt``` in the cmd line

## [Grunt Demo] ##
* load project in atom
* load terminal
* npm init -y
* npm install --save-dev grunt
* npm install --save-dev grunt-sass grunt-contrib-watch grunt-contrib-uglify grunt-browser-sync
* show grunt file (more complex but same principle)
* run grunt
* pops up thanks and goodnight message
