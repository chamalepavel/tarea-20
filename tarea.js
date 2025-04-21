// función para mostrar el paso actual en consola
const mostrarPaso = () => {
    contador++;
    console.log('\n***********************************************');
    console.log(`Proceso ${contador}`);
    console.log('-----------------------------------------------');
};

let contador = 0; // inicializador del paso


// Proceso 1
mostrarPaso();

// Descomentar para ver estructura inicial

// const androide = {
//     _modelo: 'ZK-45',
//     _nivelEnergia: 95,
//     get nivelEnergia() {
//         // lógica aún no implementada
//     }
// };


// Proceso 2
mostrarPaso();

// Descomentar para ver avance

// const androide = {
//     _modelo: 'ZK-45',
//     _nivelEnergia: 95,
//     get nivelEnergia() {
//         if (typeof this._nivelEnergia === 'number') {
//             return `Mi energía actual es ${this._nivelEnergia}.`;
//         }
//     }
// };


// Proceso 3
mostrarPaso();

// Versión funcional completa

const androide = {
    _modelo: 'ZK-45',
    _nivelEnergia: 95,
    get nivelEnergia() {
        return typeof this._nivelEnergia === 'number'
            ? `Mi energía actual es ${this._nivelEnergia}.`
            : 'Error del sistema: no se puede obtener el nivel de energía.';
    }
};


// Proceso 4
mostrarPaso();

// Mostrar nivel de energía
console.log(androide.nivelEnergia); // Mi energía actual es 95.
