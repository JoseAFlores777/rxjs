import { from, map  } from 'rxjs';
import { scan, reduce, } from 'rxjs/operators';


const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }

const totalAcumulador = (acc, cur) => acc + cur;


//Reduce

from(numeros)
    .pipe(
        reduce(totalAcumulador, 0)
    )
.subscribe(console.log);

//scan

from(numeros)
    .pipe(
        scan(totalAcumulador, 0),
    )
    .subscribe(console.log);


//Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'jaif', autenticado: false, token: null },
    { id: 'jaif', autenticado: true, token: 'abc' },
    { id: 'jaif', autenticado: true, token: 'abc123' },
];

const state$ = from( user ).pipe(
    scan<Usuario,any>( (acc: any, cur: any) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);
