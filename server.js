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
<<<<<<< HEAD
  subject: 'פניה מהאתר, מאת: ',
  text: ''
};
=======
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
>>>>>>> 0df8c9331e4c6086d9ad9a1906879e7872b54f8a
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  console.log("run http://localhost:8080");
  console.log("req.url------>",req.url);
  if(url.parse(req.url, true).pathname == '/sendEmail'){
    var q = url.parse(req.url, true).query;
<<<<<<< HEAD
    console.log("q----->",q)
    mailOptions.text =q.msg + '\n\n' +q.email;
    mailOptions.subject = mailOptions.subject+ q.name + ' ,מספר טלפון: ' +q.phone ;
    //Send email from site to Shira
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log("ERROR SEND EMAIL TO SHIRA:"+error);
      } else {
        console.log('Email sent to Shira: ' + info.response);
        //return email to client
        mailOptions.to = q.email
        mailOptions.subject = 'פנייתך מהאתר של שירה בן דור התקבלה'
        mailOptions.text = 'אחזור אלייך בהקדם, שירה.'
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("ERROR SEND EMAIL TO CLIENT:"+error);
        } else {
          console.log('Email sent to client: ' + info.response);
        }
        });
      }
    });

    res.end('send!!');
  }

  /*res.write(req.url);*/
  //res.end('send!!');
=======
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
>>>>>>> 0df8c9331e4c6086d9ad9a1906879e7872b54f8a
}).listen(8080);
