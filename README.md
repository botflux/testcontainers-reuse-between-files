# testcontainers reuse between files

This repository expects you to run nodejs 24.

```
# install deps
npm ci
```

## The working cases

If you run the test serially all the time, given the container doesn't exist yet, then the reuse feature works.

```
# clear the existing containers
npm run test:serial
npm run test:serial
# you should see only one mongodb container
```

If you run the test serially the first time, given the container doesn't exist yet, then the reuse works.

```
# clear the existing containers
npm run test:serial
npm run test
# you should see only one mongodb container
```

## The failing case

If you run the test in parallel while the containers are not 

```
# clear the existing containers
npm test
# you should see two mongodb containers, instead of one
```
