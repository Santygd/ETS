var usuario="atlas";
var dominio="digiatlas.es";
var conector="@";


function dame_correo()
{ 
   return usuario + conector + dominio;
} 

function escribe_enlace_correo()
{ 
   document.write("<a href='mailto:" + dame_correo() + "'>Contacto</a>");
} 

function dame_correoAng()
{ 
   return usuario + conector + dominio;
} 

function escribe_enlace_correoAng()
{ 
   document.write("<a href='mailto:" + dame_correoAng() + "'>Contact</a>");
} 


function dame_correo2()
{ 
   return usuario + conector + dominio;
} 

function escribe_enlace_correo2()
{ 
   document.write("<a href='mailto:" + dame_correo() + "'>solicitarlo a Digiatlas</a>");
} 
