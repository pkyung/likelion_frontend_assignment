/*이미지들을 가져온 다음 배열로 지정을 해주고,
하단에 가위, 바위, 보를 선택할 때마다
디브 안에서 오른쪽엔 선택한 손 모양 이미지가.
왼쪽엔 이미지 배열에서 랜덤으로 선택해서 손 모양이 뜨게 한다.*/

let vs = document.querySelector('#result');
let rock = document.querySelector('#rock');
let scissors = document.querySelector('#scissors');
let paper = document.querySelector('#paper');

let img = ['rock', 'scissors', 'paper']

function random() {
    let randomImg = parseInt(Math.floor(Math.random()*img.length));
    let newRsp = document.createElement('img');
    newRsp.setAttribute('src', `../image/${img[randomImg]}.jpg`);

    vs.appendChild(newRsp);
};

rock.addEventListener('click', () => {
    while(vs.firstChild) {
        vs.removeChild(vs.firstChild);
    }
    let newRock = document.createElement('img');
    newRock.setAttribute('src', '../image/rock.jpg');
    vs.appendChild(newRock);

    random();
});
scissors.addEventListener('click', () => {
    while(vs.firstChild) {
        vs.removeChild(vs.firstChild);
    }
    let newScissors = document.createElement('img');
    newScissors.setAttribute('src', '../image/scissors.jpg');
    vs.appendChild(newScissors);

    random();
});
paper.addEventListener('click', () => {
    while(vs.firstChild) {
        vs.removeChild(vs.firstChild);
    }
    let newPaper = document.createElement('img');
    newPaper.setAttribute('src', '../image/paper.jpg');
    vs.appendChild(newPaper)

    random();
});




