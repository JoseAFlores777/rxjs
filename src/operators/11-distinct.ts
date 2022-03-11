import { distinct, of, from } from 'rxjs';


const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$
.pipe(
    distinct()
).subscribe(console.log);


interface Personaje { 
    nombre: string;
}

const personajes = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
];


// from(personajes)
//     .pipe(
//         distinct()
//     ).subscribe(console.log);

from(personajes)
    .pipe(
        distinct(p => p.nombre)
    ).subscribe(console.log);