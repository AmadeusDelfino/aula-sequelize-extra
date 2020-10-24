const sales = require('../models/sales');
const salesServices = require('../services/sales/salesServices');

module.exports = {
    index: (req,res) => {
        salesServices.index(req, res)
        res.send('oi')
    }
}