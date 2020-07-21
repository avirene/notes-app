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
    },
    toEqual: function () {
      if (a === ("")) {
        console.log('Pass')
      } else {
        console.log('Fail')
      }
    },
    toNotEqual: function () {
      noteModel.set('hello')
      if (noteModel._text !== ("")) {
        console.log('Pass')
      } else {
        console.log('Fail')
      }
    }
  }
}

// test
it(function () {expect(noteModel).beInstanceOf(NoteModel)}, "checks if it's an instance");

it(function () {expect(noteModel._text).toEqual("")}, "checks textbox is empty on creation");

it(function () {expect(noteModel._text).toNotEqual("")}, "checks textbox contains text");