const {users} = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
    register: async (params) => {
        params = bcrypt.hashSync(params.password)

        return users.create(params)
    },
    unregister: async (userId) => {
        await users.destroy({
            where: {id: userId}
        })
    },
    update: async (userId, params) => {
        await users.update(params, {
            where: {id: userId}
        })
    }
}