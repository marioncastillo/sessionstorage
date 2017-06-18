function saveData(){
	var name=document.getElemenById("name").value;
	var clave=document.getElemenById("clave").value;
	sessionStorage.setItem(name,clave);
}

function recoverData{
	for(var i=0;i<sessionStorage.length;i++){
		var name=sessionStorage.key(i);
		var clave=sessionStorage.getItem(name);
		document.getElemenById("data").innerHTML = '<div>' + 'Nombre : ' + name + '<br/> Clave : ' +clave+ '<div>';
	}
}

function cleanData(){
	document.getElemenById("data").innerHTML='Limpiada Vista.Los datos permanecen.';
}

function borrarTodo(){
	sessionStorage.clear(); recoverData();
}