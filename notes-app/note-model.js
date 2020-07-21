"use strict";

class NoteModel {
  constructor() {
    this._text = "";
  }

  getText() {
    return this._text;
  }

  set(text) {
    this._text = text;
  }
  
}