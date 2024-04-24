# HTTP

very simple web server to learn HTTP

## usage

Start the server with

```
docker compose run --rm --service-ports web
```

then access to `http://localhost:8000` and check `Hello World!` appears

Now you can send any requests and responses by editing `main.ts` and `static/client.js` as you want.
Note that you must restart the server to apply the code update to the running server. Sorry for bad DX 😅

`main.ts` is a server code.
by logging and editing it, you can learn how requests come from clients and how should the server respond to it.

`client.ts` is a code sent and run in browsers.
this adds an event handler that sends a http request to the button in the index page.
by logging and editing it, you can learn how an http request should be set up and how browsers treat the request and a response
