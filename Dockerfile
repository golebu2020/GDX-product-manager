FROM python:3.9-alpine3.13

LABEL maintainer="cgolebu@gmail.com"

COPY ./backend/app /app

COPY ./requirements.txt /tmp/requirement.txt

WORKDIR /app

EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r requirments.txt && \
    rm -rf /tmp && \
    adduser \
        --disable-password \
        --no-create-home \
        golebu2023

ENV PATH="/py/bin/:$PATH"

USER golebu2023


