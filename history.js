var dates = [];
var prices = [];


function buildUrl() {
  //build url
  //return it as a string
  //https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=alltime&format=json
  let host = "apiv2.bitcoinaverage.com"
  let path = "indices/global/history"
  let currency = "BTCUSD"
  let params = "period=alltime&format=json"

  return "https://"+host+"/"+path+"/"+currency+"?"+params;
}


function fetchData() {
  //handle request and fill data
  let url = buildUrl();
  $.getJSON(url, function(data){
    formatData(data);
  });
}


function formatData(data) {
  //fill UI elements with data from json
  console.log(data);
}


//on load fill data
window.onload = fetchData();
