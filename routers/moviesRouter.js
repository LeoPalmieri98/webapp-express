const express = require("express")
const router = express.Router();
const moviesController = require("../controllers/moviesController")

//Index (cRud):

router.get('/', moviesController.index);

//Show (cRud):

router.get('/:id', moviesController.show);

//Store (Crud):

router.post('/:id/reviews', moviesController.storeReview);




module.exports = router;