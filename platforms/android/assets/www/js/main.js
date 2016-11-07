$(document).ready(function(){

var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var gotQuote = function(result) {
  if (result.quoteAuthor === '') {
    result.quoteAuthor = 'Unknown';
  }

  var quote = 'https://twitter.com/intent/tweet?text=' + result.quoteText + ' - ' + result.quoteAuthor +' via @pabscortez';

  $('.quote-text').text(result.quoteText);
  $('.quote-author').text(result.quoteAuthor);
  $(".twitter-share-button").attr("href", quote);
  console.log('foo')
};

var foobar = function() {
  $.ajax({
    url: url,
    type: "POST",
    dataType: "jsonp",
    success: gotQuote
  });
};


  $("#newQuoteBtn").click(function() {
    foobar();
  });

});
