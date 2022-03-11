import { of, catchError } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const url = 'https://httpbinX.org/delay/1';

const manejaError = (resp: AjaxError) => { 
    console.warn('Error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
//     );

// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
//     );

const obs$ = ajax.getJSON(url);

const obs2$ = ajax(url);




obs$.subscribe(data => console.log('getJSON:', data));
// obs2$.subscribe(data => console.log('AJAX:', data));
obs2$
    .pipe(
        catchError(manejaError)
    ).subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete: () => console.log('complete')
});