import express, {Request, Response} from 'express';
import sendMail from './Mail/MailController';
require('dotenv').config();
import RabbitClient from './rabbitMQ/rabbitClient';


const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
   console.log("Server Listening on PORT:", PORT);
});

app.get("/api/health", (request: Request, response: Response) => {
   const status = {
      status: true,
      message: "OK"
   };
   
   response.json(status);
});


app.get("/", (request: Request, response: Response) => {
   const status = {
      status: true,
      message: "OK"
   };
   
   response.json(status);
});

RabbitClient.then((res) => {
   return res.queue('notification')
}).then((res) => {
   return res.subscribe({noAck: true}, async (msg) => {
      sendMail(msg.bodyToString())
   })
})

// RabbitClient.then((res) => {
//    return res.queue('sms')
// }).then((res) => {
//    return res.subscribe({noAck: true}, async (msg) => {
//       //todo: SMS
//       console.log(msg.bodyToString())
//    })
// })

// RabbitClient.then((res) => {
//    return res.queue('ui')
// }).then((res) => {
//    return res.subscribe({noAck: true}, async (msg) => {
//       //todo: ui websocket
//       console.log(msg.bodyToString())
//    })
// })