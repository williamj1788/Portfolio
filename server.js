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

app.post('/api/message', (req, res) => {
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

app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}...`)});