for (let i = 2; i < 10; i++) {
  document.write(`<h2>${i}단</h2>`)
  for (let j = 1; j < 10; j++) {
    document.write(`
    <span>
      ${i}X${j}=${i * j}
    </span>
    <br></br>
    `)
  }
}
