const express = require("express");
const app = express();
app.use(express.json());
const { getNote,getall,createNote } = require("./db");
const dotenv = require("dotenv");
dotenv.config();
app.get("/",async (req,res)=>{
    const result = await getall();
    return res.json(result);
})
app.get("/:id",async (req,res)=>{
    const id = req.params.id;
    const result = await getNote(id);
    return res.json(result);
})
app.post("/createNote", async (req,res)=>{
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const result = await createNote(id,title,description);
    res.json({"msg":"Note created Successfully"});
})
app.listen(process.env.PORT,()=>{
    console.log("Server listening to the port 4000");
});