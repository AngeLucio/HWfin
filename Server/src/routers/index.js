const router = require("express").Router();

//  controllers
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

// //RUTAS con sus Path

router.get("/character/:id", getCharById);
router.get("/login" , login); 
router.post("/user", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

module.exports = router;
