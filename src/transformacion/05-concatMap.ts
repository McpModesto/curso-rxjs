import { concatMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    // Ejecuta los observables en secuencia, uno detrás de otro.
    concatMap(() => interval$)
).subscribe(console.log);

