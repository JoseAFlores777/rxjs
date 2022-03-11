import { auditTime, fromEvent, tap, map } from 'rxjs';




const clcik$ = fromEvent<MouseEvent>(document, 'click');

clcik$
    .pipe(
        map(({ x}) => ({ x })),
        tap(val => console.log('tap',val)),
        auditTime(3000)
    ).subscribe(console.log);