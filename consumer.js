const amqp = require('amqplib');

  ; (async () => {

    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const result = await channel.assertQueue('hi');

    channel.consume("hi", (message)=>{
      const input = JSON.parse(message.content.toString());
      if (input.task) {
        channel.ack(message);
      }
    })
  })().catch(err => {
    console.error(err)
    process.exit(1)
  })
