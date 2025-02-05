FROM postgres:alpine

ENV POSTGRES_DB flave 
ENV POSTGRES_USER flave 
ENV POSTGRES_PASSWORD flave

COPY scripts/ /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
