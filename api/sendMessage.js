const { PubSub } = require("@google-cloud/pubsub");
const { v4: uuid } = require("uuid");

const topicName = "my-topic";

// Imports the Google Cloud client library

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

exports.publishMessage = async (id) => {
  const data = JSON.stringify({ foo: "bar", id });
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  try {
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
};
