import { Context, Hono } from 'https://deno.land/x/hono@v4.2.7/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono@v4.2.7/middleware.ts'

const app = new Hono()

// serve client.js and other static files
app.use('/static/*', serveStatic({ root: './' }))

// index page
const template = `
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <button id="btn">Send a request!</button>
    <script src="/static/client.js"></script>
  </body>
</html>
`

// the event handler for the button is in client.js
app.get('/', () => {
  return new Response(template, {
    status: 200,
    headers: {
      'content-type': 'text/html',
    },
  })
})

// respond to requests that sends when the "Send a request!" button is clicked ////////////////////
// edit this as you like to learn how http works!
app.all('/api', (c: Context) => {
  console.log('pong')
  const request = c.req.raw
  console.log(request.headers)
  return new Response('pong', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////

Deno.serve(app.fetch)
