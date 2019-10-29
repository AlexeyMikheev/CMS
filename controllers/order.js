module.exports.getAll = function (req, res) {
    return res.status(200).json({ status: 'Test getAll' });
}

module.exports.create = function (req, res) {
    res.status(200).json({ status: 'Test create' });
}