import { fromEvent, interval } from 'rxjs';
import { take, switchMap, concatMap, exhaustMap } from 'rxjs/operators';



const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        //sirve cuando el usuario toca varias veces el submit, para evitar la duplicidad de llamadas
        exhaustMap(() => interval$)
    ).subscribe(console.log);