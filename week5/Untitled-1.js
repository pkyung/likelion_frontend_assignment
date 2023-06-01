var image = document.getElementById('image');
var imageLeft = 0;
var imageTop = 0;

function moveImage(direction) {
    switch (direction) {
        case 'ArrowUp':
            imageTop -= 10;
            break;
        case 'ArrowDown':
            imageTop += 10;
            break;
        case 'ArrowLeft':
            imageLeft -= 10;
            break;
        case 'ArrowRight':
            imageLeft += 10;
            break;
        default:
            return; // Do nothing for other keys
    }

    image.style.top = imageTop + 'px';
    image.style.left = imageLeft + 'px';
}

document.addEventListener('keydown', function(event) {
    moveImage(event.key);
});