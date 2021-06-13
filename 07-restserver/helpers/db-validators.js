const role = require('../models/role');
const { Usuario, Categoria } = require('../models');

const esRoleValido = async(rol = '') => {
     const existeRol = await role.findOne({ rol });
     if ( !existeRol ) {
          throw new Error(`El rol ${ rol } no está registrado en la BD`)
     }
}

const emailExiste = async( correo = '' ) => { 

     // Verificar si el correo existe
     const existeEmail = await Usuario.findOne({ correo });
     if ( existeEmail ) {
          throw new Error(`Ese correo: ${ correo }, ya está registrado`);
     }
}

const existeUsuarioPorId = async( id ) => { 

     // Verificar si el correo existe
     const existeUsuario = await Usuario.findById(id);
     if ( !existeUsuario ) {
          throw new Error(`El id no existe ${ id }`);
     }
}

/**
 *  Categorias
 */
 const existeCategoriaPorId = async( id ) => { 

     // Verificar si el correo existe
     const existeCategoria = await Categoria.findById(id);
     if ( !existeCategoria ) {
          throw new Error(`El id no existe ${ id }`);
     }
}

module.exports = {
     esRoleValido,
     emailExiste,
     existeUsuarioPorId,
     existeCategoriaPorId
}