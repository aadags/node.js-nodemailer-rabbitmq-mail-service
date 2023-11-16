import { AMQPClient, AMQPChannel, AMQPQueue } from '@cloudamqp/amqp-client'
require('dotenv').config();

declare let global: {
    RabbitClient: Promise<AMQPChannel>;
  };
  
  let RabbitClient: Promise<AMQPChannel>;
  
  
  if (!global.RabbitClient) {

      
    const amqp = new AMQPClient(process.env.AMQPURL ?? "amqp://localhost")
    const conn = amqp.connect()
    RabbitClient = conn.then((response) => {
      return response.channel()
    });

    global.RabbitClient = RabbitClient   
    
  } else {
    
    RabbitClient = global.RabbitClient
  }


export default RabbitClient;
