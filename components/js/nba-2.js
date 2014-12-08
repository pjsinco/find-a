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
      // note: the text property is what we want to search through
      return Bloodhound.tokenizers.whitespace(d.text);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
      // example of nba-2.json, which we call below
      //  {
      //      "team": "Dallas Mavericks",
      //      "player": "Dirk"
      //  },
      url: './js/nba-2.json',
      filter: function(d) {
        // let's make a new text property to show in our autocomplete list
        return $.map(d, function(e) {
          return {
            team: e.team,
            player: e.player,
            // text: will be what we display in the autocomplete list
            text: e.team + ', ' + e.player,
          }
        });
      },
    },

  });

  nbaTeams.initialize();
  nbaTeams.clearPrefetchCache(); // do this when we're debugging!

  $('#nba .typeahead').typeahead({
    highlight: true
  }, {
    name: 'nba-teams',
    // displayKey is the property we want to show in our autcomplete list;
    // so we're showing the text property of the datum
    displayKey: 'text', 
    source: nbaTeams.ttAdapter()
  });


//});
