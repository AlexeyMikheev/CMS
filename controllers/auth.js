module.exports.login = function (req, res) {
    return res.status(200).json({ status: "Test login" });
}

module.exports.register = function (req, res) {
    return res.status(200).json(
        {
            // email: req.body.email,
            // password: req.body.password,
            body:req.body
        });
}