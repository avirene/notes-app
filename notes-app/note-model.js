"use strict";

(function(exports) {
  function NoteModel() {
    this._text = "";
  };

  NoteModel.prototype = {
    text: function() {
      return this._text;
    },

    set: function(text) {
      this._text = text;
    },

  };

  exports.NoteModel = NoteModel;
})(this);