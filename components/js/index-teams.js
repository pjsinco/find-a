$(document).ready(function() {

  console.log('2 leagues');
  

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

  var nhlTeams = new Bloodhound({

    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.team)
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    prefetch: {
      url: './js/nhl.json',
    }

  });

  nbaTeams.initialize();
  nhlTeams.initialize();

  $('#select-team-nba-nhl .typeahead').typeahead({
    highlight: true
  }, {
    name: 'nba-teams',
    displayKey: 'team',
    source: nbaTeams.ttAdapter(),
    templates: {
      header: '<h3 class="league-name">NBA Teams</h3>'
    }
  }, {
    name: 'nhl-teams',
    displayKey: 'team',
    source: nhlTeams.ttAdapter(),
    templates: {
      header: '<h3 class="league-name">NHL Teams</h3>'
    }
  });


});
