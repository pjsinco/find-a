$(document).ready(function() {

  console.log('zips abbrd city');
  
  var zipsAbbrd = new Bloodhound({
  
    datumTokenizer: function(d) {
      console.log(d);
      return Bloodhound.tokenizers.nonword(d.text);
    },
    queryTokenizer: Bloodhound.tokenizers.nonword,
    limit: 10,
    prefetch: {
      url: './js/zips-abbrd.json',
      filter: function(d) {
        var arr = $.map(d, function(e) {
          return { text: e['text'] };
        });
        return arr;
      }
    }
  });

  zipsAbbrd.initialize();

  $('#select-zips-abbrd-city .typeahead')
     .typeahead({
        highlight: true
      },{
        name: 'zips',
        displayKey: 'text',
        source: zipsAbbrd.ttAdapter()
      });

});
