const service = require('../services/user/RegisterService')

module.exports = {
    create: async (request, response) => {
        return response.json(await service.register(request.body))
    },

    delete: async (request, response) => {
        await service.unregister(request.params.user_id)

        response.status(204).end()
    },
    update: async (request, response) => {
        await service.update(request.params.user_id, request.body)

        response.status(204).end()
    },
}