const { User } = require("../db")

const crearUsuario = async (usuario) => {
  const nuevoUsuario = await User.create(usuario.toJSON())
  return nuevoUsuario;
}

module.exports = crearUsuario;