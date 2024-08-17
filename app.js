const http = require('http');
const port = 9999;

const server = http.createServer((req, res) =>{
    if(req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let now = new Date();
        let currentTime = now.toLocaleTimeString();
        res.end(`Current time is ${currentTime}`);
    }
    else{
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method Not Allowed');
    }
});

server.listen(port, () =>{
    console.log('Server is running on port 9999');
});

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) =>{
    const command = input.trim();

    if (command === 'exit'){
        server.close(() => {
            console.log('Server is stopped');
            process.exit(0);
        });
    }
    else{
        console.log('This command is unknown!');
    }
});