note = new Note;

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
      note.set('hello')
      if (note._text !== ("")) {
        console.log('Pass')
      } else {
        console.log('Fail')
      }
    }
  }
}

// test
it(function () {expect(note).beInstanceOf(Note)}, "checks if it's an instance");

it(function () {expect(note._text).toEqual("")}, "checks textbox is empty on creation");

it(function () {expect(note._text).toNotEqual("")}, "checks textbox contains text");

var notebook = new NoteBook();
var note = new Note("blah");
notebook.add(note);
// notebook.list();
// note.toHtml();
// note.summary();
notebook.toHtml();
<ul>
  <li>blah</li>
</ul>