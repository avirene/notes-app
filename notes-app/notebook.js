"use strict";

class NoteBook {
  constructor() {
    this._notes = [];
  }

  add(text) {
    this._notes.push(text);
  }
  getText() {
    return this._notes;
  }

}