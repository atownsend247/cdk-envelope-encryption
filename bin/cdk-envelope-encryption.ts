#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkEnvelopeEncryptionStack } from '../lib/cdk-envelope-encryption-stack';

const app = new cdk.App();
new CdkEnvelopeEncryptionStack(
    app, 
    'CdkEnvelopeEncryptionStackPrimary',
    {
        env: {
            region: 'eu-west-1'
        },
        description: 'Envryption Stack in Primary Region'
    }
);
new CdkEnvelopeEncryptionStack(
    app, 
    'CdkEnvelopeEncryptionStackSecondary',
    {
        env: {
            region: 'eu-west-2'
        },
        description: 'Encryption Stack in Secondary Region'
    }
);

new CdkEnvelopeEncryptionStack(
    app, 
    'CdkEnvelopeEncryptionStackTertiary',
    {
        env: {
            region: 'us-east-1'
        },
        description: 'Encryption Stack in Tertiary Region'
    }
);
