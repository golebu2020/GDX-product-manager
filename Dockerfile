FROM python:3.9-alpine3.13

LABEL maintainer="cgolebu@gmail.com"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /tmp/requirements.txt

COPY ./backend/app /app

WORKDIR /app

EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    rm -rf ./tmp && \
    adduser \
        --disabled-password \
        --no-create-home \
        golebu2023

ENV PATH="/py/bin:$PATH"

USER golebu2023


