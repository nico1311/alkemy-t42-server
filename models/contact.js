'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Contact extends Model {
        
        static associate(models) {

        }
    }
    Contact.init({
        contactId: {
           type: type.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        message: DataTypes.STRING(1000),
        deleteAt: DataTypes.DATEONLY,
    }, {
        sequelize,
        modelName: 'Contact',
    })
    return Contact
}
