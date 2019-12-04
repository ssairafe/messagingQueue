
const amqp = require('amqplib');
let message = {task: 'say hi'};
  ; (async () => {

    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const result = await channel.assertQueue('hi');

    channel.sendToQueue('hi', Buffer.from(JSON.stringify(message)));
    console.log('allowed');
    process.exit(0);
  })().catch(err => {
    console.error(err);
    process.exit(1);
  });
