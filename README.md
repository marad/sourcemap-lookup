# Installation #

Currently only possible way of running the application is cloning this repository.

# Purpose #

Recently I've started using vim as the code editor. When I create CoffeeScript programs I sometimes want to jump to the generated JS file or jump from JS file to it's origin file. I figured it would be nice if vim could also jump to the exact same line in both ways. 

This script is a small building block that I use for this. For given line and column it returns corresponding line and column in source or generated file.

# Usage #

Sourcemap is run as follows
`node sourcemap.js <file> <operation> <line> <column>`

Arguments:<br>
* file - sourcemap file
* operation - possible values:
  * source - gets position in the original file
  * target - gets position in generated file
* line - line number
* column - column number

Program returns two numbers spearated by space.
Numbers represent line and column after translation by source map.

# Dependencies #

This program is built using Mozilla's source-map library (https://github.com/mozilla/source-map/) and this is the only dependency required to run it. (If you don't count NodeJS of course :) )
