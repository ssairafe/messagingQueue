
const amqp = require("amqplib");
const connection = amqp.createConnection({ url: "amqp://guest:guest@localhost:5672" });

async function connect() {
  try {
    const conn = await amqp.connect({ url: "amqp://guest:guest@localhost:5672" });
    const channel = await conn.createChannel();
    const result = await channel.assertQueue("")
  }
}
