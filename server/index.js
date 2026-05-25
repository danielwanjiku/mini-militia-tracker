const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Essential for reading form data

// 1. This array acts as your temporary "database"
const temporaryUsersDatabase = [];

// GET route for /api/v1/
app.get('/api/v1', (req, res) => {
    res.send('Hello from v1');
});

// 2. Your POST registration route matching your image specification
app.post('/api/v1/auth/register', (req, res) => {
    const { firstName, lastName, username, email, phone, dob, gender, password, confirmPassword } = req.body;

    // Simple validation checks matching your documentation
    if (!email || !password || !firstName || !lastName || !username) {
        return res.status(400).json({ 
            success: false, 
            message: "Missing required fields." 
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ 
            success: false, 
            message: "Passwords do not match." 
        });
    }

    // Create the user object (removing the password field from the response object)
    const newUser = {
        _id: Math.random().toString(36).substr(2, 9), // Fake ID
        firstName,
        lastName,
        username,
        email,
        phone,
        dob,
        gender,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    // Push to our array "database"
    temporaryUsersDatabase.push({ ...newUser, password }); 

    // Log it in your Render terminal so you can physically see the data!
    console.log("Current Database Users:", temporaryUsersDatabase);

    // Return 201 Created success response matching your image spec
    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));