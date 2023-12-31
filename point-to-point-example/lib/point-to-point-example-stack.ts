import { Construct } from 'constructs';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import * as cdk from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class PointToPointExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'Queue', {
      queueName: 'MyQueue',
      visibilityTimeout: cdk.Duration.seconds(300),
    });

    const producerFunction = new lambda.Function(this, 'Producer', {
      functionName: 'Producer',
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda-src/producer'),
      handler: 'send_message_to_sqs.handler',
      environment: {
        SQSQueueUrl: queue.queueUrl,
      }
    });

    queue.grantSendMessages(producerFunction);

    const consumerFunction = new lambda.Function(this, 'Consumer', {
      functionName: 'Consumer',
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda-src/consumer'),
      handler: 'receive_message_from_sqs.handler'
    });

    queue.grantConsumeMessages(consumerFunction);

    consumerFunction.addEventSource(new SqsEventSource(queue));

  }
}
