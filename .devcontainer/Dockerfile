FROM mcr.microsoft.com/devcontainers/java:25-bookworm

USER root
RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 \
    && rm -rf /var/lib/apt/lists/*
USER vscode
