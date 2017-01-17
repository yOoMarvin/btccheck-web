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
  //handle request and format data
  let url = buildUrl();
  $.getJSON(url, function(data){
    formatData(data);
  });
}


function formatData(data) {
  //fill UI elements with data from json
  for (var i = 0; i < data.length; i++) {
    var date = formatDate(data[i].time);
    dates.push(date);
    prices.push(data[i].average);
  }

  //reverse arrays for correct order
  dates = dates.reverse();
  prices = prices.reverse();

  //console.log(dates);
  //console.log(prices);
}

function formatDate(date) {
  //slice "00:00:00" out
  var date = date.slice(0, 10);

  var year = date.slice(0, 4);
  var month = date.slice(5, 7);
  var day = date.slice(8, 10);

  var result = month + "/" + day + "/" + year;

  return result;
}


//on load fill data
window.onload = fetchData();
