for(let i=2; i<=9; i++){ //이중for문은 겉에 for문이 일정할 동안 안에 for문이 돌아감
    // document.write( '<h2>' + i + '단' +'</h2>' ); //document.write를 합칠 때 +로 합침
    document.write( `<h2>${i}단</h2>`); // `(백틱)과 $를 쓰면 변수와 문자열을 한번에 나타낼 수 있음
    for(let j=1; j<=9; j++) {
        document.write(`${i} x ${j} = ${i*j} <br>` ); 
    }
}