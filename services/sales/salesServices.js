const { products, users, sales} = require('../../models');

module.exports = {
    // COMO SALVAR O PREÇO TOTAL DE CADA PRODUTO!
    // COMO ASSOCIAR CADA COMPRA COM OS ITEMS!
    index: async (req, res) => {
        let cartProducts = req.body.cart

        let saleLogic = async (prod) => {
            try {
                let sale = await sales.create({
                    products_id: prod.product_id,
                    users_id: 1,
                    quantity: prod.quantity  
                })
                let product = await products.findByPk(prod.product_id)
                let prodSaldo = product.quantity
                let novoSaldo = prodSaldo - prod.quantity
                let updateSaldo = await products.update(
                    {
                        quantity: novoSaldo
                    },
                    {
                        where: {id: prod.product_id}
                    }
                )
            } catch (error) {
                console.log(error)
            }
        }
        cartProducts.map(prod => saleLogic(prod))
        return res.send('Compra efetuada')
    }
}