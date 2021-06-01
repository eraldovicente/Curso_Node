const { response } = require('express');

const usuariosGet = ( req, res = response ) => {
     res.json({
          msg: 'get API - controlador'
     });
}

const usuariosPost = (req, res) => {
     res.json({
          msg: 'post API'
     });
}

const usuariosPut = (req, res) => {
     res.json({
          msg: 'put API'
     });
}

const usuariosPatch = (req, res) => {
     res.json({
          msg: 'patch API'
     });
}

const usuariosDelete = (req, res) => {
     res.json({
          msg: 'delete API'
     });
}

module.exports = {
     usuariosGet,
     usuariosPost,
     usuariosPut,
     usuariosPatch,
     usuariosDelete
}