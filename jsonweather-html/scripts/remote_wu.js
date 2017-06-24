// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url: "http://api.wunderground.com/api/c3e1f8d932f84850/geolookup/conditions/q/" + lat + "," + long + ".json", success: function(data, textStatus, xhr) {
        $("#cityDisplay").html(data.location.city+', '+data.location.state);
        $("#currentTemp").html(Math.round(data.current_observation.temp_f)+ "&degF");    
            //data.nearby_weather_stations.state);   
        $("#summary").html("Weather Outside is " + data.current_observation.weather);
        $("#add1").html("Wind: " + data.current_observation.wind_mph + "MPH " + data.current_observation.wind_dir);
        $("#add2").html("Humidity: " + data.current_observation.relative_humidity);
        $("#add3").html("UV: " + data.current_observation.UV);    
        console.log(data);
           
            }
        })
  }
          
function getWeather(lat, long){
    $.ajax({
        url: "http://api.wunderground.com/api/c3e1f8d932f84850/conditions/q/" + lat + "," + long + ".json",
        success: function(data, textStatus, xhr) {
//      $("#current_conditions").html(temp.temp_f);    
        console.log(data);    
            }
      
       
    })
}
    







      $("#cover").fadeOut(250);
    
          

  

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
