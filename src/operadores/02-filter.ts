import { filter, from, fromEvent, map, range } from "rxjs";

range(20, 30).pipe(
    filter( (num, i) => {
        console.log('index', i);
        return num % 2 === 1
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

let filtrado = from(personajes).pipe(
    filter((personaje) => personaje.tipo === 'heroe')
).subscribe(console.log);

// Ejemplo para tener en cuenta el orden de los operadores.
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // Sale un string que lo recibe filter.
    filter(code => code === 'Enter')
);

keyup$.subscribe(console.log);

