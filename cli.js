#!/usr/bin/env node

const getPrUrl = require(`./index.js`)
const open = require(`opn`)

const [ ,, remote ] = process.argv

open(getPrUrl(remote), {
	wait: false,
})
