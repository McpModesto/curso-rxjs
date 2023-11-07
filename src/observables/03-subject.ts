import { Observable, Observer, Subject, Subscriber } from "rxjs";

// Cuando la data es producida por el Observable en sí, es considerado
// Cold Observable, pero cuando la data es producida fuera del observable es llamado Hot Observable

// Observer.
const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 1000)

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});

// Los valores que se reciben son los mismos para ambas suscripciones.
// const subs1 = intervalo$.subscribe((rnd) => {
//     console.log('1: ', rnd);
// });
// const subs2 = intervalo$.subscribe((rnd) => {
//     console.log('2: ', rnd);
// });

// 1.- Casteo múltiple
// 2.- También es un observer!
// 3.- Next, error y complete
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();

}, 3500);
