
import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {

    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable(subscriber => { 

    let count = 0;

    const interval = setInterval(() => {

        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => { 
        subscriber.complete();
    }, 2500);
    
    //metodo cuando se hace el unsubscribe
    return () => {
            clearInterval(interval);
        console.log('Intervalo destruido');
    }

});


const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe(observer);


subscription1.add(subscription2)
subscription1  .add(subscription3);




setTimeout(() => {
    
     subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();


    console.log('Se termino el intervalo');
    
    
 }, 3000);