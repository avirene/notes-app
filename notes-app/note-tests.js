// const { NoteModel } = require("./notes-app/note-model");

(function (exports) {
  function testNoteModel() {
    var noteModel;

    if (noteModel !== new NoteModel()) {
      throw new Error("Not an instance of a NoteModel");
    }
    console.log("this is a test");
    return('a test')
  };

  testNoteModel();
})(this);