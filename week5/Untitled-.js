
function rockimg(){
  document.querySelector("img").setAttribute("src", "./rock.jpg")
  }

function paperimg(){
    document.querySelector("img").setAttribute("src", "./paper.jpg")
  }

function scissorsimg(){
    document.querySelector("img").setAttribute("src", "./scissors.jpg")
  }


function comturn() {
    function ranmath() {
        var ad = 0;
        ad = Math.floor(Math.random() * 3);
        return ad;
      }
  var ad = ranmath();

  if (ad === 0) {
    document.querySelectorAll("img")[1].setAttribute("src", "./scissors.jpg");
  } else if (ad === 1) {
    document.querySelectorAll("img")[1].setAttribute("src", "./paper.jpg");
  } else if (ad === 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "./rock.jpg");
  }
}







