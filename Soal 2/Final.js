let A = parseInt(prompt('Masukkan Nilai A:'));
let B = parseInt(prompt('Masukkan Nilai B:'));

console.log('Nilai Input:');
console.log('A = ' + A + ' B = ' + B);
console.log(' ');

if (A <= 5) {
  B = 2 + A;
  A++;

  console.log('Nilai B Setelah Penambahan = ' + B);
  console.log('Nilai B Dikali 2 =  ' + B * 2);
  console.log(' ');
} else {
  if (B > A) {
    B = B - 1;

    while (B > 3) {
      B = B * 2;
      B++;
    }
  } else {
    A = A - 2;

    console.log('Nilai A Setelah Pengurangan =  ' + A);
    console.log(' ');

    while (A >= 5) {
      A = A - 2;
      console.log('Nilai A = ' + A);
      console.log(' ');
    }
  }
}

console.log('Nilai Output Terakhir:');
console.log('A = ' + A + ' B = ' + B);
console.log(' ');
