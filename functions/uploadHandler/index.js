const AWSXRay = require('aws-xray-sdk');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const sns = new AWS.SNS();

exports.handler = async (event) => {
    const record = event.Records[0];
    const bucket = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

    const message = JSON.stringify({ bucket, key });

    await sns.publish({
        TopicArn: process.env.SNS_TOPIC_ARN,
        Message: message
    }).promise();

    console.log('Published message to SNS:', message);
};
