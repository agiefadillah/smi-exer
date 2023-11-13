function cariBilanganTerbesar(A, B, C) {
  const terbesar = Math.max(A, B, C);
  return terbesar;
}

function main() {
  const inputA = prompt('Masukkan Nilai A:');
  const inputB = prompt('Masukkan Nilai B:');
  const inputC = prompt('Masukkan Nilai C:');

  if (isNaN(inputA) || isNaN(inputB) || isNaN(inputC)) {
    console.log('Input Nilai Tidak Valid!');
  } else {
    const A = parseInt(inputA);
    const B = parseInt(inputB);
    const C = parseInt(inputC);

    const hasilTerbesar = cariBilanganTerbesar(A, B, C);

    console.log(`Nilai A: ${A}`);
    console.log(`Nilai B: ${B}`);
    console.log(`Nilai C: ${C}`);
    console.log(`Bilangan terbesar: ${hasilTerbesar}`);
  }
}

main();
