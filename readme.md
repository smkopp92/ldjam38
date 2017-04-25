# Extraterrestrial Escape 
(a game built in 72 hours for Ludum Dare #38 using Node.js and Phaser)

![Gameplay](/deploy/assets/game_capture.gif)

## Hosted Version
[Play now!](http://ld38.bitballoon.com/)

## Local Setup on macOS
### Run the following from the directory:

`npm install`

`npm install -g grunt-cli`

`grunt`

## Local setup on Windows (w/ Linux subsystem)

### First, [install the Linux subsystem and enable dev mode.](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)

### Open a command prompt and run:
`bash`

`sudo apt-get install npm`

`sudo apt-get update`

`sudo apt-get install xdg-utils --fix-missing`

`ln -s /usr/bin/nodejs /usr/bin/node`

### CD to the project directory and run:

`npm install`

`npm install -g grunt-cli`

`grunt`

Unlike in macOS, Grunt won't automatically open a tab in a browser.

### Open [http://localhost:8080/index.html](http://localhost:8080/index.html) manually.

## Credits

### Game design and development:
- [Suzi Curran](https://github.com/suzicurran)
- [Sam Backus](https://github.com/sbackus)
- [James Curran](https://github.com/starslikedust)
- [Sebastian Kopp](https://github.com/smkopp92)
- [Ezra Skolnik](https://github.com/eskolnik)

### Assets: 

 - Sprites, tiles, and SFX from kenney.nl (Thanks, folks!)
 - "Rainbow Run" background music from glitchthegame.com (Thanks, Tiny Speck/Slack!)

## This project was built on the Phaser Project Template

To get started on your own game, all you need to do is download a <a target="_blank" href="https://github.com/gamecook/phaser-template-project">copy of this template</a>, the latest version of <a target="_blank" href="https://github.com/photonstorm/phaser">Phaser</a>, [Node.js](http://nodejs.org) and [Grunt](http://gruntjs.com/).
