//$(document).ready(function() {

  console.log('zips city');
  
  var zipsAbbrd = new Bloodhound({
  
    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.nonword(d.text);
    },
    queryTokenizer: Bloodhound.tokenizers.nonword,
    limit: 10,
    prefetch: {
      url: './js/zips.json',
      filter: function(d) {
        var arr = $.map(d, function(e) {
          return { text: e['text'] };
        });
        return arr;
      }
    }
  });

  zipsAbbrd.initialize();
  zipsAbbrd.clearPrefetchCache();

  $('#select-zips-city .typeahead')
     .typeahead({
        highlight: true
      },{
        name: 'zips',
        displayKey: 'text',
        source: zipsAbbrd.ttAdapter()
      });

//});
