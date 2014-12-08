$(document).ready(function() {


  console.log('nba');

  var nbaTeams = new Bloodhound({

    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.team)
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    prefetch: {
      url: './js/nba.json',
    }

  });

  nbaTeams.initialize();

  $('#select-team-nba .typeahead').typeahead({
    highlight: true
  }, {
    name: 'nba-teams',
    displayKey: 'team',
    source: nbaTeams.ttAdapter()
  });


});
