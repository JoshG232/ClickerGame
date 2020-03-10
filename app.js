
const express = require("express");
const datastore = require("nedb")
const app = express();
const port = process.env.PORT || 3000
app.listen(port, () => console.log('listening at', port))
app.use(express.static("public"))
app.use(express.json())

const database = new datastore("1database.db");
database.loadDatabase();


app.post('/api', (request, response) => {
    console.log("Yes")
    const data = request.body;
    database.insert(data)
    response.json(data)
    
})

app.get("/api",(request, response) => {
    database.find({},(error, data) => {
        response.json(data)
    })
    
})
