import { fromEvent } from "rxjs";
import { take, first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');


click$
    .pipe(
        // tap(console.log),
        // map<MouseEvent,any>(event => ({
        //    clientY: event.clientY,
        //    clientX: event.clientX,
        // })),

        map<MouseEvent,any>(({clientY, clientX }) => ({clientY, clientX})),
        tap(console.log),
        //Emite el primer evento que cumpla la condición
        first<MouseEvent>(event => event.clientY >= 150)
    )
    .subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('complete')
});


