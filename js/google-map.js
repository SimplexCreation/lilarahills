var map, map2;

var infrastructureMarkers = [];

var styles = [
    {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      { hue: '#cdcdcd' },
      { saturation: -100 },
      { lightness: 18 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      { hue: '#e8e8e8' },
      { saturation: -100 },
      { lightness: 18 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road',
    elementType: 'all',
    stylers: [
      { hue: '#fdfdfd' },
      { saturation: -100 },
      { lightness: -1 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      { hue: '#fdfdfd' },
      { saturation: -100 },
      { lightness: -1 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [
      { hue: '#c0c0c0' },
      { saturation: -100 },
      { lightness: -3 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      { hue: '#c0c0c0' },
      { saturation: -100 },
      { lightness: -3 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      { hue: '#ffffff' },
      { saturation: -100 },
      { lightness: -9 },
      { visibility: 'on' }
    ]
  }

  ];






function initializeMapContacts() {

      var mapOptions = {
        zoom:16,
        center: new google.maps.LatLng(50.2303953,12.8688096),
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scaleControl: true,
        streetViewControl: false


      };
  
  

  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

  var styledMapOptions = {
      name: "Rêvelton Suites"
  }

  var jayzMapType = new google.maps.StyledMapType(
      styles, styledMapOptions);

  map.mapTypes.set('bestfromgoogle', jayzMapType);
  map.setMapTypeId('bestfromgoogle');
  


  var mapContent = [['Rêvelton Suites', 50.2300611,12.8681093, 'hotel', '<div class="contactsMap_info_hotel"><div class="M-logo"></div><div class="M-address">T.G. MASARYKA, 825/45, 360 01, KARLOVY VARY, CZECH REPUBLIC</div></div>'], ['Airport Karlovy Vary', 50.2029458,12.9125759, 'airport', '<div class="contactsMap_info_hotel"><div class="M-logo M-airport"></div><div class="M-address M-addres-airport">Airport Karlovy Vary</div></div>'], ['Bus station', 50.2309553,12.869409, 'bus', '<div class="contactsMap_info_hotel"><div class="M-logo M-bus"></div><div class="M-address M-addres-airport">Karlovy Vary Bus Station</div></div>'] ];
 
  setMarkers(map, mapContent);

				
}


function setMarkers(map, locations) {
    var marker, i

    for (i = 0; i < locations.length; i++) {  

         var loan = locations[i][0]
         var lat = locations[i][1]
         var long = locations[i][2]
         var type = locations[i][3]
         var content =  locations[i][4]

         latlngset = new google.maps.LatLng(lat, long);
         
         
         if(type == 'hotel') {
             if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) { 
                // is IE11 
                var booletName = 'map-revelton.png';
             }
             else {
                var booletName = 'map-revelton.svg';
                
             } 
          }

          else if(type == 'bus') {
             if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) { 
                // is IE11 
                var booletName = 'map-busstop.png';
             }
             else {
                var booletName = 'map-busstop.svg';
                
             } 
          }

          else {
             if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) { 
                // is IE11 
                var booletName = 'map-airport.png';
             }
             else {
                var booletName = 'map-airport.svg';
                
             } 
          }

         var companyImage = new google.maps.MarkerImage('/img/'+booletName,
            new google.maps.Size(101,78),
            new google.maps.Point(0,0),
            new google.maps.Point(30,76)
        );
         
          var marker = new google.maps.Marker({  
             map: map, 
             title: loan, 
             icon: companyImage,
             position: latlngset  
          });
          
          //map.setCenter(marker.getPosition())


          

          var infowindow = new google.maps.InfoWindow()

            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
                
                return function() {
                   
                   infowindow.setContent(content);
                   infowindow.open(map,marker);
                };
            })(marker,content,infowindow)); 

      }
}





///////////////////// INFRASTRUCTURE ///////////////////////


function initializeMapInfrastructure() {
  

      
      var centerOfMap1 = '50.2281315';
      var centerOfMap2 = '12.869079';
      var zoomOfMap = 16;
      
      if($('body').hasClass('mobile')) {
        centerOfMap1 = '50.2300242';
        centerOfMap2 = '12.8699706';
        zoomOfMap = 17;

      }
      

      var mapOptions2 = {
        zoom:zoomOfMap,
        center: new google.maps.LatLng(centerOfMap1,centerOfMap2),
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        panControl: false,
        scrollwheel: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: false


      };
  
  

  map2 = new google.maps.Map(document.getElementById("infraMap"),
      mapOptions2);

  var styledMapOptions2 = {
      name: "Rêvelton Suites"
  }

  var jayzMapType = new google.maps.StyledMapType(
      styles, styledMapOptions2);

  map2.mapTypes.set('bestfromgoogle', jayzMapType);
  map2.setMapTypeId('bestfromgoogle');
  


  setMarkers2(map2, mapContent2);

        
}


if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) { 
                // is IE11 
                var icoFileType = 'png';
             }
             else {
                var icoFileType = 'svg';
                
} 


