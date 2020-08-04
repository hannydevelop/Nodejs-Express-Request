const express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content    
    res.write('<html><body><p>This is Home Page.</p></body></html>');
    res.end();
});

router.get('/', (req, res) => {
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content    
    res.write('<html><body><p>Welcome to localhost 3000! This is a sample on how to use ExpressRouter</p></body></html>');
    res.end();
});

router.get('/about', (req, res) => {
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content    
    res.write('<html><body><p>This is our About Page.</p></body></html>');
    res.end();
});

router.get('/contact', (req, res) => {
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content    
    res.write('<html><body><p>This is Contact Page.</p></body></html>');
    res.end();
});

module.exports = router;