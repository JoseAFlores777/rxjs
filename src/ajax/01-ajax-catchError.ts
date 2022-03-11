import { catchError, map, pluck, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response;
}

const atrapaError = (err: AjaxError) => { 
        console.warn('Error en usuarios:', err.message);
        return of([]);
}


const fetchPromise = fetch(url);

// fetchPromise
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('Error en usuarios:',err));

// fetchPromise
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('Error en usuarios:',err));


// ajax(url)
//     .pipe(
//         // map(resp=>resp.response)
//         pluck('response'),
//         catchError(err  => {
//             console.warn('Error en usuarios:', err);
//             return of([]);
//          })
//     ).subscribe(users => console.log('users:', users));

ajax(url)
    .pipe(
        pluck('response'),
        catchError(atrapaError)
    ).subscribe(users => console.log('users:', users));