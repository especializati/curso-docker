FROM ubuntu

RUN apt update && apt install -y python3 && apt clean

COPY app.py /opt/main.py

CMD python3 /opt/main.py
