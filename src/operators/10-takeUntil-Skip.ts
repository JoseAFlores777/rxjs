import { interval, fromEvent, takeUntil, skip } from 'rxjs';
import { tap } from 'rxjs/operators';

 


const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body')?.append(button);


const counter$ = interval(1000);

// const clickBtn$ = fromEvent<MouseEvent>(button, 'click');

//el skip es para que no emita el primer valor o valores dependiendo de la condición, en este caso emitirá al segundo click
const clickBtn$ = fromEvent<MouseEvent>(button, 'click')
    .pipe(
        tap(()=>console.log('tap antes del skip')),
        skip(1),
        tap(()=>console.log('tap despues del skip')),
    )

counter$
.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});