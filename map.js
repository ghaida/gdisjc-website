
$(document).ready(function(){
      L.mapbox.accessToken = 'pk.eyJ1IjoiYXJjNjc4OSIsImEiOiIyUU9lcmdJIn0.nZKA7rHTaVFz-M2oTt2ZMA';
      var map = L.mapbox.map('map', 'arc6789.78f63ca4').setView([37.3382, -121.8863], 11);  /*examples.map-i86nkdio*/  /*arc6789.78f63ca4*/
      


      //FOR GDI!
      var MEETUP_URL = "http://api.meetup.com/2/events?key=547995146f21675d2a7e111f665777&offset=0&format=json&limited_events=False&group_urlname=Girl-Develop-It-San-Jose&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&callback=";

      //FOR WOMEN WHO CODE!
      // var MEETUP_URL = "http://api.meetup.com/2/events?key=547995146f21675d2a7e111f665777&offset=0&format=json&limited_events=False&group_urlname=Women-Who-Code-SF&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&callback=";




      function convert(epoch){
          var epoch;
          var myDate = new Date(epoch);
          return myDate.toLocaleString();

      }

      

      $.ajax({

          url: MEETUP_URL,
          type: "GET",
          dataType: 'jsonp',
          cache: false,
          success: function(response){                      
              var htmlString = "";
              // var htmlStringp="";

          

              $.each(response.results, function (i, item) {

                  var mgeojson = L.mapbox.featureLayer({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        // coordinates here are in longitude, latitude order because
                        // x, y is the standard for GeoJSON and many formats
                        coordinates: [
                          item.venue.lon,
                          item.venue.lat
                        ]
                    },
                    properties: {
                        title: item.venue.name,
                        description: item.venue.address_1,
            
                        'marker-size': 'small',
                        'marker-color': '#f95a61', /*#f95a61 #BE9A6B*/
                        // 'marker-symbol': 'cafe',
                        icon:{
                        'draggable':'true',}
                    }
                  });
              
                  mgeojson.addTo(map);

                  htmlString += '<h5><a href="' + item.link + '" target="_blank">' + item.name + '</a></h5>';
                  htmlString += '<p> Address: ' + item.venue.address_1 + '</br></p>' ;
                  // htmlString += 'lon ' + item.venue.lon + ' lat ' + item.venue.lat + "<br/>";
                  htmlString += '<p>'+ convert(item.time)+'</p>';
                  
                  htmlString += '<hr style="color:red">';

                  $("ol").append(htmlString);
                  htmlString="";

              }); /* end of .each item*/
              
           } /*end of sucess response*/

      }); /*ajax request ends */
});


