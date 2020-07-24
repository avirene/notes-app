"use strict";

class Note {
  constructor() {
    this._text = "";
  }

  // getText() {
  //   return this._text;
  // }

  set(text) {
    // text = document.getElementById("userInput")
    this._text = text;
    console.log(text)
  }

  // textInput(){
  //   var userInput = document.getElementById('user_input').value;
  //   document.getElementById('myText').textContent = userInput;
  // }

}