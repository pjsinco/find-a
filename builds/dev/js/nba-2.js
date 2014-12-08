//$(document).ready(function() {

  var json = $.getJSON('./js/nba-2.json');

  console.log('nba-2');

  //https://github.com/twitter/typeahead.js/blob/master/doc/migration/0.10.0.md#user-content-tokenization-methods-must-be-provided
  function customTokenizer(datum) {
    console.log(datum);

    var teamTokens = Bloodhound.tokenizers.whitespace(datum.team);
    var playerTokens = Bloodhound.tokenizers.whitespace(datum.player);

    var arr = teamTokens.concat(playerTokens);
    console.log(arr);
    return arr;
  }

  var nbaTeams = new Bloodhound({

    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.text);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
      url: './js/nba-2.json',
      filter: function(d) {
        return $.map(d, function(e) {
          return {
            team: e.team,
            player: e.player,
            text: e.team + ', ' + e.player,
          }
        });
      },
    },

  });

  nbaTeams.initialize();
  //nbaTeams.clearPrefetchCache();

  $('#nba .typeahead').typeahead({
    highlight: true
  }, {
    name: 'nba-teams',
    displayKey: 'text',
    source: nbaTeams.ttAdapter()
  });


//});
