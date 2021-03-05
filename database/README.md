# Postgres Database

Commands for operating the Postgres database within docker

## Building

Build the database docker container

```bash
docker build -t flave/flave-db .
```

## Running

Run the database docker container

```bash
docker run -d -t --name flave-db -p 5432:5432 flave/flave-db
```

## Entering container

Enter the database docker container

```bash
docker exec -it flave-db bash -c "psql -h localhost -p 5432 -d flave -U flave --password;"
```

## Killing

Stop the database docker container

```bash
docker stop flave-db && docker rm flave-db
```
