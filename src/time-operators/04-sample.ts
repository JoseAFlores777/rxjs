import { interval, fromEvent, sample } from 'rxjs';


const interval$ = interval(500);

const clcik$ = fromEvent<MouseEvent>(document, 'click');

interval$
    .pipe(
        sample(clcik$)
    ).subscribe(console.log);