const db = require("../data/db")

//Index:

const index = (req, res) => {

    const sqlQuery = "SELECT * FROM db_movies.movies; ";
    db.query(sqlQuery, (err, results) => {
        if (err) return res.status(500).json({
            error: "Error database server", message: "Database query failed"

        });

        res.json(results);


    })





};


function show(req, res) {

};

const controllers = {
    index,
    show
}

module.exports = controllers;