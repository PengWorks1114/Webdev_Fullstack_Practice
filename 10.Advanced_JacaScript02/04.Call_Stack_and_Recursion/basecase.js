function s(n) {
  if (n == 1) {
    return 2;
  } // base case 設置
  return 2 * s(n - 1);
}

s(10);
