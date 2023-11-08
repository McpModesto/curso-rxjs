import { range, map } from 'rxjs';

// Operador map.
let rango$ = range(1, 5).pipe(map(val => val * 10));

rango$.subscribe(console.log);
