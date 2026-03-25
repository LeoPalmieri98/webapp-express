const db = require("../data/db")

//Index:

const index = (req, res) => {

    const sqlQuery = "SELECT * FROM movies; ";
    db.query(sqlQuery, (err, results) => {
        if (err) return res.status(500).json({
            error: "Error database server", message: "Database query failed"

        });

        res.json(results);
    })
};


const show = (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "User Error", message: "ID non trovato" });
    }
    const entityQuery = "SELECT * FROM movies WHERE id = ?";
    const relationsQuery = `
           SELECT * 
           FROM movies
            JOIN reviews
            ON movies.id = reviews.movie_id  
            WHERE reviews.movie_id   =  ?;
	        `

    const parametriQuery = [id];

    db.query(entityQuery, parametriQuery, (error, results) => {

        if (error) {
            console.error(error);
            return res.status(500).json({ error: "Query error", message: "Impossibile processare la richiesta" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Not found", message: "Impossibile trovare la risorsa richiesta" });
        }

        const movie = results[0];
        console.log("movie", movie);

        db.query(relationsQuery, parametriQuery, (error, reviewResults) => {

            if (error) {
                return res.status(500).json({ error: "Query error", message: "Impossibile processare la richiesta" });
            }
            movie.reviews = reviewResults;
            res.json(movie);

        });

    });
};


const controllers = {
    index,
    show
}

module.exports = controllers;