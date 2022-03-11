import { throttleTime, fromEvent, map, pluck, distinctUntilKeyChanged, distinctUntilChanged, asyncScheduler } from 'rxjs';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        throttleTime(3000)
).subscribe(console.log);
    

//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
    .pipe(
        throttleTime(1000, asyncScheduler,{
            leading: true,
            trailing: true
        }),
        pluck('target', 'value'),
        distinctUntilChanged()
).subscribe(console.log);

//Util para busquedas 
    
//https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16575668#overview