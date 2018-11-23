
var net = require('react-native-tcp');
 

export class TcpServer 
{
    constructor(p_port, p_connectFunction, p_dataFunction, p_ErrorFunction) {
        this.server = net.createServer((s) => {
            p_connectFunction(s);
            s.on('data', (data) => p_dataFunction(data));
            s.on('error', (error) => p_ErrorFunction(error));    
        })
        this.server.listen(p_port);

        /*let server = net.createServer((socket) => {         
            console.log("A client connected")

            socket.on('data', (data) => {
                console.log("Server got some data: " + data)
            });
        
            socket.on('error', (error) => {
                throw "AlloError";
            });
        
            socket.on('close', (error) => {
                
            });
            }).listen(12345, () => {
                
            });
            this.server = server*/
    }

    write(data) {
        this.server.write(data);
    }
}

export class TcpClient {
    constructor(p_port, p_dataFunction, p_closeFunction, p_ErrorFunction) {
        this.client = net.createConnection(p_port);
        this.client.on('data', (data) => p_dataFunction(data));
        this.client.on('close', (close) => p_closeFunction(close));
        this.client.on('error', (error) => p_ErrorFunction(error));   
    }

    write(data) {
        this.client.write(data);
    }
}

/*
var server = net.createServer(function(socket) {
  socket.write('excellent!');
}).listen(12345);
 
var client = net.createConnection(12345);
 
client.on('error', function(error) {
  console.log(error)
});
 
client.on('data', function(data) {
  console.log('message was received', data)
});*/
