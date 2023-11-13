function hitungPangkat(angka, pangkat) {
  const hasil = angka ** pangkat;
  return hasil;
}

const angka = prompt('Masukkan angka:');
const pangkat = prompt('Masukkan pangkat:');

if (isNaN(angka) || isNaN(pangkat) || !Number.isInteger(parseFloat(angka)) || !Number.isInteger(parseFloat(pangkat))) {
  console.log('Input Angka dan Pangkat Tidak Valid!');
} else {
  console.log('Input\nAngka:', angka, '\nPangkat:', pangkat);

  const hasilPangkat = hitungPangkat(parseInt(angka), parseInt(pangkat));
  console.log(`${angka}^${pangkat} = ${hasilPangkat}`);
}
