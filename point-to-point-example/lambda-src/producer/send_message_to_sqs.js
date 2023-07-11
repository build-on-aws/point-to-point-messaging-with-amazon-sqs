const sqs = require("@aws-sdk/client-sqs");
const client = new sqs.SQSClient();

exports.handler = async (event, context) => {
  
  const body = { 
    message: 'Hello World from ' + context.functionName 
  };

  const command = new sqs.SendMessageCommand({
    MessageBody: JSON.stringify(body),
    QueueUrl: process.env.SQSQueueUrl
  });
  
  const result = await client.send(command);
  return result;

}