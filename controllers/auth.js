const bcrypt = require('bcryptjs');
const jws = require('jsonwebtoken');
const User = require('../models/User');
const Keys = require('../config/keys');


module.exports.login = async function (req, res) {
    const email = req.body.email;
    const user = await User.findOne({ email: email });

    if (user) {
        const passwordEquals = await bcrypt.compareSync(req.body.password, user.password);

        if (passwordEquals) {
            const token = jws.sign({
                email: user.email,
                userId: user._id
            }, Keys.jwsToken, { expiresIn: 3600 });

            return res.status(200).json({
                token: token
            });
        }
        else {
            return res.status(401).json({
                message: "Password is not correct"
            });
        }
    }
    else {
        return res.status(404).json({
            message: "User is not found"
        });
    }

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