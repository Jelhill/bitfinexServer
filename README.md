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


