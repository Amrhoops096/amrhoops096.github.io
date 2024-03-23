var cube = document.getElementById('cube');

var posX = window.innerWidth / 2 - cube.offsetWidth / 2;
var posY = window.innerHeight / 2 - cube.offsetHeight / 2;

function setPosition(x, y) {
    posX = x;
    posY = y;
    cube.style.left = posX + 'px';
    cube.style.top = posY + 'px';
}

document.addEventListener('click', function(event) {
    var x = event.pageX;
    var y = event.pageY;

    setPosition(x - cube.offsetWidth / 2, y - cube.offsetHeight / 2);
    savePositionToStorage();
});

function savePositionToStorage() {
    localStorage.setItem('cubePosition', JSON.stringify({ x: posX, y: posY }));
}

function getPositionFromStorage() {
    var storedPosition = localStorage.getItem('cubePosition');
    if (storedPosition) {
        var position = JSON.parse(storedPosition);
        return position;
    }
    return null;
}

var storedPosition = getPositionFromStorage();
if (storedPosition) {
    setPosition(storedPosition.x, storedPosition.y);
}
