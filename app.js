//const argv=require('yargs').argv;

const argv=require('./config/yargs').argv;


const { crear, getListado, actualizar,borrar } = require('./por-hacer/por-hacer.js');


let comando =argv._[0];

switch (comando) {
	case 'listar':
		//console.log("listar");
        let listado = getListado();
        //console.log(listado);
        for(let elemento of listado){
        	console.log(elemento.descripcion +' estado: '+elemento.completado);
        }
		break;
	case 'crear':
		crear(argv.descripcion);
		break;
	case 'actualizar':
	    actualizar(argv.descripcion,argv.completado);
		console.log("actualizar");
		break;
	case 'borrar':
	    if(borrar(argv.descripcion,argv)){
	    	console.log('Borrado OK')
	    }else{
	    	console.log("Fallo en el borrado");
		}
		break;
	default:
		console.log("comando no reconocido");
		break;
}