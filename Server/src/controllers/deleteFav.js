const { Favorite } = require("../DB_connection");


const deleteFav = async (req,res) => {
    try {
        const {id} = req.params; 
        if (!id) res.status(401).json("Faltan datos");
        else {
            await Favorite.destroy({
                where: {id}
            });
        }
        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);

    } catch (error) {
       return res.status(500).json(error.message);
    }
}

module.exports = deleteFav;
