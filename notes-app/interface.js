 var notebook = new NoteBook();
// when submit is clicked,
// read the text from the text area

function text() {
  var input = document.getElementById("user_input").value;
  note = new Note();
  note.set(input)
  notebook.add(note);
  addnotes(notebook)
  input.value = '';
}

document.getElementById('button1').addEventListener('click', whenClicked);

 function addnotes(notebook) {
   var display = document.getElementById("user_input").value;

     document.getElementById("display").innerHTML = note._text;
    
      var ul = document.createElement('ul');
      document.getElementById('display').appendChild(ul);
      notebook._notes.forEach(noteList);

      function noteList(element) {
        var li = document.createElement('li');

        ul.appendChild(li);

        document.createTextNode(element);

        li.innerHTML = li.innerHTML + element;
      }
 };
