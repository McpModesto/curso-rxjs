import { Observable, Observer, Subscription, of } from "rxjs";

// Observer.
const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
    let num = 0;
    // Crear un contador, emitir cada segundo 1,2,3,4,5
    const interval = setInterval(() => {

        // Cada segundo.
        num++;
        subscriber.next(num);

        console.log(num);

    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // Función que se ejecuta cuando se hace el unsubscribe.
    // IMPORTANTE: También se ejecuta cuando se realiza el complete().
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

    // Complete sirve para cuando se ha finalizado la emisión de datos y el unsubscribe para desuscribirte,
    // se estén enviando datos o no.
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add()

// Desuscribirnos en cadena.
const allSubs = new Subscription();
allSubs.add(subs1);
allSubs.add(subs2);
allSubs.add(subs3);

setTimeout(() => {
    // Sólo me puedo desuscribir una vez, si vuelvo a llamar a unsubscribe(), 
    // no se va a disparar la función que retorna el Observable.
    
    // subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    allSubs.unsubscribe();

    console.log('Completado timeout');
}, 6000);
