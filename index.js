import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphqlschema/schema";

const app = express()

app.get("/",(req,res)=>{
    res.send("hello world")
})

const root ={hello:()=>"hello user welcome to graphql world"}
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(5000,()=>{console.log(`graphql server running at http://localhost:${5000}/graphql`)})