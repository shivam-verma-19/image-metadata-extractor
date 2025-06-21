const AWSXRay = require('aws-xray-sdk');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const s3 = new AWS.S3();

exports.handler = async (event) => {
    for (const record of event.Records) {
        const { bucket, key } = JSON.parse(record.body);

        const data = await s3.getObject({ Bucket: bucket, Key: key }).promise();

        const metadata = {
            size: data.ContentLength,
            type: data.ContentType,
            processedAt: new Date().toISOString()
        };

        const newKey = `metadata/${key.split('/').pop().replace(/\..+$/, '')}.json`;

        await s3.putObject({
            Bucket: bucket,
            Key: newKey,
            Body: JSON.stringify(metadata),
            ContentType: 'application/json'
        }).promise();

        console.log(`Metadata stored at ${newKey}`);
    }
};
