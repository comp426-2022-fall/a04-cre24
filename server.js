#!/usr/bin/env node

// Import statements
import Roll from "./lib/lib/roll.js";
import express from "express";
import minimist from "minimist";

// const declarations
const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port ? args.port: 5000;

// Defining an endpoint
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

app.get('/app/roll/:sides/:dice', (req, res, next) => {
    res.send(Roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
    res.end();
})

app.use('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
    res.send(Roll(parseInt(req.params.sides), parseInt(req,params.dice), parseInt(req.params.rolls)));
    res.end();
})

// used same roll function variable names to stay consistent
app.use('/app/roll', (req, res, next) => {
    var numSides = req.params.sides ? parseInt(req.params.sides) : 6;
    var numDice = req.params.dice ? parseInt(req.params.dice) : 2;
    var numRolled = req.params.rolls ? parseInt(req.params.rolls) : 1;
    res.send(Roll(numSides,numDice,numRolled));
    res.end(); 
})

app.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND");
    res.end();
})

app.listen(port, (err) => {
    console.log("Server port is " + port);
})