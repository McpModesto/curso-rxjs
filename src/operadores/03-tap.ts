import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5);

// Tap nos permite depurar el proceso que se hace en el pipe.
// También nos sirve para ejecutar ahí la lógica que queramos.
numeros$.pipe(
    tap(x => {
        console.log('antes', x);
        // El return no hace nada.
        return 100;
    }),
    map(val => val * 10),
    tap({
        next: (val) => console.log('después', val),
        complete: () => console.log('Se terminó todo')
    })
).subscribe((val) => console.log('subs', val));
