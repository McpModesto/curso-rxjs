import { delay, forkJoin, interval, of, take } from "rxjs";

const numero$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(
    take(3)
); // 0, 1, 2
const letras$ = of('a', 'b', 'c').pipe(
    delay(3000)
);

// Se emite cuando se terminan los 3 observables, y emite
// los últimos valores en forma de Array.
// forkJoin({
//     numero$,
//     interval$,
//     letras$
// }).subscribe(resp => {
//     console.log(resp.letras$)
// });

forkJoin({
    num: numero$,
    int: interval$,
    let: letras$
}).subscribe(resp => {
    console.log(resp)
});
