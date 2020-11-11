module.exports = class Auth {
    static check(req, res) {
        if (req.statusAuth) return res.send({
            status: "success",
            id: req.session.passport.user
        })

        return res.send({
            status: "failed"
        })
    }

    static logout(req, res) {
        req.logout();
        req.statusAuth = false;
        res.send({ status: "success" });
    }
} 