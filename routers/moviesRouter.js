const express = require("express")
const router = express.Router();
const moviesController = require("../controllers/moviesController")

//Index (cRud):

router.get('/', moviesController.index);

//Show (cRud):

router.get('/:id', moviesController.show);

//Store (Crud):

router.post('/', moviesController.store)

//Update (crUd):

router.put('/:id', moviesController.update)

//Modify (crUd):

router.patch('/:id', moviesController.modify)

//Destroy (cruD):

router.delete('/:id', moviesController.destroy)


module.exports = router;