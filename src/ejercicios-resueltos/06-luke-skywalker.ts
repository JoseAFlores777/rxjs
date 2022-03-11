import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';
import { zip, of, pluck, mergeAll } from 'rxjs';

/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   Luke Skywalker, llamando el endpoint:   /people/1/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Human)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/


(() => {
    const USER = '/people/2/'

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // // Realizar el llamado al URL para obtener a Luke Skywalker
    // getRequest(`${SW_API}${USER}`).pipe(
    //     // Realizar los operadores respectivos aquí
    //     map(val => ajax.getJSON(val.species[0])),
    //     mergeAll(),
    //     map(val => val),
    //     catchError(err => {
    //         return of(err.message);
    //     })

    // // NO TOCAR el subscribe ni modificarlo ==
    // ).subscribe( console.log )           // ==
    // // =======================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
    getRequest(`${SW_API}${USER}`).pipe(
        // Realizar los operadores respectivos aquí
        //el switchMap hace que el ultimo observable sobrescriba el output
            //switchMap(resp => getRequest(resp.species[0]))
        
        
            switchMap(resp => zip(of(resp), getRequest(resp.species[0]) )),
        
            map(([personaje, especie]) => ({ personaje, especie }))
        
        
        
        

    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log )           // ==
    // =======================================



})();

