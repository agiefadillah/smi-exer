function tukarNilai(A, B) {
  console.log('Sebelum Pertukaran:');
  console.log('A =', A + ' B =', B);

  const temp = A;
  A = B;
  B = temp;

  console.log('Setelah Pertukaran:');
  console.log('A =', A + ' B =', B);
}

const inputA = prompt('Masukkan Nilai A:');
const inputB = prompt('Masukkan Nilai B:');

if (isNaN(inputA) || isNaN(inputB)) {
  console.log('Input Nilai Tidak Valid!');
} else {
  const nilaiA = parseInt(inputA);
  const nilaiB = parseInt(inputB);

  tukarNilai(nilaiA, nilaiB);
}
