import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
        map(({x}) => ({x})),
        tap(val => console.log('tap', val)),
        // Espera dos segundos a valores nuevos y ya lo emite.
        auditTime(5000)
    ).subscribe(console.log);
