# Express REST API

Commands for operating the Express Node API server within docker

## Building

Build the API docker container

```bash
docker build -t flave/flave-api .
```

## Running

Run the API docker container

```bash
docker run -d -t --name flave-api -p 3000:3000 flave/flave-api
```

## Entering container

Enter the API docker container

```bash
docker exec -it flave-api bash
```

## Killing

Stop the API docker container

```bash
docker stop flave-api && docker rm flave-api
```
