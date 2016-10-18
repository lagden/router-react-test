'use strict';

const fs = require('fs');
const join = require('path').join;
const zlib = require('zlib');
const pify = require('pify');
const compress = require('koa-compress');
const serve = require('koa-static');
const Koa = require('koa');

const koa = new Koa();

koa
	.use(compress({
		threshold: 2048,
		flush: zlib.Z_SYNC_FLUSH
	}))
	.use(serve(join(__dirname, 'public')))
	.use(async (ctx) => {
		const file = await pify(fs.readFile)(join(__dirname, 'public', 'index.html'), 'utf8');
		console.log(file);
		ctx.body = file;
	});

module.exports = koa;
