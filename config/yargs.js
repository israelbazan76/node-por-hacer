const descripcion= {
		demand: true,
		alias: 'd',
		desc: 'descripcion de la tarea'
	};


const argv=require('yargs')
.command('actualizar','actualiza una tarea',{
   descripcion:descripcion,
	completado:{
		alias:'c',
		default:true,
		desc: 'marca como completado'
	}
})
.command('crear','crea una tarea',{
    descripcion:descripcion
})
.command('borrar','borra una tarea',{
    descripcion:descripcion
})
.help().argv;

module.exports = {
	argv
}
