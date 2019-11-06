const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports.login = function (req, res) {
    return res.status(200).json({ status: "Test login" });
}

module.exports.register = async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    let user = await User.findOne({ email: email });

    if (user) {
        res.status(409).json({
            message: 'Email is allready exist'
        });
    }
    else {

        const salt = bcrypt.genSaltSync(10);

        const user = new User({
            email: email,
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save();

            res.status(201).json({ user });
        }
        catch (e) {

        }
    }


}