function carinilaiBilanganTerbesar(nilaiA, nilaiB, nilaiC) {
  const terbesar = Math.max(nilaiA, nilaiB, nilaiC);
  return terbesar;
}

// Meminta input dari pengguna
const nilaiA = prompt('Masukkan nilai nilaiA:');
const nilainilaiB = prompt('Masukkan nilai nilaiB:');
const nilaiC = prompt('Masukkan nilai nilaiC:');

// Memastikan input yang valid (harus berupa bilangan bulat)
if (isNaN(nilaiA) || isNaN(nilaiB) || isNaN(nilaiC) || !Number.isInteger(parseFloat(nilaiA)) || !Number.isInteger(parseFloat(nilaiB)) || !Number.isInteger(parseFloat(nilaiC))) {
  console.log('Masukkan nilai nilaiA, nilaiB, dan nilaiC yang valid (bilangan bulat).');
} else {
  // Menentukan bilangan terbesar
  const hasilTerbesar = carinilaiBilanganTerbesar(parseInt(nilaiA), parseInt(nilaiB), parseInt(nilaiC));

  // Menampilkan hasil
  console.log(`nilaiBilangan terbesar dari ${nilaiA}, ${nilaiB}, dan ${nilaiC} adalah: ${hasilTerbesar}`);
}
