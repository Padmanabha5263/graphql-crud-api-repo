import express from "express";
import schema from "./graphqlschema/schema";
import { createHandler } from "graphql-http/lib/use/express";

const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send("hello world");
});

var root = {
  hello() {
    return "Hello world! welcome to graphQL world";
  },
};

app.use(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

app.listen(PORT);
console.log(`graphql server running at http://localhost:${PORT}/graphql`);
