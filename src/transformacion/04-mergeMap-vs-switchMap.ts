import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

// El switchMap sólo mantiene una suscripción interna activa, mientras que el mergeMap puede
// mantener simultáneamente todas las que queramos.
click$.pipe(
    //mergeMap(() => interval$)
    switchMap(() => interval$)
).subscribe(console.log);

