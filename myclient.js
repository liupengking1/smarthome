window.onload = function () {
  var url,
    i,
    names = ["cpuload", "time"];  // the GPIO ports we will read

  for (i in names) {
    console.log('names:' + names[i]);
    $('#sensor_' + names[i]).html('loading ' + names[i] + ' value...');
  }

  setInterval( function () {
    for (i in names) {
      url = document.URL + 'smarthome/' + names[i];
      console.log('making API call ' + url);

      $.getJSON(url, function (data) {
        console.log('API response received. name ' + data.name + ' value = ' + data.value);
        $('#sensor_' + data.name).html('Sensor ' + data.name + ' value is ' + data.value);
      });
    } // for 
  }, 1000); // setInterval
  
}; //onload

