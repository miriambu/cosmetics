var nodemailer = require('nodemailer');
var http = require('http');
var url = require('url');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shira.ben.dor.angular.site@gmail.com',
    pass: '!1@2#3$4'
  }
});

var mailOptions = {
  from: '',
  to: 'shira.ben.dor.angular.site@gmail.com',
  subject: 'פניה מאתר קוסמטיקס',
  text: 'jj'

};

/*transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  console.log("run http://localhost:8080");
  console.log("req.url------>",req.url);
  if(url.parse(req.url, true).pathname == '/sendEmail'){
    var q = url.parse(req.url, true).query;
    console.log("q----->",q);

    mailOptions.text = q.name;
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log("ERROR SEND EMAIL:"+error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  /*res.write(req.url);*/
  res.end('send!!');
}).listen(8080);
