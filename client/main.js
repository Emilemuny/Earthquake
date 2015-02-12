/* global _ */

'use strict';

$(document).ready(init);

function init() {
  $('#get-data').click(clickGetData);
}

function clickGetData() {
  var year = $('#year').val();
  var type = $('#type').val();
  var url = 'https://cdph.data.ca.gov/resource/kbup-p858.json?year=' + year;
  $.getJSON(url, function(response) {

    var deaths = _.map(response, function(o){return o[type] * 1});
    deaths = _.compact(deaths);
    deaths = _.reduce(deaths, function(prev, curr){return prev + curr})

    console.log(deaths);

  })
}
