import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. Create the S3 bucket to host the static files
    const hostingBucket = new s3.Bucket(this, 'JoaoVnBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const domainName = 'joao.vn';

    // 1.5. Look up the hosted zone and create an ACM certificate for the domain
    const hostedZone = route53.HostedZone.fromLookup(this, 'JoaoVnHostedZone', {
      domainName,
    });

    const certificate = new acm.Certificate(this, 'JoaoVnCertificate', {
      domainName,
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    // 2. Create a CloudFront distribution
    const distribution = new cloudfront.Distribution(
      this,
      'JoaoVnDistribution',
      {
        domainNames: [domainName],
        certificate,
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessControl(hostingBucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        defaultRootObject: 'index.html',
        errorResponses: [
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
          },
        ],
      }
    );

    // 2.5. Create Route53 records pointing the domain to the CloudFront distribution
    new route53.ARecord(this, 'JoaoVnAliasRecord', {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    new route53.AaaaRecord(this, 'JoaoVnAliasRecordAAAA', {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    // 3. Use BucketDeployment to sync the Vite build output to the S3 bucket
    new s3deploy.BucketDeployment(this, 'DeployJoaoVn', {
      sources: [
        s3deploy.Source.asset(path.join(__dirname, '..', '..', 'dist')),
      ],
      destinationBucket: hostingBucket,
      distribution: distribution, // Invalidate CloudFront cache on new deployments
      distributionPaths: ['/*'],
    });

    // Output the CloudFront URL
    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: distribution.distributionDomainName,
      description: 'The URL of the CloudFront distribution',
    });
  }
}
