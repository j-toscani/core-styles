import { serveStatic } from "hono/bun";
import { Hono } from "hono";

const app = new Hono();

app.use("/*", serveStatic({ root: "./example" }));
console.log("App being served at: http://localhost:3000");
export default app;
