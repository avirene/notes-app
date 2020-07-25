"use strict";

class Note {
  constructor() {
    this._text = "";
  }

  set(text) {
    this._text = text;
    console.log(text)
  }

}