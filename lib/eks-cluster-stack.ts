import * as cdk from '@aws-cdk/core';
import { Cluster, KubernetesVersion } from '@aws-cdk/aws-eks';

export class EksClusterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cluster = new Cluster(this, 'EksCluster', {
      clusterName: 'eks-cluster',
      version: KubernetesVersion.V1_19,
    });
  }
}
