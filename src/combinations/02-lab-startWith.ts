import { ajax } from "rxjs/ajax";
import { startWith } from 'rxjs';

//Referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');


//streams

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)
    )
    .subscribe(resp => { 
        if(resp === true){
            body.append(loadingDiv);
        } else {
            loadingDiv.remove();
        }
        console.log(resp);
    });


    //Uso interesante del startWith para que el loading se muestre antes de que se emita el primer valor
    //https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16808482#overview