//Ahora si crearemos un controlador que valide la información de nuestra base de datos.

const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
  
    if (!email || !password) 
      return res.status(404).send("Faltan datos" );
    
    // Busca un usuario por su email
    const user = await User.findOne({ where: { email } });

    if (!user) 
      return res.status(404).send("Usuario no encontrado");
    
    // Compara la contraseña proporcionada con la contraseña del usuario
    if (user.password === password) 
      return res.status(200).json({ access: true });
    
    
    return res.status(403).send("Contraseña incorrecta" );
    
  } catch (error) {
   return res.status(500).json(error.message);
  }
};
module.exports = login ;
