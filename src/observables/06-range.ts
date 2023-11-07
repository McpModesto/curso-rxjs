import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1,2,3,4,5);

// Con asyncScheduler podemos convertirlo en asíncrono.
const src$ = range(1, 5, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
