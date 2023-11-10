import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);

// Concatena todos los observables en uno y los ejecuta en secuencia.
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1)
).subscribe(console.log);
