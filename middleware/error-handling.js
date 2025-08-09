const errorHandling = (err, req, res, next) => {
    console.log("Error occurred:", req.method, req.path, err);

    if (!res.headersSent) {
        res.status(500)
            .json({
                message: "Internal server error, Check the server console"
            });
    }
};

const notFoundHandler = (req, res, next) => {
    res.status(404).json({message: "This is not exist"})
}

module.exports = {
    errorHandling,
    notFoundHandler
};