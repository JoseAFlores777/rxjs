import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */


const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};


const miGenerador = function* () {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

const miIterable = miGenerador();

// for (const id of miIterable) { 
//     console.log(id);
// }

from(miIterable).subscribe(observer);

// const src$ = from([1, 2, 3, 4, 5]);
// const src$ = of(...[1, 2, 3, 4, 5]);
// const src$ = of([1, 2, 3, 4, 5]);
// const src$ = from('Jose');

const src$ = from( fetch('https://api.github.com/users/joseAFlores777') ); 

// src$.subscribe( (resp) => {
//     console.log(resp);

//     resp.json().then(console.log);
// });

// src$.subscribe(async (resp) => {
//     console.log(resp);

//     const dataResp = await resp.json();
//     console.log(dataResp);
// });

// src$.subscribe(observer);