
const jwt = require("jsonwebtoken")
const response = require("express");
const userSchema = require("./userSchema");

// for register
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = new userSchema({ name, email, password })

        await user.save();
        res.status(201).json({ message: "User created successfully." });

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}