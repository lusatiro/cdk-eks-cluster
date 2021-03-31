# EksCluster

:warning: Working in progress :warning:

Configure profile

```
aws configure --profile zorilla
```

Install CDK globally

``` 
npm -g i aws-cdk 
```

Create a new project

```
cdk init --language typescript
```

// Read more about it
Bootstrap resources need 

```
cdk bootstrap --profile zorilla
```

To see problems with you definitions
```
cdk ls
```

Deploy cluster

```
cdk deploy --profile zorilla
```

Switch the context to use kubectl

```
aws eks update-kubeconfig [output from deploy] --profile zorilla
```


Destroy cluster

```
cdk destroy --profile zorilla
```
