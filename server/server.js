const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/home", (req, res) =>{
    res.json({message: "Hello World!"});
});

app.get("/api/userInfo", (req, res) => {
    res.json({user: "test@gamil.com", password: "password"});
});

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});