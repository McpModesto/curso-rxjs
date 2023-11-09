import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const manejarErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('Error en:', err.message)
    // Tenemos que retornar un Observable.
    return of([]);
}

// Fetch trabaja en cuanto a Promesas, no Observables.
const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then((data) => console.log('data:', data))
//     .catch(err => console.warn('Error en usuarios', err));

// fetchPromesa
//     .then(manejarErrores)
//     .then(resp => resp.json())
//     .then((data) => console.log('data:', data))
//     .catch(err => console.warn('Error en usuarios', err));

ajax(url).pipe(
    map(resp => resp.response),
    catchError(atrapaError)
)
.subscribe(users => console.log('usuarios:', users));
