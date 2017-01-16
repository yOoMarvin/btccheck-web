function buildUrl() {
  //build url
  //return it as a string
  let host = "apiv2.bitcoinaverage.com"
  let path = "indices/global/ticker"
  let currency = "BTCUSD"

  return "https://"+host+"/"+path+"/"+currency;
}


function fetchData() {
  //handle request and fill data
  let url = buildUrl();
  $.getJSON(url, function(data){
    fillData(data);
  });
}


function fillData(data) {
  //fill UI elements with data from json
  console.log(data);
  $("#price").html(data.ask + " $");
  $("#date").html(generateDate());
  $("#today-open").html(data.open.day + " $");
  $("#today-high").html(data.high + " $");
  $("#today-low").html(data.low + " $");
  var change = data.changes.percent.day; //extra case because of %
  $("#change").html(formatChange(change));
  $("#avg").html(data.averages.week + " $");
  $("#volume").html(data.volume + " $");
}


function generateDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  }
  if(mm<10) {
      mm='0'+mm
  }
  today = mm+'/'+dd+'/'+yyyy;
  return today;
}


function formatChange(change){
  if (change < 0 ){
    change = "- " + change + " %";
    $("#change").css("color", "#d9534f");
  }else {
    change = "+ " + change + " %";
    $("#change").css("color", "green");
  }
  return change;
}

//on load fill data
window.onload = fetchData();
