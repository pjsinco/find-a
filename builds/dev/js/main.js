//$(document).ready(function() {

  console.log('hiya');
  
  // note: strs is an array
  var subStringMatcher = function(strs) {

    return function findMatches(query, cb) {
      var matches, substrRegex;

      // an array for substring matches
      matches = [];

      // regex used to determine if a string contains the substring 'query'
      substrRegex = new RegExp(query, 'i');

      // iterate through poool of strings, and for any string that
      // contains the substring 'query', add it to the matches array
      $(strs).each(function(i, d) {
        if (substrRegex.test(d)) {
          matches.push({value: d});
        } 
      });

      cb(matches);
    }; // end findMatches

  };

  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
    'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 
    'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  $('#the-basics .typeahead')
    .typeahead({
      minLength: 1,
      hint: true,
      highlight: true,
    }, {
      name: 'us-states',
      displayKey: 'value',
      source: subStringMatcher(states)
    }

  );

//});
