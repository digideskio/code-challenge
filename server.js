var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'PjJNcaco0ufBqLXyJCy5QGje4',
  consumer_secret: 'raMLlvGCPSYe1eMOAZaIzmELJ0wt7cJUaYPbKrb3GyUI7tEvFi',
  access_token_key: '2791062639-4xvZ5eNrjCnnySAKxLLga3kk6I71CA6KWRmNA17',
  access_token_secret: 'NrYH6BkyamXAGszyGAo4cU1pP11JANSHAudwv6Np8V7Ql'
});

app.use(bodyParser.json());
app.post('/tweets', function(request, response) {
  var user = request.body.user;
  client.get('statuses/user_timeline.json?screen_name='+ user +'&count=25', function(error, tweets){
    if(error) {
      response.json([{error: '@' + user + ' does not exist.'}]);
    } else {
      response.json(tweets)
    }
  });
});


app.use(express.static(__dirname+'/public'));

var server=app.listen(8888, function() {
    console.log("We have started our server at http://localhost:8888");
});
