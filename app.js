const argv = require('./config/yargs').args;

const porHacer = require('./por-hacer/por-hacer');


//pretendemos hacer algo del tipo
//node app crearTarea -d "<nombre_tarea"
//node app crearTarea -d "Pasear al Perr"

//node app listarTarea
//node app actualizarTarea -d "Pasear al Perro" -d true

//recogemos los comandos de la línea de comandos

let comando = argv._[0];
//console.log('*******', argv);
switch (comando) {

    case 'crear':
        console.log('Crear por hacer:');
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;

    case 'listar':
        console.log('Tarea Listar');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('============')
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('========');
        }
        break;

    case 'actualizar':
        console.log('================');
        console.log('Tarea Actualizar');
        porHacer.actualizar(argv.description)
        break;

    case 'borrar':
        porHacer.borrarTarea(argv.description);
        break;

    default:
        console.log('Comando no reconocido');
}