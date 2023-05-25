var image = document.getElementById("img");
var Left = 0;
var Top = 0;

function move(key) {
    switch (key) {
        case 'ArrowUp':
            Top -= 10;
            break;
        case 'ArrowDown':
            Top += 10;
            break;
        case 'ArrowLeft':
            Left -= 10;
            break;
        case 'ArrowRight':
            Left += 10;
            break;
        default:
            return;
    }

    image.style.top = Top + 'px';
    image.style.left = Left + 'px';
}

document.addEventListener('keydown', function(event) {
    move(event.key);
});
