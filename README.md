## Point-to-Point Messaging with Amazon SQS

This is the companion repository for the tutorial Point-to-Point Messaging with Amazon SQS (URL pending).

Cloning this repository is not required for the tutorial, but it provides branches with individual milestones for each step:

## Instructions

### Load a milestone 
You can load and explore the individual milestones by checking out their respective branches:

**Step 1 - The Empty CDK App**:

```bash
git checkout 01-empty-cdk-project
```

**Step 2 - The SQS Queue**:

```bash
git checkout 02-sqs-queue
```

**Step 3 - The Producer Function**:

```bash
git checkout 03-producer-function
```

**Step 4 - The Consumer Function**:

```bash
git checkout 04-consumer-function
```

### Deploy a milestone

To deploy any of the milestones to an AWS account, you need the following:
- A free AWS account: [How to create a free AWS account](https://aws.amazon.com/getting-started/guides/setup-environment/)
- The AWS CDK: [How to setup and bootstrap the AWS CDK](https://aws.amazon.com/getting-started/guides/setup-cdk/)

Once everything is set up, load any of the branches and type the following command:

```bash
cdk deploy
```

### Clean up

To clean up and delete all created resources, type:

```bash
cdk destroy
```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
