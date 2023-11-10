import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'McpModesto';

forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(
        // Podemos capturar error de cada observable y no pasa por el
        // catchError del forkJoin.
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gistsss`
    ),
}).pipe(
    catchError(err => of(err.message))
).subscribe(console.log);
