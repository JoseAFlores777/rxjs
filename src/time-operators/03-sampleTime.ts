import { fromEvent, map, sampleTime } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');


//El sampleTime debe ir antes que el map debido a que debemos evitar que se realice la operacion del map hasta que se cumpla el sampleTime
click$
    .pipe(
        sampleTime(2000),
        map(({ x, y }) => ({ x, y })),
    ).subscribe(console.log);