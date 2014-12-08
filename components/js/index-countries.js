$(document).ready(function() {

  console.log('countries');

  var countries = new Bloodhound({

    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    remote: {
      url: './js/countries.json',
      filter: function(d) {
        var arr = $.map(d, function(e) {
          return { name: e };
        });
        return arr;
      }
    }
  });

  countries.initialize();
  
  $('#select-country .typeahead').typeahead({
    highlight: true,
  }, {
    name: 'countries-list',
    displayKey: 'name',
    source: countries.ttAdapter()
  });

});
