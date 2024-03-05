//let username = window.prompt("What is you name?");

document.getElementById("checkbox").onclick = function(){
    let body = document.getElementById("body");

    if(document.getElementById("checkbox").checked) {
        body.style.backgroundColor = "black"
        body.style.color = "white"
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }

}