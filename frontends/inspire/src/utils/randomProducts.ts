import { Product, products } from 'fake-backend';

export const randomProducts = (n: number): Product[] => {
  var result = new Array(n),
    len = products.length,
    taken = new Array(len);
  if (n > len) throw new RangeError('v: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = products[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};
