#!/usr/bin/env node

import getPrUrl from './index.js'
import open from 'open'

const [ ,, remote ] = process.argv

open(getPrUrl(remote), {
	wait: false,
})
