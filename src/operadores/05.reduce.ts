import { interval, reduce, take, tap } from "rxjs";

const numbers = [1,2,3,4,5];

let totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);

console.log('total arr', total);

interval(1000).pipe(
    // Va a completar el Observable después de la cantidad de veces indicadas (3)
    take(4),
    // Depurar qué pasa.
    tap(console.log),
    reduce(totalReducer)
    ).subscribe({
    next: val => console.log('Next:', val),
    complete: () => console.log('Complete')
})
