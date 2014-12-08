//$(document).ready(function() {

  console.log('movies-a');

  function customTokenizer(datum) {

    console.log('datum: ' + datum);

    var titleTokens = Bloodhound.tokenizers.whitespace(datum.original_title);
    var releaseTokens = Bloodhound.tokenizers.whitespace(datum.release_date);

    var arr = titleTokens.concat(releaseTokens);
    //console.log(arr);
    return arr;
  }

var movies = new Bloodhound({

    datumTokenizer: function(datum) {
      return customTokenizer(datum.value);
    },
      //return Bloodhound.tokenizers.whitespace(datum.value);
      //return Bloodhound.tokenizers.whitespace(datum.value);
    //},
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 10,
    remote: {
      //url: './js/movies-a.json',
      url: 'http://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=470fd2ec8853e25d2f8d86f685d2270e',
      filter: function (movies) {
          // Map the remote source JSON array to a JavaScript object array
          return $.map(movies.results, function (movie) {
              console.log(movie);
              return {
                  value: movie.original_title
              };
          });
      }

      //filter: function(d) {
      //  return $.map(d.results, function(e) { 
      //    return { value: e.original_title };
      //  });
      //},
    }
  });
//
//  //movies.clearPrefetchCache();
//  movies.initialize();
//
//  $('#movies .typeahead').typeahead({
//    highlight: true
//  }, {
//    displayKey: 'value',
//    source: movies.ttAdapter()
//  });


//});

// Instantiate the Bloodhound suggestion engine
//var movies = new Bloodhound({
//    datumTokenizer: function (datum) {
//        return Bloodhound.tokenizers.whitespace(datum.value);
//    },
//    queryTokenizer: Bloodhound.tokenizers.whitespace,
//    remote: {
//        url: 'http://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=470fd2ec8853e25d2f8d86f685d2270e',
//        filter: function (movies) {
//            // Map the remote source JSON array to a JavaScript object array
//            return $.map(movies.results, function (movie) {
//                return {
//                    value: movie.original_title
//                };
//            });
//        }
//    }
//});

// Initialize the Bloodhound suggestion engine
movies.initialize();

// Instantiate the Typeahead UI
$('#movies .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 3,
  }, {
    displayKey: 'value',
    source: movies.ttAdapter()
});

// Instantiate the Bloodhound suggestion engine
// var movies = new Bloodhound({}
