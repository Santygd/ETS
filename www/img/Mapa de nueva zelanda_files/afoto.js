/*****************************************************************************
Pop-up ajustada a foto. Script creado por Tunait!
Si quieres usar este script en tu sitio eres libre de hacerlo con la condici�n de que permanezcan intactas estas l�neas, osea, los cr�ditos.
No autorizo a publicar y ofrecer el c�digo en sitios de script sin previa autorizaci�n
Si quieres publicarlo, por favor, contacta conmigo.
http://javascript.tunait.com/
tunait@yahoo.com 
******************************************************************************/

var titulopordefecto = "Vista del mapa en JPG"; //Si no se especifica un t�tulo al llamar a la funci�n colocar� el que se especifique aqu�
var ventana;
var cont=0;

function afoto(cual,titulo)
{
if(cont==1){ventana.close();ventana=null}
if(titulo==null){titulo=titulopordefecto}
ventana=window.open('','ventana','resizable=yes,scrollbars=yes')
ventana.document.write('<html><head><title>' + titulo + '</title></head><body style="overflow:hidden" marginwidth="0" marginheight="0" topmargin="0" bottommargin="0" leftmargin="0" rightmargin="0" scroll="yes" onUnload="opener.cont=0"><img src="' + cual + '" onLoad="opener.redimensionar(this.width, this.height)">');
ventana.document.close();
cont++;
}
function redimensionar(ancho, alto)
{
ventana.resizeTo(ancho+20,alto+28);
ventana.moveTo((screen.width-ancho)/2,(screen.height-alto)/2); //centra la ventana. Eliminar si no se quiere centrar el popup
}
