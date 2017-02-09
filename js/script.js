$(document).ready(function () {
  var original = $('#original');
  var result = $('#result');
  $('#submit-button').on('click', convertTextToYoda);

  function convertTextToYoda() {
    var baseUrl = 'https://yoda.p.mashape.com/yoda?sentence=';
    result.val('Loading...');
    $.ajax({
      url: baseUrl + encodeURIComponent(original.val()),
      headers: {
        'X-Mashape-Key': '8FhxKKgu73mshc8ztz3NjKzkp2Y5p1NgrkqjsnggzDfyJ6dGYn'
      },
      success: function (response) {
        result.val(response);
      },
      error: function () {
        result.val('There was an error, try again');
      }
    });
  }
});
