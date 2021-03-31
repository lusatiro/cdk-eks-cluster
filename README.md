# EksCluster POC

:warning: Working in progress :warning:

Configure profile

```
aws configure --profile [profile]
```

Install CDK globally

``` 
npm -g i aws-cdk 
```

Create a new project

```
cdk init --language typescript
```

Bootstrap resources needed

```
cdk bootstrap --profile [profile]
```

To see problems with you definitions
```
cdk ls
```

Deploy cluster

```
cdk deploy --profile [profile]
```

Switch the context to use kubectl to send commands to the cluster

```
aws eks update-kubeconfig [output from deploy] --profile [profile]
```


Destroy cluster

```
cdk destroy --profile [profile]
```
