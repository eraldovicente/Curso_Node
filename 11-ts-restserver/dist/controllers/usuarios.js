"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
exports.getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuarios',
        id
    });
};
exports.postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body
    });
};
exports.putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body,
        id
    });
};
exports.deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id
    });
};
//# sourceMappingURL=usuarios.js.map