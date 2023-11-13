let n = 3;
let string = '';

for (i = 1; i <= n; i++) {
  for (j = n; j > i; j--) {
    string += '   ';
  }

  for (k = 0; k < i * 2 - 1; k++) {
    if (i === 2 || i === 4) {
      string += ' # ';
    } else {
      string += ' @ ';
    }
  }
  string += '\n';
}

for (i = 1; i <= n - 1; i++) {
  for (j = 0; j < i; j++) {
    string += '   ';
  }
  for (k = (n - i) * 2 - 1; k > 0; k--) {
    if (i + 1 === 2 || i + 1 === 4) {
      string += ' # ';
    } else {
      string += ' @ ';
    }
  }
  string += '\n';
}

console.log(string);
