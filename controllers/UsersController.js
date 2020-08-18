const {users} = require('../models')
const Sequelize = require('sequelize')
const operators = Sequelize.Op

module.exports = {
    all: async (request, response) => {
        response.header('Access-Control-Allow-Origin', request.headers.origin || "*");
        response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
        response.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

        response.json(await users.findAll())
    },
    create: async (request, response) => {
        response.header('Access-Control-Allow-Origin', request.headers.origin || "*");
        response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
        response.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

        response.json(await users.create(request.body))
    },

    delete: async (request, response) => {
        await users.destroy({
            where: {id: request.params.id}
        })
        response.end()
    },
    update: async (request, response) => {
        await users.update(request.body, {
            where: {id: request.params.id}
        })

        response.end()
    },
    search: async(request, response) => {
        response.header('Access-Control-Allow-Origin', request.headers.origin || "*");
        response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
        response.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

        const searchParam = request.query.search
        response.json(
            await users.findAll({
                where: {
                    name: {
                        [operators.like]: '%' + searchParam + '%'
                    }
                }
            })
        )
    }
}