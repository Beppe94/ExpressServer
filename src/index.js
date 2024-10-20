import de from 'dotenv/config';
import http from 'http';
import fs from 'fs';
import url from 'url';

const LOAD = process.env;

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let file = './src' + q.path + '.html';
    console.log(file);
    

    fs.readFile(file, (error, data) => {
        if(error) {
            fs.readFile('./src/errorPage.html', (errorPage, errorData) => {
                if(errorPage) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Internal Error');
                } else {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end(errorData);
                }
            });
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
    })
})

server.listen(LOAD.PORT, LOAD.LOCAL_HOST), () => {
    console.log(`Server Listening on port: ${LOAD.PORT} at ${LOAD.LOCAL_HOST}`);
}