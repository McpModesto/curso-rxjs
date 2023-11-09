import { Observable, debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsersResp } from "./interfaces/github-users.interface";

// Referencias.
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams.
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(ev => ev.target['value']),
    map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    mergeAll(),
    pluck('items')
).subscribe(resp => console.log(resp));

