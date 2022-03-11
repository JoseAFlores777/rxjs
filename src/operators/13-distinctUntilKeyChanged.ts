import { distinct, of, from, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs';





interface Personaje { 
    nombre: string;
}

const personajes = [
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Dr. Willy' },
];


//Evalua la propiedad nombre de cada objeto
from(personajes)
    .pipe(
         distinctUntilKeyChanged('nombre')
    ).subscribe(console.log);