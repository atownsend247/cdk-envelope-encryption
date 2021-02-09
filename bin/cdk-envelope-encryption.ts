#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkEnvelopeEncryptionStack } from '../lib/cdk-envelope-encryption-stack';

const app = new cdk.App();
new CdkEnvelopeEncryptionStack(app, 'CdkEnvelopeEncryptionStack');
