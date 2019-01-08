const Koa = require('koa')
const bodyParser = require('koa-bodyParser')
const koaJson = require('koa-json')
const jwt = require('koa-jwt')
const tokenError = require('./middlreware/tokenError')
const config = require('./config/config')
const app = new Koa()

// token 鉴权
app.use(tokenError())

app.use(bodyParser())

app.use(koaJson())

app.use(jwt({
    secret: config.tokenSecret
}).unless({
    path: [/^\/api\/login/]
}))

app.use(async (ctx) => {
    ctx.body = 'hello world'
})

app.listen(8088)
console.log("demo in run")