$(document).ready(function() {

  console.log('countries');

  var countries = new Bloodhound({

    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    remote: {
      url: 'js/countries.json',
      filter: function(d) {
        return $.map(d, function(e) {
          return { name: e };
        });
      }
    }
  });

  countries.initialize();
  
  $('#prefetch .typeahead').typeahead(null, {
    displayKey: 'name',
    source: countries.ttAdapter()
  });

});
