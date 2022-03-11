

//crear un formulario

import { fromEvent, map, tap, mergeMap, pluck, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, exhaustMap } from 'rxjs/operators';

//Helper
const peticionHttpLogin = (userBody) => {
    
    return ajax.post('https://reqres.in/api/login?delay=1', userBody)
    .pipe(
        pluck('response', 'token'),
        catchError(err => of('sss'))
    )
}

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

//Configuraciones

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPassword, submitBtn);

document.querySelector('body').append(form);

//Streams

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    // mergeMap(peticionHttpLogin),
    //switchMap cancela las peticiones anteriores y solo cuenta la ultima
    // switchMap(peticionHttpLogin),
    //exhaustMap solamente cuenta la primera petición, las demas las ignora
    exhaustMap(peticionHttpLogin)

);

submitForm$.subscribe((token) => {
    console.log('token:', token);
 });