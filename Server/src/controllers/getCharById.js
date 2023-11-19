
const axios = require("axios");


const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req,res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image } =  (await axios.get(URL + id)).data; 
    const character = { id, name, gender, species, origin, image };
    
    return character.name 
    ? res.json(character)
    : res.status(404).send("character not found");
  } catch (error) { res.status(500).send({ message: error.message });}
};

module.exports = getCharById;




