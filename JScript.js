window.onload = iniciar;
function iniciar () {
    document.getElementById('enviar').addEventListener('click', validate, false);
}

function validaNombreApellidoDireccionCiudad() {
    var name1 = document.getElementById('nombre');
    var name2 = document.getElementById('apellido');
    var address = document.getElementById('direccion');
    var city = document.getElementById('ciudad');

    if (name1.value ==''){
    alert('Falta cargar tu nombre');
    return false
    }
    if (name2.value ==''){
        alert('Falta cargar tu apellido');
        return false;
    }
    if (address.value ==''){
        alert('Falta cargar tu direccion');
        return false;
    }
    if (city.value ==''){
        alert('Falta cargar tu ciudad');
        return false;
    }
    return true;
}

function validaFechaNacimiento(){
    var fechaN = document.getElementById('fechanacimiento').value;
    if (!Date.parse(fechaN)){
        alert('Falta cargar tu fecha de nacimiento');
        return false;
    }
        return true;
}
function validaTelefono(){
    var zona = document.getElementById('tel1');
    var caracteristica = document.getElementById('tel2');
    var nro = document.getElementById('tel3');
    if (zona.value =='' | caracteristica.value == '' | nro.value == ''){
        alert('Completa datos en el telefono ingresado');
        return false;
    }
    if (isNaN(zona.value) | isNaN(caracteristica.value) | isNaN(nro.value)){
        alert('El telefono debe contener solo numeros')
        return false;
    }
    return true;
}
function validaSexo(){
    var genero = document.getElementById('sexo');
    if (genero.value ==''){
        alert('Seleccione genero');
        return false;
    }
     return true;
}
function validaEstadoCivil(){
    var estado = document.getElementById('condicioncivil');
    if (estado.value ==''){
        alert('Indique su estado civil');
        return false;
    }
     return true;
}
function validaEstudios(){
    var estudio = document.getElementById('estudios');
    if (!estudio.checked){
        alert('Indique su nivel educativo');
        return false;
    }
     return true;
}
function validate(e){
    if (validaNombreApellidoDireccionCiudad() && 
        validaFechaNacimiento() &&
        validaTelefono() && 
        validaSexo() && 
        validaEstadoCivil() &&
        validaEstudios() &&
        confirm('Desea enviar?')) {
        return true;
    } else {
        /* evito que se envie el formulario */
        e.preventDefault();
        return false;
    }
}
