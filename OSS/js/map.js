var myCenter=new google.maps.LatLng(22.6876402383,113.9259866372);
function initialize(){
	var mapProp = {
	  center:myCenter,
	  zoom:13,
	   scaleControl:false,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("areaMap"),mapProp);
	//创建标记点
	var marker=new google.maps.Marker({
	  position:myCenter,
	  animation:google.maps.Animation.BOUNCE
	});
	marker.setMap(map);
	//在标记上显示信息窗口
	var infowindow = new google.maps.InfoWindow({
	  content:"深圳市"
	});
	google.maps.event.addListener(marker, 'click', function() {
  		infowindow.open(map,marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);