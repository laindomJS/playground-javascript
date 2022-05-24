const textarea = document.getElementById("editor");
const output = document.getElementById("output");

function run() {
	debugger;
    output.innerHTML = "";
	try {
        const code = editor.getValue();
        let evaled = eval(code);
      } catch (exception) {
      	output.innerHTML = "Error: " + exception;
      }
}