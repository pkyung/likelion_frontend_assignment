function rand(){
    let ran = Math.floor( ( Math.random() * (3 - 1) + 1 ) );
    if (ran == 1) {
        n11.firstChild.remove()
        let p = document.createElement("img")
        p.setAttribute("src","./rock.jpg")
        n11.appendChild(p)
    }
    if (ran == 2) {
        n11.firstChild.remove()
        let p = document.createElement("img")
        p.setAttribute("src","./paper.jpg")
        n11.appendChild(p)
    }
    if (ran == 3) {
        n11.firstChild.remove()
        let p = document.createElement("img")
        p.setAttribute("src","./scissors.jpg")
        n11.appendChild(p)
    }
}


let n1 = document.querySelector(".user")
let n11 = document.querySelector(".computer")
let n2 = document.querySelector(".ro_ck")
let n3 = document.querySelector(".pa_per")
let n4 = document.querySelector(".sci_ssors")

function ro_ck(){
    n1.firstChild.remove()
    rand()
    let p = document.createElement("img")
    p.setAttribute("src","./rock.jpg")
    n1.appendChild(p)
}

function pa_per(){
    n1.firstChild.remove()
    rand()
    let p = document.createElement("img")
    p.setAttribute("src","./paper.jpg")
    n1.appendChild(p)

}

function sci_ssors(){
    n1.firstChild.remove()
    rand()
    let p = document.createElement("img")
    p.setAttribute("src","./scissors.jpg")
    n1.appendChild(p)
}



n2.addEventListener("click",function(){
    ro_ck()
});
n3.addEventListener("click",function(){
    pa_per()
});
n4.addEventListener("click",function(){
    sci_ssors()
});

