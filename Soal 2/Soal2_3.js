const sebelumSelesai = B * 2;

function Flowchart(A, B) {
  if (A <= 5) {
    B = 2 + A;
    A++;
    B * 2;
  } else if (B > A) {
    B - 1;
    if (B <= 3) {
      B * 2;
      B++;
      return;
    } else {
      B * 2;
    }
  } else {
    A = A - 2;
    A;
    A >= 5;
    B * 2;
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
