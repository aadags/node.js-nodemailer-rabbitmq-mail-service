import RabbitClient from './rabbitClient';
require('dotenv').config;

export default class RabbitHandler {
    queue: string; 

    constructor(queue : string){
        this.queue = queue;
    }

    get instance(){
        return RabbitClient;
    }

    sendMail(msg: string) {

      RabbitClient.then((res) => {
          return res.queue(this.queue)
      }).then((res) => {
          return res.publish(msg, {deliveryMode: 2})
      }).catch(function(responseError){
          console.log(responseError);
      });

    }

}


