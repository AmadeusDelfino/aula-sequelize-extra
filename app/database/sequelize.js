const Sequelize = require('sequelize')
const dbConfig = require('../../config/database')

module.exports = new Sequelize(dbConfig)