<script> 
if(navigator.geolocation){ 
		alert('c');
    	navigator.geolocation.getCurrentPosition( 
        	function(p){ 
			alert('a');
            	document.getElementById('geo_loc').innerHTML="纬度"+p.coords.latitude+"经度"+p.coords.longitude; 
            	createMap(p.coords.latitude,p.coords.longitude); 
        	}, 
        	function(err){ 	
			alert('b');
            	document.getElementById('geo_loc').innerHTML=err.code+"\n"+err.message; 
        	} 
    	); 
}else{ 
    	document.getElementById('geo_loc').innerHTML="您的浏览器不支持地图定位"; 
} 
function createMap(a,b){ 
    	var map=new BMap.Map("dituContent");           
    	var point=new BMap.Point(b,a);          
    	map.centerAndZoom(point,15);            
	map.enableScrollWheelZoom();           
    	window.map=map;                 
} 
</script> 