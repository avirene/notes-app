noteModel = new NoteModel;

function it(callback) {
  callback()
};

function expect(a) {
  return {
    beInstanceOf: function (b) {
      if (a instanceof b) {
        console.log('Pass')
      } else {
        console.log('Fail')
      }
    }
  }
}


// test
it(function () {expect(noteModel).beInstanceOf(NoteModel)});