#!/usr/bin/env node

// Import statements
import {roll} from '../lib/roll.js';
import minimist from "minimist";

//use minimist function to create argv variable
const args = minimist(process.argv.slice(2))

// Initialized vaiables
const sides = args.sides ? args.sides: 6;
const dice = args.dice ? args.dice: 2;
const rolls = args.rolls ? args.rolls: 1;

// Use JSON Stringify
console.log(JSON.stringify(roll(sides, dice, rolls)));

// Exit out of the program
process.exit(0);