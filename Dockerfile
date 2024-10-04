FROM nikolaik/python-nodejs:python3.12-nodejs22
WORKDIR /app
COPY . .
WORKDIR /app/client
RUN npm install
RUN npm run build
WORKDIR /app
RUN pip install --no-cache-dir -r requirements.txt
CMD [ "gunicorn", "-b :8001", "app:app" ]
EXPOSE 8001
# docker build -t corina/test1 .
# change Pipfile to 3.12  , delete .lock -> needed: requirements.txt
# docker run -e USERNAME=user1 -e PASSWORD=password123 -p 8001:8001 corina/test1
# http://localhost:8001