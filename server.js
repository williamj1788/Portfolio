require('dotenv').config();
const express = require('express');
var nodemailer = require('nodemailer');
const path = require('path');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: process.env.EMAIL,
         pass: process.env.PASSWORD
     }
 });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello There");
  next();
})

app.post('/api/message', (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;

  transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL,
    subject: `${name} has sent you a message from your portfolio`,
    text: message
  }, (err) => {
    if(err){
      return res.sendStatus(500);
    }
    return res.send("Message has been sent");
  });

})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
      res.sendfile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}...`)});