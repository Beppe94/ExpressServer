import express from 'express';
import dotenv from 'dotenv/config';
import path from 'path'

const app = express();
const DOT = process.env;
const options = {
    root: path.join('src'),
    dotfiels: 'deny',
}
const optionsImage = {
    root: path.join('public'),
}

app.get(['/','/index'], (req, res) => {
    console.log(res.status.toString())
    
    res.sendFile('./index.html', options);
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', options);
})

app.get('/contct', (req, res) => {
    res.sendFile('./about.html', options);
})

app.get('*', (req, res) => {
    res.status(404).sendFile('./errorPage.html', options);
})

app.listen((DOT.PORT), () => {
    `App listening on port: ${DOT.PORT}`
})

