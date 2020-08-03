# New York Times Spelling Bee Automator for iOS

Scripts to automate the New York Times Spelling Bee game on their Crossword iOS app.

### Requirements:

* Jailbroken iPhone
* [AutoTouch Jailbreak Tweak](https://autotouch.net/) with Basic/Pro license (>= $9.99/yr) for JavaScript language engine
* [‎New York Times Crossword iOS app](https://apps.apple.com/us/app/new-york-times-crossword/id307569751)
* [words.txt](https://raw.githubusercontent.com/dwyl/english-words/master/words.txt) English word list. (From https://github.com/dwyl/english-words)
  * Run `./download_words_txt.sh` to download `words.txt`
* Ruby (Recommended version 2.x)

### Steps

* Copy `config.example.yml` to `config.yml`: `cp config.example.yml config.yml`
* Open the AutoTouch dashboard and enter your phone's IP: http://d.autotouch.net
* Open the NYT Crossword iOS app, go to the "Spelling Bee" game 
* Update the letters in `config.yml` and `autotouch-script.js`
* Run the `find_words.rb` Ruby script to print out a list of matching words
* Update the word list array in `autotouch-script.js`, and upload that script to your phone
* Run the script!


### Timing

Adjust `const TOUCH_DELAY = 150000;`:

* `150000`: See all the letters being typed to debug any problems.
* `1500`: Super fast entry

### Known Limitations

* Once you hit the "Genius" number of points, the app shows a full-screen popup message that needs to be cleared. You'll need to click "OK" and then re-run the script to enter any remaining words.
  * It would be possible to handle this case automatically using AutoTouch's image/text detection features:
    * [Image detection](https://docs.autotouch.net/js/#how-to-find-areas-matching-the-specified-image-from-the-screen)
    * [Text detection](https://docs.autotouch.net/js/#how-to-find-text-on-the-screen)
  * Could also use the "find text" feature to parse the Rankings page and get the list of points for each ranking.

### Why did you do this?

It was fun

### License

[MIT](./LICENSE)
