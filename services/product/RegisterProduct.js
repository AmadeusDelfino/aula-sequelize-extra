const { products } = require("../../models")

module.exports = {
  // cadastrando um produto no banco
  store: async (req, res) => {
    // desestruturando as variaveis
    const { name, price, quantity, category } = req.body

    // validação de tipo de dado
    if (typeof price === "number" && typeof quantity === "number") {
      let product = await products.create({
        name,
        price,
        quantity,
        category,
      })
      .then((product) => console.log(product))
      .catch((err) => res.status(503).send('Tente novamente'))
      return res.status(200).send('Produto cadastrado com sucesso')
    } else {
      res.send('Insira um preço e/ou quantidade válido');
    }
  },
  update: async (req, res) => {
    let product_id = req.params.product_id
    const { name, price, quantity, category } = req.body

    let product = await products.findByPk(product_id);

    if (typeof price === "number" && typeof quantity === "number") {
      await product.update({
        name,
        price,
        quantity,
        category
    })
      .then((product) => console.log(product))
      .catch((err) => res.status(503).send('Tente novamente'))
      return res.status(200).send('Produto atualizado com sucesso')
    } else {
        res.send('Insira um preço e/ou quantidade válido');
    }
  },
  show: async (req,res) => {
    // let product = products.find({
    //   where: {
    //     id: req.params.product_id
    //   }
    // })
    let product = await products.findByPk(req.params.product_id)
      .catch((err)=> res.status(503).send('Tente novamente'))
    res.json(product)
  },
  destroy: async (req,res) => {
    let destroy = await products.destroy({
      where: {
        id: req.params.product_id
      }
    })
      .then((destroy) => console.log(destroy))
      .catch((err)=> res.status(503).send('Tente Novamente'))
  },
  read: async (req,res) => {
    let productsRead = await products.findAll()
      .catch((err)=> res.status(503).send('Tente Novamente'))
    res.json(productsRead)
  } 
};
