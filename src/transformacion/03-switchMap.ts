import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

// Referencias.
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers.
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    console.log(usuarios);

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams.
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(ev => ev.target['value']),
    mergeMap<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    // Usar map en vez de pluck.
    map<GithubUsersResp, GithubUser[]>(item => item.items)
).subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    // Se cancelan todos los anteriores observables.
    switchMap(texto => ajax.getJSON(`${url}${texto}`))
).subscribe(console.log);

