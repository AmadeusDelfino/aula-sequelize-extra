const service = require('../services/user/LoginService')

module.exports = {
    login: async (request, response) => {
        const loginAttempt = await service.login(request.body.username, request.body.password)

        if(!loginAttempt.success) {
            return response.status(404).json(loginAttempt)
        }

        return response.json(loginAttempt)
    }
}