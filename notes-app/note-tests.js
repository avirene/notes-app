noteModel = new NoteModel;

function it(callback, description) {
  console.log(description)
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
it(function () {expect(noteModel).beInstanceOf(NoteModel)}, "checks if it's an instance");