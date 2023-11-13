function Flowchart(A, B) {
  if (A <= 5) {
    B = 2 + A;
    A++;
    B;
    B * 2;
  } else {
    console.log('error');
  }
  return { A: A, B: B };
}

function userInput() {
  var A = parseInt(prompt('Masukkan Nilai A', ''));
  var B = parseInt(prompt('Masukkan Nilai B', ''));

  return start(A, B);
}

var result = userInput();
console.log('Hasil: A = ' + result.A + ', B = ' + result.B);
