const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_KEY;

const getTokenFromHeader = (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        const token = req.headers.authorization.split(" ")[1];

        console.log("Token:", token);

        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Invalid token" });
            }
            req.tokenPayload = decoded;
            next();
        });
    } else {
        return res.status(401).json({ error: "No token provided" });
    }
};

module.exports = getTokenFromHeader;
