//$(document).ready(function() {

  console.log('countries-23');

  var countries = new Bloodhound({

    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },

    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    prefetch: {
      url: './js/countries.json',
      filter: function(d) {
        var arr = $.map(d, function(e) {
          return { name: e };
        });
        console.log(arr);
        return arr;
      }
    }
  });

  countries.initialize();
  countries.clearPrefetchCache();
  
  $('#select-country .typeahead').typeahead({
    highlight: true,
  }, {
    name: 'countries-list',
    displayKey: 'name',
    source: countries.ttAdapter()
  });

//});
