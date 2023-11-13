function skalaRichter(SR) {
  if (SR >= 0.0 && SR < 5.0) {
    return 'Tidak ada kerusakan, jika ada hanya kerusakan kecil';
  } else if (SR >= 5.0 && SR < 5.5) {
    return 'Beberapa bangunan akan rusak!';
  } else if (SR >= 5.5 && SR < 6.5) {
    return 'Tembok retak atau roboh.';
  } else if (SR >= 6.5 && SR < 7.5) {
    return 'Bahaya!, banyak bangunan dan gedung roboh.';
  } else if (SR >= 7.5) {
    return 'Sangat Bahaya!, banyak bangunan dan gedung hancur.';
  } else {
    return 'Nilai Skala Richter tidak valid.';
  }
}

const inputSR = prompt('Masukkan Nilai Skala Richter (Contoh: 3.81)');

if (isNaN(inputSR)) {
  console.log('Input Nilai Tidak Valid!');
} else {
  const nilaiSR = parseFloat(inputSR);

  const definisi = skalaRichter(nilaiSR);
  console.log(`Skala Richter ${nilaiSR} \n${definisi}`);
}
