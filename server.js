import express from "express";

const app = express()

app.get("/", (req , res)=>{
    res.send(
        {
            mensage: "holaa"
        }
    )
})

app.listen(8000 , ()=>{
    console.log("escuchando puero 8080")
})