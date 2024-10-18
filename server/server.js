const express = require('express');
const sequelize = require('./database/db'); 
const userRoutes = require('./routes/user.routes');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json())
// Use user routes
app.use('/api/users', userRoutes);

app.get("/api/home", (req, res) =>{
    res.json({message: "Hello World!"});
});

// Sync database and start server
const startServer = async () => {
    try {
        await sequelize.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)
        app.listen(5001, () => {
            console.log('Server is running on http://localhost:5001');
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();