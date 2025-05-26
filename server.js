require("dotenv").config();

const app = require('./src/app');
const connectDb = require('./db');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await connectDb();
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
})();
