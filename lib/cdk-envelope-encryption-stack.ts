import * as cdk from '@aws-cdk/core';
import * as kms from '@aws-cdk/aws-kms';

export class CdkEnvelopeEncryptionStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const key = new kms.Key(
      this, 
      'MyKey',
      {
        enableKeyRotation: true
      }
    );
    key.addAlias('alias/envelope');


  }
}
