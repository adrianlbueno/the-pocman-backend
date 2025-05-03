const app = require('./src/app');

const PORT = process.env.PORT || 5005;

const illustrationController = require('./Routes/illustration.route');

app.use('/api', illustrationController);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
