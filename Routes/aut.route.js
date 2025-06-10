const User = require("../models/User.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", ()=>{
    res.json("All good in auth")
})

router.post("/signup", async (req, res) =>{
    const {name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const saltRounds = 11;
            const salt = bcrypt.getSaltSync(saltRounds);
            const passwordHash = bcrypt.hashSync(password, salt);
            try {
                await User.create({
                    name,
                    email,
                    passwordHash
                });
                res.status(201).json({ message: "User created successfully" });
            }
            catch (error) {
                console.error("Error creating user:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        }
        else {
            res.status(400).json({ message: "User already exists" });
        }
    }catch (error) {
        console.error("Error checking user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const potentialUser = await User.findOne({ email });

        if (potentialUser) {
            const correctPassword = bcrypt.compareSync(password, potentialUser.passwordHash);
          if (correctPassword) {
              const authToken = jwt.sign(
                  { userId: potentialUser._id },
                  process.env.JWT_SECRET,
                  {
                      algorithm: "HS256",
                      expiresIn: "6h",
                  }
              );
              res.status(200).json({
                  message: "Login successful",
                  authToken,
              });
          } else  {
              res.status(403).json({ message: "Invalid credentials" });
          }
        }else {
            res.status(403).json({ message: "User not found" });
        }
    }catch (error) {
        console.error("Error checking user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/verify", async (req, res) => {
    const currentUser = await User.findById(req.tokenPayload.userId);
    res.status(200).json(currentUser);

});
