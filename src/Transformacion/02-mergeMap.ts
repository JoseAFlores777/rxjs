import { interval, mergeMap, of, map, fromEvent } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';


const letras$ = of('a', 'b', 'c');

// letras$
//     .pipe(
//         mergeMap((letra) => interval(1000)
//             .pipe(
//                 map(i => letra + i),
//                 take(3)
//             ))
//     ).subscribe({
//         next: (letra) => console.log('next', letra),
//         complete: () => console.log('complete')
//     });


letras$
    .pipe(
        mergeMap((letra) => interval(1000)
            .pipe(
                map(i => letra + i),
                take(3)
            ))
)
    // .subscribe({
    //     next: (letra) => console.log('next', letra),
    //     complete: () => console.log('complete')
    // });


const mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');
const interval$ = interval();


//Calcula cuanto tiempo se demora en hacer click, desde que presiono hasta que lo suelto
mouseDown$
    .pipe(
        mergeMap(() => interval$.pipe(
            takeUntil(mouseUp$)
        ))
    ).subscribe(console.log);