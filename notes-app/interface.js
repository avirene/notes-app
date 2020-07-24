 var notebook = new NoteBook();
// when submit is clicked,
// read the text from the text area

function text() {
  var input = document.getElementById("user_input").value;
  note = new Note();
  note.set(input)
  notebook.add(note);
  addnotes(notebook)
  // document.getElementById("display").innerHTML = note._text;
  input.value = '';
}

document.getElementById('button1').addEventListener('click', whenClicked);

 function addnotes(notebook) {
   var display = document.getElementById("user_input").value;
  // var display = document.getElementById("display");
     document.getElementById("display").innerHTML = note._text;
    notebook._notes.forEach(function(i) {
      console.log(i)
    } )
 };