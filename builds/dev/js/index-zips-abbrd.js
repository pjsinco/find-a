$(document).ready(function() {

  console.log('zips abbrd');
  
  var zipsAbbrd = new Bloodhound({
  
    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    remote: {
      url: './js/zips-abbrd.json',
      filter: function(d) {
        var arr = $.map(d, function(e) {
          return { value: e['zip'] };
        });
        return arr;
      }
    }
  });

  zipsAbbrd.initialize();

  $('#select-zips-abbrd .typeahead')
     .typeahead({
        highlight: true
      },{
        name: 'zips',
        displayKey: 'value',
        source: zipsAbbrd.ttAdapter()
      });

});
