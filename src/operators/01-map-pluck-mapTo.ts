import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


// range(1, 5).subscribe(console.log);
// range(1, 5).pipe(
//     //debo de colocar el return para que me devuelva el valor
//     map<number,string>(val => {
//       return ( val * 10 ).toString();
//     })
// )
// .subscribe(console.log);


const keyups$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyups$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyups$.pipe(
     pluck('target', 'baseURI')
);

const keyupMapTo$ = keyups$.pipe(
    mapTo('Tecla presionada')
);

keyupCode$.subscribe(console.log);
keyupPluck$.subscribe(console.log);
keyupMapTo$.subscribe(console.log);
