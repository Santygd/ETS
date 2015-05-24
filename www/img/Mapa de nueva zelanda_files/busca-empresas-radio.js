	var promo = [];
//	        if (google.loader.ClientLocation) {
  //          var lat = google.loader.ClientLocation.latitude;
    //        var lng = google.loader.ClientLocation.longitude;
      //      var userlocation = google.loader.ClientLocation.address.city;
//			} else {
	//		alert('Google was not able to detect your location');
		//	}

	var userlocation= geoplugin_city();
	var lat = geoplugin_latitude();
	var lng = geoplugin_longitude();
	var geopais = geoplugin_countryCode();
	var pos=0;
	var novapos= '';
	
	function MaysPrimera(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
   function clearLocations() {
     for (var i = 0; i < promo.length; i++) {
	promo[i] = null;
	}
	 promo.length = 0;
   }

   
   function posabonapos() {
   if(pos==0) {
   document.getElementById('malapos').style.visibility = 'visible';
   document.getElementById('BonaAdress').focus();
   pos=1;
   }else{
   document.getElementById('malapos').style.visibility = 'hidden';
   pos=0
   }
   }
   
   function posaBonaAdress() {
   novapos = document.getElementById("BonaAdress").value;
	var geocoder = new google.maps.Geocoder();
     geocoder.geocode({address: novapos}, function(results, status) {
       if (status == google.maps.GeocoderStatus.OK) {
		lat=results[0].geometry.location.lat();
		lng=results[0].geometry.location.lng();
			for(var i = 0; i < results[0].address_components.length; i++) {
			if(results[0].address_components[i].types[0] == "country") {
			geopais = results[0].address_components[i].short_name;
			}
			}
		userlocation = MaysPrimera(novapos.toLowerCase());
		posabonapos();
		searchLocationsNear();		
       } else {
         alert(novapos + ' direccion no encontrada');
       }
     });
   }
   
   
    function posapromo(){
	var contador = promo.length;
	userlocation = MaysPrimera(userlocation.toLowerCase());
	userlocation = userlocation+" ("+geopais+")";
	//var varjs="'.$variable_php.'";
	if (contador == 0 || userlocation == "Undefined" || userlocation == "" || userlocation == "undefined"){
		if (geopais == "ES" || geopais == "MX" || geopais == "AR" || geopais == "CL"|| geopais == "PE"|| geopais == "CO" || geopais == "VE" || geopais == "EC" || geopais == "BO" || geopais == "PY") {
	document.getElementById('cont').innerHTML = "<p class='normal'><strong>No se encuentran suscriptores cerca de "+userlocation+"</strong></p><p class='pie'><a href='#' onclick='posabonapos();'>Cambiar la localización</a></p>";
	document.getElementById('malapos').innerHTML = "<div align='right' style='margin: 10px 10px 10px;width:170px;padding: 10px 5px 5px;text-align: left;background-color: #E3E3C0; font-size: 12px;'><span class='normal'><input type='text' id='BonaAdress' size='18'></span><p class='normal'>incluya una dirección ó ciudad para orientar mejor los anuncios a esa ubicación geográfica.<a href='#' onclick='posaBonaAdress()'>&nbsp;&nbsp; <b>buscar »</b></a></div>";
	nopromo = "<div align='center' class='realbox'><span><a href='http://www.digiatlas.com/digilist.html' class='h7'>Desea que su empresa aparezca anunciada en esta posición en todas las páginas de DigiAtlas?</a></span></div>";
		}else{
	document.getElementById('cont').innerHTML = "<p class='normal'><strong>There were no subscribers near "+userlocation+"</strong></p><p class='pie'><a href='#' onclick='posabonapos();'>Change the default location</a></p>";
	document.getElementById('malapos').innerHTML = "<div align='right' style='margin: 10px 10px 10px;width:170px;padding: 10px 5px 5px;text-align: left;background-color: #E3E3C0; font-size: 12px;'><span class='normal'><input type='text' id='BonaAdress' size='18'></span><p class='normal'>Enter a address or city to target ads to their geographic location<a href='#' onclick='posaBonaAdress()'>&nbsp;&nbsp; <b>search »</b></a></div>";
	nopromo = "<div align='center' class='realbox'><span><a href='http://www.digiatlas.com/ang/digilist.html' class='h7'>Do you want that your advertising appears in this place in all pages of DigiAtlas?</a></span></div>";
		}
   document.getElementById('promos').innerHTML = nopromo;
   clearLocations();
	}else{
		if (geopais == "ES" || geopais == "MX" || geopais == "AR" || geopais == "CL"|| geopais == "PE"|| geopais == "CO" || geopais == "VE" || geopais == "EC" || geopais == "BO" || geopais == "PY") {
	document.getElementById('malapos').innerHTML = "<div align='right' style='margin: 10px 10px 10px;width:170px;padding: 10px 5px 5px;text-align: left;background-color: #E3E3C0; font-size: 12px;'><span class='normal'><input type='text' id='BonaAdress' size='18'></span><p class='normal'>incluya una dirección ó ciudad para orientar mejor los anuncios a esa ubicación geográfica.<a href='#' onclick='posaBonaAdress()'>&nbsp;&nbsp; <b>buscar »</b></a></div>";
	document.getElementById('cont').innerHTML = "<p class='normal'><strong>Empresas y profesionales cerca de "+userlocation+"</strong></p><p class='pie'><a href='#' onclick='posabonapos();'>Cambiar la localización</a></p>";
	}else{
	document.getElementById('cont').innerHTML = "<p class='normal'><strong>Companies & Professionals near "+userlocation+"</strong></p><p class='pie'><a href='#' onclick='posabonapos();'>Change the default location</a></p>";
	document.getElementById('malapos').innerHTML = "<div align='right' style='margin: 10px 10px 10px;width:170px;padding: 10px 5px 5px;text-align: left;background-color: #E3E3C0; font-size: 12px;'><span class='normal'><input type='text' id='BonaAdress' size='18'></span><p class='normal'>Enter a address or city to target ads to their geographic location<a href='#' onclick='posaBonaAdress()'>&nbsp;&nbsp; <b>search »</b></a></div>";
		}
		var fitxa= new Array();
		for (var i = 0; i <= (contador-1); i++) {
			fitxa += promo[i];
   document.getElementById('promos').innerHTML = fitxa;
   //pg = pg + perpage;
	}	
}
}

   function searchLocationsNear() {
     clearLocations(); 

     var radius = document.getElementById('radiusSelect').value;
     var searchUrl = 'http://www.digiatlas.com/cgi-php/listado-empresas-radio.php?lat=' + lat + '&lng=' + lng + '&radius=' + radius + '&novapos=' + novapos + '&geopais=' + geopais + '&usl=' + userlocation;
     downloadUrl(searchUrl, function(data) {
       var xml = parseXml(data);
       var markerNodes = xml.documentElement.getElementsByTagName("marques");
       var bounds = new google.maps.LatLngBounds();
       for (var i = 0; i < markerNodes.length; i++) {
         var name = markerNodes[i].getAttribute("name");
         var address = markerNodes[i].getAttribute("address");
         var ciutat = markerNodes[i].getAttribute("ciutat");
         var cp = markerNodes[i].getAttribute("cp");
		 var tel = markerNodes[i].getAttribute("tel");
		 var foto_client = markerNodes[i].getAttribute("foto_client");
		 var paginaweb = markerNodes[i].getAttribute("paginaweb");
         var distance = parseFloat(markerNodes[i].getAttribute("distance"));
         var lat = parseFloat(markerNodes[i].getAttribute("lat"));
         var lng = parseFloat(markerNodes[i].getAttribute("lng"));
		 var latlng2 = lat + ", " + lng;
         var latlng = new google.maps.LatLng(
              parseFloat(markerNodes[i].getAttribute("lat")),
              parseFloat(markerNodes[i].getAttribute("lng")));
		 userlocation = markerNodes[i].getAttribute("userlocation");
		 geopais = markerNodes[i].getAttribute("geopais");
	if (foto_client == ""){
	foto_street = "<img src='http://cbk0.google.com/cbk?output=thumbnail&w=90&h=68&ll="+latlng2+"' width='90'>";
	}else{
	foto_street = "<img src='http://www.digiatlas.com/fotos-sus/"+foto_client+"' width='90' border='0'>";
	}
	if (paginaweb == ""){
promo[i] = "<div align='center' class='realbox'><span class='h7'>" + name + "</span><p>" +	address + "<br>" + cp + " - " + ciutat + "<br>" + tel + "<p align='center'>" + foto_street + "</div>";  
     }else{
promo[i] = "<div align='center' class='realbox'><span class='h7'><a target='_blank' href='" + paginaweb + "'>" + name + "</a></span><p>" +	address + "<br>" + cp + " - " + ciutat + "<br>" + tel + "<p align='center'>" + foto_street + "</div>";  
	}
       }
	   posapromo();
      });
    }
	    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request.responseText, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function parseXml(str) {
      if (window.ActiveXObject) {
        var doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.loadXML(str);
        return doc;
      } else if (window.DOMParser) {
        return (new DOMParser).parseFromString(str, 'text/xml');
      }
    }

    function doNothing() {}