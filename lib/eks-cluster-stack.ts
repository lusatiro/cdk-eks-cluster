import * as cdk from '@aws-cdk/core';
import { Cluster, KubernetesVersion,  } from '@aws-cdk/aws-eks';
// import { InstanceType, InstanceClass, InstanceSize  } from '@aws-cdk/aws-ec2';

export class EksClusterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const cluster = new Cluster(this, 'EksCluster', {
      clusterName: 'eks-cluster',
      version: KubernetesVersion.V1_19,
      defaultCapacity: 2,
      defaultCapacityInstance: InstanceType.of(InstanceClass.T2, InstanceSize.SMALL)
    });
  }
}
