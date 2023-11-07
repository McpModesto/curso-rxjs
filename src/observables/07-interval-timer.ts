import { interval, timer } from "rxjs";

const observer = {
  next: (next) => console.log('next: ', next),
  complete: () => console.log('complete')
}

// Emitir valor en timer cuando pasen 5 segundos.
const hoyEn5 = new Date(); // Ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// Interval y timer son asíncronos.
let interval$ = interval(1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');

