const checkAuth = (req, _, next) => {
    if (!req.isAuthenticated()) {
        req.statusAuth = false;
        next();
    }

    req.statusAuth = true;
    next();
}


const checkOnAuth = (req, res, next) => {
    if (!req.statusAuth) return res.send({ auth: "failed" });
    next();
}

module.exports = {
    checkUserMiddleware : checkAuth,
    checkonAuthMiddleware : checkOnAuth
};
