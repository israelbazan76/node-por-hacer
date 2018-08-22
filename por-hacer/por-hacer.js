const fs = require('fs');

let listadoPorHacer=[];

const cargarDB = () =>{
	try {
		// 
		listadoPorHacer=require("../db/data.json");	
	} catch(e) {
		// al inicio cuando el archivo esta vacio nos da una exception, entonces la variable
		// la ponemos como una arreglo vacio
		listadoPorHacer=[];
	}
	

}

const getListado = () =>{
   cargarDB();
   return listadoPorHacer;
}

const crear=(descripcion)=>{

    cargarDB();

	let porHacer = {
		descripcion:descripcion,
		completado:false
	}

	listadoPorHacer.push(porHacer);

	guardarDB();

	return porHacer;
}

const actualizar=(descripcion,completado=true)=>{

    cargarDB();

	let index =	listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);

	if(index>=0){
		listadoPorHacer[index].completado=completado;
	    guardarDB();
        return true;	
	}

	
	return false;
}

const guardarDB=()=>{
	let data=JSON.stringify(listadoPorHacer);
	fs.writeFile('db/data.json', data, (err) => {
      if (err) throw new Error('No se pudo grabar',err);
     // console.log('The file has been saved!');
    });
}

const borrar=(descripcion)=>{

    cargarDB();

	let index =	listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);

	if(index>=0){
		listadoPorHacer.splice(index,1);//elimina en la posicion index 1 elemento
	    guardarDB();
        return true;	
	}

	
	return false;
}


module.exports = {
	crear, getListado, actualizar, borrar
}

