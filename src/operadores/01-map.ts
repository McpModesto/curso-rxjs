import { fromEvent, map, mapTo, pluck, range } from "rxjs";

// Operador map.
let rango$ = range(1, 5).pipe(map<number,number>((data) => data * 10));

rango$.subscribe(console.log);

// Evento keyup.
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// Ejemplo de map.
const keyupPipe$ = keyup$.pipe(
    map((event) => event.key)
)

// Deprecado.
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);
// Deprecado.
const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyupPipe$.subscribe((val) => console.log('Key: ', val));
keyupPluck$.subscribe((val) => console.log('Key: ', val));
keyupMapTo$.subscribe((val) => console.log(val))

