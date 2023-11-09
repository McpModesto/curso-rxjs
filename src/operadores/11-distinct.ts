import { distinct, from, of } from "rxjs";

const numeros$ = of(1,'1',1,1,3,3,2,2,2,2,5,3,1);

numeros$.pipe(
    distinct() // ===
)
    .subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes).pipe(
    // Aunque objetos tengan el mismo nombre, no es el mismo. Por espacio de memoria, etc
    // Si lo hacemos por nombre, si nos filtra.
    distinct(p => p.nombre)
).subscribe(console.log);
