function hitungFaktorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return 'Masukkan Bilangan Bulat Positif.';
  }

  if (n === 0) {
    return '1';
  } else {
    let langkahLangkah = `${n}`;
    let hasil = n;

    for (let i = n - 1; i > 0; i--) {
      langkahLangkah += ` x ${i}`;
      hasil *= i;
    }

    return `${langkahLangkah} = ${hasil}`;
  }
}

const inputN = prompt('Masukkan Nilai N (Bilangan Bulat Positif dengan Tanda Seru):');

if (!/^\d+!$/.test(inputN)) {
  console.log('Input Nilai Tidak Valid!' + '\n' + 'Masukkan Bilangan Bulat Positif yang Valid dengan Tanda Seru (!).');
} else {
  const nilaiN = parseInt(inputN);

  const hasilFaktorial = hitungFaktorial(nilaiN);
  console.log(`Nilai Input: ${nilaiN}!`);
  console.log(hasilFaktorial);
}
