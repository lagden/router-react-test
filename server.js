'use strict'

const path = require('path')
const zlib = require('zlib')
const compress = require('koa-compress')
const serve = require('koa-static')
const Pug = require('koa-pug')
const Koa = require('koa')

const isDev = (process.env.NODE_ENV || 'development') === 'development'
const noCache = isDev

const koa = new Koa()
const pug = new Pug({
	viewPath: path.join(__dirname, 'views'),
	locals: {isDev}
})

pug
	.use(koa)

koa
	.use(serve(path.join(__dirname, 'public')))
	.use(compress({
		filter(contentType) {
			return /(text\/html|application\/javascript)/i.test(contentType)
		},
		threshold: 2048,
		flush: zlib.Z_SYNC_FLUSH
	}))
	.use(ctx => {
		ctx.render('index', {}, noCache)
	})

module.exports = koa
