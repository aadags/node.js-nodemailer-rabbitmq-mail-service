import nodemailer from "nodemailer"
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT ?? '587'),
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
});
  
  // async..await is not allowed in global scope, must use a wrapper
async function main(to: string, subject: string, body: string) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM, //'"Fred Foo 👻" <foo@example.com>', 
      to: to, //"bar@example.com, baz@example.com", 
      subject: subject, 
      //text: body 
      html: body 
    });

    console.log("Message sent: %s", info.messageId);
    console.log(info);

}

export default function sendMail(data: string|null) {

  const msg = JSON.parse(data??'{}');

  console.log('sending mail to '+msg.to) 

  main(msg.to, msg.subject, msg.body).catch(function(error){
    console.log(error);
  })

}
  

