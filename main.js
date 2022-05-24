var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "javascript",
    theme: "monokai",
    lineNumbers: true,
});

editor.setSize('620', '240');