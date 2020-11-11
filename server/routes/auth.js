const router = require("express").Router();
const passport = require("passport");

const User = require("../model/Users/Users");

router.get("/google", passport.authenticate("google-auth", { scope: ['profile'] }))

router.get("/google/callback",
    passport.authenticate('google-auth', {
        successRedirect: "http://localhost:3000",
        failureRedirect: "http://localhost:3000"
    }));


router.post("/check", async (req, res) => {
    if( !req.isAuthenticated()) return res.send({
        status : "failed"
    })
    let userData = await User.findOnId(req.session.passport.user);

    return res.send({
        status : "success",
        data : {
            id : userData.id,
            name : userData.name,
            photo : userData.photo
        }
    });
})


router.post("/logout", (req, res) => {
    console.log(req.session.passport.user);
    req.logout();
    console.log(req.session.passport.user);
    res.send( { status : "success"} );
})


module.exports = router;