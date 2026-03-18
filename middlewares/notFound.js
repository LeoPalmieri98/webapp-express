function notFound(req, res) {
    res.status(404).json({
        error: "Not Found",
        message: `The page could not be loaded`
    })
};

module.exports = notFound;