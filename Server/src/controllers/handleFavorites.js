//POST Y DELETE FAVORITES
// let myFavorites = [];

// let postFav = (req, res) => {
//   //agrega/push en tu array de fav lo que llega por body y devuelve en un json ese array
//   myFavorites.push(req.body);
//   return res.json(myFavorites);
// };

// let deleteFav = (req, res) => {
//   const { id } = req.params;
//   myFavorites = myFavorites.filter((char) => char.id !== id);  //retornamos los personajes qe sean dif al id y asi tendriamos el array de todos lo que no sean diferentes 
//   return res.status(200).json(myFavorites);
// };

// module.exports = { postFav, deleteFav };
