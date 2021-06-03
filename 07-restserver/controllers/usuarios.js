const { response } = require('express');

const Usuario = require('../models/usuario');

const usuariosGet = ( req = request, res = response ) => {

     const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

     res.json({
          msg: 'get API - controlador',
          q,
          nombre,
          apikey,
          page,
          limit
     });
}

const usuariosPost = async(req, res = response ) => {

     const body = req.body;
     const usuario = new Usuario( body );

     await usuario.save();

     res.json({
          usuario
     });
}

const usuariosPut = (req, res = response ) => {

     const { id } = req.params;

     res.json({
          msg: 'put API',
          id
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