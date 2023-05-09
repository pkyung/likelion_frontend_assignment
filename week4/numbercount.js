let count = 0;
      
function up() {
  count++;
  document.getElementById("numbercount").innerHTML = count;
}

function reset() {
  count = 0;
  document.getElementById("numbercount").innerHTML = count;
}