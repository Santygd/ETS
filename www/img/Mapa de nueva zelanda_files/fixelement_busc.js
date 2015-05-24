function fixElement(element, message) {
alert(message);
element.focus();
}
function provamail(form) {
var passed = false;
if (form.buscar.value == "") {
fixElement(form.buscar, "Por favor, incluya algun nombre en la casilla 'Buscar mapas'.");
}
else {
passed = true;
}
return passed;
}
