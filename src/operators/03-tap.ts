import { range, tap } from 'rxjs';
import { map } from 'rxjs/operators';


const numeros$ = range(1, 100);


numeros$.pipe(
  tap(x => {
    console.log('antes', x)
  }),
  map(val => val * 10),
  tap({
    next: val => console.log('después', val),
    complete: () => console.log('terminó')
  })
).subscribe(val => console.log('subs', val));