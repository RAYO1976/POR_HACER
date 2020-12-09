/* ESTO SE PODRÍA SUSTITUIR POR 

const argv = require('yargs')
    .command('crear', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //comando obligatorio
            alias: 'b' //alias del comando; se podría escribir en vez de --base => - b
                //Ej: node app listar -b 5
        },
        limite: {
            alias: 'l',
            default: 4 //valor por defecto
        }
    })
    .help() //para que ofrezca la ayuda cuando se pulse node app listar --help
    .argv;
*/

const args = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza lista de tareas', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado la tarea'
        }
    })
    .command('borrar', 'Borra tarea', {
        description: {
            demand: true,
            alias: 'b',
            desc: 'Descripcion de la tarea a eliminar'
        }
    })
    .help()
    .argv;


//Para poder usuar "argumentos" desde fuera hay que exportarlo; En este caso estamos exportando el objeto args

module.exports = {
    args
}