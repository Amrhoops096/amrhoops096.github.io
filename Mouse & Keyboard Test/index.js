const inputText = document.getElementById("Input");

document.addEventListener("mousedown", function(event) {
    const mouseButton = "Mouse button: " + event.button + ".<br>";
    const mouseX = "Mouse X: " + event.clientX + ".<br>";
    const mouseY = "Mouse Y: " + event.clientY + ".";
    inputText.innerHTML = mouseButton + mouseX + mouseY;
});

document.addEventListener("keydown", function(event) {
    const keyButton = "Key: " + event.key + "<br>";
    const keyCode = "Key code: " + event.keyCode + ".";
    inputText.innerHTML = keyButton + keyCode;
});