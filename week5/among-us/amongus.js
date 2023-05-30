document.addEventListener("keydown", function(event) {
    let img = document.querySelector("img");
    let positionLeft = parseInt(img.style.left || 0);
    let positionTop = parseInt(img.style.top || 0);


    if(event.key === "ArrowLeft") {
        img.style.left = (positionLeft - 10) + 'px';
    } else if(event.key === "ArrowRight"){
        img.style.left = (positionLeft + 10) + 'px';
    } else if(event.key === "ArrowUp"){
        img.style.top = (positionTop - 10) + 'px';
    } else if(event.key === "ArrowDown"){
        img.style.top = (positionTop + 10) + 'px';
    }
});