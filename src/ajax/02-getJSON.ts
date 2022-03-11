import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';

// PARA MANDAR UN HEADER DE PRUEBA PARA VER QUE SE ESTA ENVIANDO
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe(data => console.log('data:', data));