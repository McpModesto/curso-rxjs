import { endWith, of, startWith } from "rxjs";

// El of por naturaleza es síncrono.
// Ejemplo de startWith
const numeros$ = of(1,2,3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z'),
);

numeros$.subscribe(console.log);
