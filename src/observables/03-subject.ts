
import { Observable, Observer, Subject } from 'rxjs';


const observer: Observer<any> = {

    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>(subscriber => { 

    const intervalID = setInterval(
        () => subscriber.next(Math.random()), 1000
            
    );

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido')
    };

});

/**
 * 1- casteo multiple2- tambien es un observer
 * 3- Next, error y complete
 */


const subject$ = new Subject();

const intervalSubscription = intervalo$.subscribe(subject$);


// const subscription1 = intervalo$.subscribe( rnd => console.log('subs1 ', rnd));
// const subscription2 = intervalo$.subscribe( rnd => console.log('subs2 ', rnd));


const subscription1 = subject$.subscribe( observer);
const subscription2 = subject$.subscribe(observer);



setTimeout(() => { 

    subject$.next(10);
    subject$.complete();
    intervalSubscription.unsubscribe();

}, 3500);