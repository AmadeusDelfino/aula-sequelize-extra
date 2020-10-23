const {users} = require('../models')
const bcrypt = require('bcrypt')
module.exports = {
    login: async (username, password) => {
        const userDatabase = await users.findOne({
            where: {
                email: username
            }
        })

        if(!userDatabase) {
            return {
                success: false,
                message: 'Usuário ou senha incorretos',
            }
        }

        if(!bcrypt.compareSync(password, userDatabase.password)) {
            return {
                success: false,
                message: 'Usuário ou senha incorretos',
            }
        }

        return {
            success: true,
            message: '',
        }
    }
}