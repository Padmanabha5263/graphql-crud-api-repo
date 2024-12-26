import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import mongoose from "mongoose";
import { resolvers } from "./src/resolver/resolvers";
import { schema } from "./src/graphqlschema/schema";

const app = express();
const PORT = 4000;

mongoose
  .connect("mongodb://localhost:27017/graphqldemo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolvers,
  })
);

app.listen(PORT);
console.log(`graphql server running at http://localhost:${PORT}/graphql`);
