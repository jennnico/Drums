# Drums
"Drum Machine" plays notes when you press.

**The user can:**

- turn the machine on/off

- choose drums or guitar

- see what "note" is being played in a display

- adjust the volume.


**Areas for improvement:**

- Allow the user to use the keyboard to play "notes".

- Allow the user to record and playback. 

- The drum sounds are repeated. Code needs to be refactored so it is DRY.


**Code Highlights**

_CSS:_

- This project includes CSS FlexBox, SCSS variables, and nested CSS.

_React:_

- The `drumOn()` function turns the drums on and off using `this.setState`. The notes will only play if the state of `on` is `true`.

- The `playAudio()` function is featured in the next three bullets:

 - "Notes" are MP3s stored in an array: `sounds[]`. `onclick()` and `.play()` allow notes to be played, using the `playAudio()` function.

 - The `playAudio()` function also sets the `state` of `display` to the current button's `id`. This allows the user to see what "note" they have played in the display screen, which is set to display `{this.state.display}`.

  - The `changeVolume()` function allows the user to change the volume, using `this.setState.` The current volume corresponds to (.01)(value of `<input type="range">`) (The value must be a decimal). `audio.volume` is set to `this.state.volume`, the current volume, inside of the `playAudio()` function. The display is set to `{(this.state.volume)*100}`, so that the user sees a whole number for volume level.

- When the user wants to switch "instruments," the `switchInstrument()` function changes the state of `drums`(true or false) and `sounds`(array of drum sounds or guitar sounds), using `this.setState`. 


