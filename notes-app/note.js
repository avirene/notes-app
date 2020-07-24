"use strict";

class Note {
  constructor() {
    this._text = "";
  }

  set(text) {
    // text = document.getElementById("userInput")
    this._text = text;
    console.log(text)
  }

}