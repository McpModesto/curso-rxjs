import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    // Hasta que click$ no emita un valor, no se emite el valor de interval$
    sample(click$)
).subscribe(console.log);
