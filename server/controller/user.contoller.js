const ModelUser = require("../model/Users/Users");

module.exports = class User {
    static async getAll(req, res) {
        console.log(req.session.passport.user);
        return res.send({ users: await ModelUser.getAllNotCurrent(req.session.passport.user) });
    }

    static async currentUser(req, res) {
        return res.send({ currentUser: await ModelUser.getCurrent(req.session.passport.user) });
    }
}