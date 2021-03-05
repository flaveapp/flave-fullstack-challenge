# React website

Commands for operating the website-hosted Node server within docker

## Building

Build the website server docker container

```bash
docker build -t flave/flave-web .
```

## Running

Run the website server docker container

```bash
docker run -d -t --name flave-web -p 8080:8080 flave/flave-web
```

## Entering container

Enter the website server docker container

```bash
docker exec -it flave-web bash
```

## Killing

Stop the website server docker container

```bash
docker stop flave-web && docker rm flave-web
```
