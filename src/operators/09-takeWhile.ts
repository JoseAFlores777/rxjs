import { fromEvent, map, takeWhile } from 'rxjs';



const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
      //inclusive:true -> mientras sea menor o igual a 150 pero toma el ultimo valor
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

