import { asyncScheduler } from "rxjs";

//Planifica tareas de la misma forma que usando setTimeout(task, duration).

//El Planificador async planifica tareas asíncronamente, colocándolas en la cola del bucle de eventos de JavaScript. 
// Se utiliza para retrasar tareas en el tiempo o para planificar tareas que se repitan en intervalos.

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// Pasamos la función.
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Fernando');

// El tercer argumento (state) puede ser cualquier cosa, es el estado inicial.
// Esto es lo mismo que hicimos arriba.
const subs = asyncScheduler.schedule(function(state) {
  console.log('state:', state);

  this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

// Desuscribirnos.
asyncScheduler.schedule(() => {
  subs.unsubscribe();
}, 6000);
