function timeTable() {
  for (let i = 2; i <= 9; i++) {
    document.write(`<h3>${i}단 <br></h3>`);
    for (let j = 1; j <= 9; j++) {
      document.write(`${i} x ${j} = ${i * j} <br>`);
    }
    document.write("<br>");
  }
}

timeTable();
