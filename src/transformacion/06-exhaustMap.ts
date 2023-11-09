import { concatMap, exhaustMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// Hasta que no se complete el observable actual, no puede volver a emitirse otro.
click$.pipe(
    exhaustMap(() => interval$)
)
.subscribe(console.log);
