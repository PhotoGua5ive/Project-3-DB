const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Event = sequelize.define(
    'event',
    {
        name_event: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        }
    },
    { timestamps: false }
)

module.exports = Event