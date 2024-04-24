import { Context, Hono } from 'https://deno.land/x/hono@v4.2.7/mod.ts'

const app = new Hono()

app.get('/', (c: Context) => {
  console.log('ping')
  const request = c.req.raw
  console.log(request.headers)
  // let's read the request!
  return new Response('Hello World!')
})

Deno.serve(app.fetch)
