
import { Observable, Observer, Subscriber } from 'rxjs';


const observer:Observer<any> = {

    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')


}


// const obs$ = Observable.create()

const obs$ = new Observable<string>(subscriber => {
    
    subscriber.next('Hola');
    
    subscriber.next('Mundo');
    
    // subscriber.error('Error');
    
    subscriber.complete();
    
    //no se ejecuta
    subscriber.next('Mundo');



} );


// obs$.subscribe(resp => console.log(resp));
// obs$.subscribe(console.log);

obs$.subscribe(observer);







