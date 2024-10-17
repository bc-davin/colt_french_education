const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/home", (req, res) =>{
    res.json({message: "Hello World!"});
});

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});