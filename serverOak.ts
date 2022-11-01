import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: Context): void => {
  ctx.response.status = 200;
  ctx.response.body = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Server con Oak</title>
    <head>
    <body>
      <h1 style="color: purple;">Bienvenido</h1>
    </body>
  </html>
  `;
});

app.use(router.routes());

app.listen({ port: 8080 });

console.log("Server listening on: http://127.0.0.1:8080");