// const {User} = require("../models/User");
const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    } else {
      const [user, created] = await User.findOrCreate({
        where: { email: email },
        defaults: { password: password },
      });
      if (created) res.json(user);
    }

  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postUser;
