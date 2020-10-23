const productServices = require('../services/product/RegisterProduct');

module.exports = {
    store: (req, res) => {
        productServices.store(req, res)
    },
    update: (req,res) => {
        productServices.update(req,res)
    },
    show: (req, res) => {
        productServices.show(req,res)
    },
    destroy: (req, res) => {
        productServices.destroy(req,res)
        return res.send('Produto deletado com sucesso')
    },
    read: (req,res) => {
        productServices.read(req,res)
    }
}