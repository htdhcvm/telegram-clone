const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const YandexStrategy = require('passport-yandex').Strategy;


const Users = require("../model/Users/Users");

passport.use("google-auth", new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    async (request, accessToken, refreshToken, profile, done) => {
        let id = profile.id;

        let result = await Users.findOnId(id);

        if (Object.keys(result).length === 0) {
            let userData = await Users.add(id, profile.displayName, profile.picture);
            return done(null, userData);
        }
        return done(null, result);
    }
));



passport.use("github-auth", new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    async (request, accessToken, refreshToken, profile, done) => {
        const id = profile._json.id;

        let result = await Users.findOnId(id);
        if (Object.keys(result).length === 0) {
            let userData = await Users.add(id, profile._json.login, profile._json.avatar_url);
            return done(null, userData);
        }

        return done(null, result);
    }
));



passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    console.log(id);
    let userOnId = await Users.findOnId(id);
    done(null, userOnId);
});