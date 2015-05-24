
//<!-- Idea de:  Nic Wolfe (Nic@TimelapseProductions.com) -->
//<!-- TRADUCIDO POR FILMEO WEBMASTER, www.filmeo.net -->
//<!-- Inicio
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=yes,width=550,height=550,left = 250,top = 250');");
//eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=yes,width=450,height=500,left = 250,top = 100');");

}
// Fin -->
