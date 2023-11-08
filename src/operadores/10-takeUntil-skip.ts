import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
//const clickBtn$ = fromEvent<MouseEvent>(boton, 'click');

const clickBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap después de skip'))
);

// Nos permite emitir valores hasta que otro observable emita su primer valor.
counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});
