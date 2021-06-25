
var {Contact} = require('./../models/index');

module.exports = {
    async getContacts(req, res)
    {
        const users = await Contact.findAll()

        res.status(200).json({users: users});
    }
}