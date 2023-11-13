function start(A, B) {
  if (A <= 5) {
    B = 2 + A;
    A++;
    B;
    B * 2;
  } else {
    if (B > A) {
      B - 1;
      if (B <= 3) {
        B * 2;
        B++;
        return;
      }
    } else {
      B = 0;
    }
    B *= 2;
  }

  return { A: A, B: B };
}

function userInput() {
  var A = parseInt(prompt('Masukkan nilai A:', ''));
  var B = parseInt(prompt('Masukkan nilai B:', ''));

  return start(A, B);
}

var result = userInput();
console.log('Hasil: A = ' + result.A + ', B = ' + result.B);
