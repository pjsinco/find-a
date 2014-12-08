//$(document).ready(function() {

  var json = $.getJSON('./js/nba-2.json');

  console.log('nba-2');

  //https://github.com/twitter/typeahead.js/blob/master/doc/migration/0.10.0.md#user-content-tokenization-methods-must-be-provided
  function customTokenizer(datum) {

    console.log('datum: ' + datum);

    var teamTokens = Bloodhound.tokenizers.whitespace(datum.team);
    var playerTokens = Bloodhound.tokenizers.whitespace(datum.player);

    var arr = teamTokens.concat(playerTokens);
    //console.log(arr);
    return arr;
  }

  var nbaTeams = new Bloodhound({

    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    //datumTokenizer: function(d) {
      //return Bloodhound.tokenizers.whitespace(d.tokens);
      //return Bloodhound.tokenizers.whitespace(d.team);
      //return customTokenizer(d);
    //},
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    prefetch: {
      url: './js/nba-2.json',
    }

  });

  //nbaTeams.clearPrefetchCache();
  nbaTeams.initialize();

  $('#nba .typeahead').typeahead({
    highlight: true
  }, {
    name: 'nba-teams',
    displayKey: 'team',
    source: nbaTeams.ttAdapter()
  });


//});
