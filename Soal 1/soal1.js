function hitungTarifAir(totalPemakaian) {
  const tarifPertama = 1000; //Pemakaian 10m3 pertama
  const tarifKedua = 1500; //Pemakaian 10m3 berikutnya
  const tarifKetiga = 2000; //Pemakaian 15 m3 berikutnya
  const tarifSelanjutnya = 3000; //Pemakaian Selanjutnya

  let totalBayar = 0;

  if (isNaN(totalPemakaian)) {
    console.log('Masukkan Angka yang Valid untuk Total Pemakaian!');
    return;
  }

  totalPemakaian = parseFloat(totalPemakaian);

  if (totalPemakaian <= 10) {
    totalBayar = totalPemakaian * tarifPertama;
  } else if (totalPemakaian <= 20) {
    totalBayar = 10 * tarifPertama + (totalPemakaian - 10) * tarifKedua;
  } else if (totalPemakaian <= 35) {
    totalBayar = 10 * tarifPertama + 10 * tarifKedua + (totalPemakaian - 20) * tarifKetiga;
  } else {
    totalBayar = 10 * tarifPertama + 10 * tarifKedua + 15 * tarifKetiga + (totalPemakaian - 35) * tarifSelanjutnya;
  }

  return totalBayar;
}

const totalPemakaian = prompt('Masukkan Total Pemakaian (m3)');
const totalBayar = hitungTarifAir(totalPemakaian);

if (totalBayar !== undefined) {
  console.log('Total Bayar: Rp.', totalBayar.toLocaleString('id-ID'));
}
