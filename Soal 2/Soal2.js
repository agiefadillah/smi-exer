// Deklarasi variabel
let A;
let B;

// Pengguna memasukkan nilai input A dan B
A = parseInt(prompt('Masukkan nilai input A:'));
B = parseInt(prompt('Masukkan nilai input B:'));

// Logika program
A = A < -5 ? A : 5;
B = B > A ? 2 + A : B;
A++;
B *= 2;

// Menampilkan hasil
console.log('Nilai A: ' + A);
console.log('Nilai B: ' + B);

// Mengatur operator dan urutan operand
function cekOperator(op1, op2) {
  if (op1 == '+' && op2 == '-') return true;
  if (op1 == '-' && op2 == '*') return true;
  if (op1 == '*' && op2 == '/') return true;
  if (op1 == '/' && op2 == '+') return true;
  return false;
}

function main() {
  let operator = prompt('Masukkan operator (+, -, *, /):');
  let operand = parseInt(prompt('Masukkan operand:'));
  let result;

  if (cekOperator(A, operator)) {
    result = A;
    A = operand;
  } else if (cekOperator(B, operator)) {
    result = B;
    B = operand;
  } else {
    console.log('Operator tidak valid!');
    return;
  }

  switch (operator) {
    case '+':
      result += operand;
      break;
    case '-':
      result -= operand;
      break;
    case '*':
      result *= operand;
      break;
    case '/':
      result /= operand;
      break;
  }

  console.log('Hasil: ' + result);
}

main();
