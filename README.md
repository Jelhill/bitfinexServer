# bitfinexServer

The BitfinexServer is a Service that listens for incoming request using the Grenache HTTP Client. 

The service is only reachable via Grenade

Due to time constraint, I was unable to complete implementation of the entire task. However i was able to set up connection with the client server.

Also i added a function callled processRequest that will be called once a request is recieved. 

The processrequest endpont recieves two parameter, the path the client is requesting ththrough and the data the client is sending.

Once the user request has been processed, an event is emmitted bach to the requesting client. 



#Things Ommited

Distributing the updated order
Sending Confirmation on complete of the order



# How to setup project

git clone https://github.com/Jelhill/bitfinexServer.git
```
npm install
npm i -g grenache-grape
```

```
# boot two grape servers

grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'
grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'
