import { fromEvent, mergeAll, Observable } from 'rxjs';
import { pluck, map, take, debounceTime  } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//Helpers
const mostrarUsarios = (usuarios: GithubUser[]) => {    
    orderList.innerHTML = '';
    for(const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        orderList.append(li);
    }
}


//streams

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


// //Anidacion de operadores/observables -> muy complejo
// input$
//     .pipe(
//         debounceTime(1000),
//         // pluck('target', 'value'),
//         map(event => {
//             const texto = event.target['value'];
//             return ajax.getJSON(`https://api.github.com/users?q=${texto}`);
//         })
// ).subscribe(resp => {
//     resp
//         .pipe(
//             // pluck('name')
//         ).subscribe(console.log);
//     });

//Aplanamiento
// https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16652918#overview
input$
    .pipe(
        debounceTime<KeyboardEvent>(1000),
        map<KeyboardEvent, string>(evento => evento.target['value']),
        map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
        mergeAll(),
        map<GithubUsersResp, GithubUser[]>(item => item.items)
).subscribe(users => {
    // console.log(users[0].followers_url);
    mostrarUsarios(users);
    });