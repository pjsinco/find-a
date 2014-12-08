var people = new Bloodhound({
      datumTokenizer: function(d) { 
        return Bloodhound.tokenizers.whitespace(d.tokens); 
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: [
        { 
            fullName: '',
        },
        { 
            fullName: 'Marijus Merkevicius', 
            tokens: ["Marijus Merkevicius", "marijusm"],
        },
      ]
    }); 

// initialize the bloodhound suggestion engine
people.initialize();

// instantiate the typeahead UI
$('#stack .typeahead').typeahead(null, {
  displayKey: 'fullName',
  source: people.ttAdapter(),
});

