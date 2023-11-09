import { asyncScheduler, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(400, asyncScheduler, {
        // Para obtener primer y último valor.
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);
