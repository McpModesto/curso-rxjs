import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next:(value) => console.log('next: ', value),
    error:(error) => console.log('error: ', error),
    complete:() => console.info('Completado'),
}

// const obs$ = Observable.create()

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Hola');
    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error.
    const a = undefined;
    a.nombre = 'Fernando';

    // Completar el observable.
    subs.complete();

    // Comprobar que ya no se emite.
    subs.next('Loco');
});

// Procesa únicamente el next del subscriber.
// obs$.subscribe(resp => {
//     console.log('next: ', resp)
// });

// obs$.subscribe({
//     next:(value) => console.log('next: ', value),
//     error:(error) => console.log('error: ', error),
//     complete:() => console.info('Completado'),
// });

obs$.subscribe(observer);
