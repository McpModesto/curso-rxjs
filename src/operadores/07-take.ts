import { of, take, tap } from "rxjs";

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    // Tap: para depurar que deja de ejecutarse por detrás.
    tap(t => console.log('tap', t)),
    take(3)
    ).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});
