var express = require('express');
var bodyParser = require('body-parser');
var app = express();//262
var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var linebot = require('linebot');///030
 var channelId='1487304211';
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});
var jsonParser = bot.parser();
var google = require('googleapis');
var sheets = google.sheets('v4');
var googleAuth = require('google-auth-library');
var auth = new googleAuth();
//var OAuth2 = google.auth.OAuth2;
var oauth2Client = new auth.OAuth2(  '399740110786-ai6tcngsubr5d8jc1qdirv5b1ehmft9h.apps.googleusercontent.com',
'GFRUPZFJo1qNKIYabC2T34CD',
  'urn:ietf:wg:oauth:2.0:oob'
);

var API_KEY = 'AIzaSyBM_GM_ZVEqwDsOPmpVBR3XI3BhwD4Bfm4'; 
var mySheetId='1QUIuFsRa1PP-862kS7TmwWSPxRrqhv5HBuu2n9tHIlg';
var cat='';
bot.on('message', function(event) { if (event.message.type = 'text') { 
var msg = '';
let a = event.source.userId;
	let b='';
event.source.profile().then(function (profile) {
/*sheets.spreadsheets.values.get({
      auth: API_KEY,
      spreadsheetId: mySheetId,
      range:encodeURI('工作表2'),
   }, function(err, result) {
  if(err) {
    // Handle error
    console.log(err);
  } else {
    var numRows = result.values ? result.values.length : 0;
	 cat=numRows;
    console.log('%d rows retrieved.', numRows);
  }
   });*/
b=profile.displayName;
//Ca8fea1f8ef1ef2519860ee21fb740fd2   群id

msg =exports.analytics.parseInput(event.rplyToken, event.message.text,a,b);
if(event.message.text=='武裝裝甲聯合戰線'){
event.reply({
  type: 'image',
  originalContentUrl: 'https://2.bp.blogspot.com/-dibK0MP77Y4/WqfB0d9kSzI/AAAAAAAADI0/671E52U2nRkOAvS22z5iPlA8tnWR8ud-ACLcBGAs/s320/AAUF.jpg',
  previewImageUrl: 'https://2.bp.blogspot.com/-dibK0MP77Y4/WqfB0d9kSzI/AAAAAAAADI0/671E52U2nRkOAvS22z5iPlA8tnWR8ud-ACLcBGAs/s320/AAUF.jpg'
});
}
if(event.message.text=='蓋爾奇亞聯合'){
event.reply({
  type: 'image',
  originalContentUrl: 'https://3.bp.blogspot.com/--uGy8owGA_A/WqfB0MIYEXI/AAAAAAAADIw/IdjKaTUd_jkXq3bYqMER7j2nrlaC6XLHwCLcBGAs/s320/GU.jpg',
  previewImageUrl: 'https://3.bp.blogspot.com/--uGy8owGA_A/WqfB0MIYEXI/AAAAAAAADIw/IdjKaTUd_jkXq3bYqMER7j2nrlaC6XLHwCLcBGAs/s320/GU.jpg'
});
}
  event.reply(msg);
	
  console.log(b+'  '+event.message.text+'   '+cat);
});
  } });
 
require('fs').readdirSync(__dirname + '/modules/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./modules/' + file);
  }
});
app.set('port', (process.env.PORT || 5000));
// views is directory for all template files
app.get('/', function(req, res) {
//	res.send(parseInput(req.query.input));
	res.send('Hello');
});
app.post('/', jsonParser, function(req, res) {
});
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
