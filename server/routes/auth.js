const router = require("express").Router();
const passport = require("passport");
const { checkUserMiddleware } = require("../middleware/checkUser");
const AuthController = require("../controller/auth.controller");



router.get("/google", passport.authenticate("google-auth", { scope: ['profile'] }))

router.get("/google/callback",
    passport.authenticate('google-auth', {
        successRedirect: "http://localhost:3000",
        failureRedirect: "http://localhost:3000"
    }));



router.get("/github", passport.authenticate("github-auth", { scope: ['profile'] }))

router.get("/github/callback",
    passport.authenticate('github-auth', {
        successRedirect: "http://localhost:3000",
        failureRedirect: "http://localhost:3000"
    }));


router.post("/check", checkUserMiddleware, AuthController.check);

router.post("/logout", AuthController.logout);

module.exports = router;