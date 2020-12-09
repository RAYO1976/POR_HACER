//aqui vamos a meter la logica para que la tarea sea persistente

//objetivo: grabar en un fichero las tareas

const fichero = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    //CONVERTIVOS EL OBJETO O ARRAY EN UNA CADENA JSON VALIDA

    let data = JSON.stringify(listadoPorHacer);

    fichero.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err);
    });
}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}
const crear = (descripcion) => {
    cargarDB();
    //objeto porHacer
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    //return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    for (let tarea of listadoPorHacer) {
        if (tarea.descripcion == descripcion) {
            tarea.completado = completado;
            break
        }
    }
    guardarDB();

}

const borrarTarea = (descripcion) => {

    cargarDB();
    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (indice != -1) {
        listadoPorHacer.splice(indice, 1);
    }
    guardarDB();
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}