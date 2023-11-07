import { fromEvent } from "rxjs";

// Eventos del DOM.
let src1$ = fromEvent<MouseEvent>(document, 'click');
let src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: (val) => console.log('next', val),
}

src1$.subscribe(({x, y}) => {
  console.log(x);
  console.log(y);
});

src2$.subscribe(data => {
  console.log(data.key);
});