function setMarkers2(map, locations) {
    var marker, i


    

    for (i = 0; i < locations.length; i++) {  

         var loan = locations[i][0]
         var lat = locations[i][1]
         var long = locations[i][2]
         var type = locations[i][3]
         var content =  locations[i][4]

         latlngset = new google.maps.LatLng(lat, long);
         
         
         
          
          
         
          

          if(type == 'hotel') {

              var booletName = 'map-revelton.' + icoFileType;
              var companyImage = new google.maps.MarkerImage('/img/'+booletName,
                new google.maps.Size(101,78),
                new google.maps.Point(0,0),
                new google.maps.Point(30,76)
              );

              var marker = new google.maps.Marker({  
                 map: map, 
                 title: loan, 
                 icon: companyImage,
                 position: latlngset  
              });
              
              


              

              var infowindow = new google.maps.InfoWindow();

                google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
                    
                    return function() {
                      setAllMakersToDefault();
                       
                      infowindow.setContent(content);
                      infowindow.open(map,marker);
                      //map.setCenter(marker.getPosition());


                      $("div.mapMarkerDesc").removeClass('openedMapDesc');
                    };
                })(marker,content,infowindow)); 

          }
          else {



              var booletName = type+'_marker.' + icoFileType;

              var image = {
                url: '/img/cat_469/'+booletName,
                size: new google.maps.Size(75, 56),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(23, 57),
                scaledSize: new google.maps.Size(75, 56)
              };

              var marker = new google.maps.Marker({  
                 map: map, 
                 title: loan, 
                 icon: image,
                 position: latlngset  
              });

              var fullMarkerInfo = [ marker, content, type ];
              infrastructureMarkers.push(fullMarkerInfo);
              
              

                google.maps.event.addListener(marker, 'click', (function(marker,content, type){ 


                    
                    return function() {

                      setAllMakersToDefault();
                       
                       //$("div.mapMarkerContent").html("");
                       //$("#mapInfraDesc").html(content);


                      document.getElementById('mapInfraDesc').innerHTML = content;

                      var image = {
                          url: '/img/cat_469/'+type+'_markerAct.' + icoFileType,
                          size: new google.maps.Size(75, 56),
                          origin: new google.maps.Point(0, 0),
                          anchor: new google.maps.Point(23, 57),
                          scaledSize: new google.maps.Size(75, 56)
                      };

                      $("div.mapMarkerDesc").data('typeof', type);



                      marker.setIcon(image);
                      marker.setAnimation(google.maps.Animation.BOUNCE);
                      $('body').oneTime('1.44s', function(){
                          marker.setAnimation(null);
                      });



                       $("div.mapMarkerDesc").addClass('openedMapDesc');

                       var randVal = getRandomInt(1, 4);

                       $("div.mapMarkerDesc").css({'background-image': 'url(/img/revelton-bg'+randVal+'.svg)'});

                       //map.setCenter(marker.getPosition());

                    };
                })(marker,content, type)); 

             
          }


         
         
          

      }
}




function setAllMakersToDefault() {
  var marker, type, image;
  for(var i=0; i<infrastructureMarkers.length; i++) {
    marker = infrastructureMarkers[i][0];
    type = infrastructureMarkers[i][2];
    image = {
      url: '/img/cat_469/'+type+'_marker.'+icoFileType,
      size: new google.maps.Size(75, 56),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(23, 57),
      scaledSize: new google.maps.Size(75, 56)
    };

    marker.setIcon(image);
    
  }
}


function hideAllMarkers() {
  var marker, type, image;
  for(var i=0; i<infrastructureMarkers.length; i++) {
    marker = infrastructureMarkers[i][0];
    marker.setMap(null);
  }
}



function showMarkers(ofType) {
  var marker, type, image;
  for(var i=0; i<infrastructureMarkers.length; i++) {
    marker = infrastructureMarkers[i][0];
    type = infrastructureMarkers[i][2];
    if(type == ofType) {
      marker.setMap(map2);
    }
    else if(ofType == 'all') {
      marker.setMap(map2);
    }

  }
}



