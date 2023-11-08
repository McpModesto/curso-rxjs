import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    //takeWhile(({ y }) => y <= 150)
    
    // El inclusive a true, muestra en next el valor que rompió la condición.
    takeWhile(({ y }) => y <= 150, true)
)

.subscribe({
    next: (val) => console.log('next:', val),
    complete: () => console.log('complete')
});

