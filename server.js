#!/usr/bin/env node

// Import statements
import Roll from './lib/lib/roll.js';
import express from 'express';
import minimist from 'minimist';

// const declarations
const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port ? args.port: 5000;

// Send requests to api
app.get('/app', (req, res) => {
    res.send("200 OK");
})

app.get('/app/roll', (req, res, next) => {
    res.send(Roll(6,2,1));
    res.end();
})

app.get('/app/roll/:sides', (req, res, next) => {
    res.send(Roll(parseInt(req.params.sides), 2, 1));
    res.end();
})