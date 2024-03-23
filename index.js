var cube = document.getElementById('cube');

document.addEventListener('click', function(event) {
    var x = event.pageX;
    var y = event.pageY;

    cube.style.left = (x - cube.offsetWidth / 2) + 'px';
    cube.style.top = (y - cube.offsetHeight / 2) + 'px';
});