const {User} = require('../models/index')

const allUser = async (req, res) => {
    try {
        let response = await User.findAll();
        res.json(response)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}



module.exports = {allUser}