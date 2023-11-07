import { from, of } from "rxjs";

// of = toma argumentos y genera una secuencia de valores.
// from = array, promesa, iterable, observable....

const observer = {
  next: (next) => console.log('next:', next),
  complete: () => console.log('complete')
};

// Iterable.
const miGenerador = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const miIterable = miGenerador();

for(let id of miIterable) {
  console.log(id);
}

// From hace lo mismo. Además al ser un observable tiene muchas más ventajas, como el uso de operadores...
from(miIterable).subscribe(observer);


// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Fernando');

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async(resp) => {
//   const dataResp = await resp.json();
//   console.log({dataResp});
// });

source$.subscribe(observer);
