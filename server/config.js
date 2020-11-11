require("./servise/Passport");
require("./model/Connection");

const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const redis = require('redis');
const connectRedis = require('connect-redis');
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const messagesRoutes = require("./routes/messages")
const cors = require("cors");


const configuration = async (app) => {

    const RedisStore = connectRedis(session)

    const redisClient = await redis.createClient({
        host: 'localhost',
        port: 6379
    })

    await redisClient.on('error', function (err) {
        console.log('Could not establish a connection with redis. ' + err);
    });

    await redisClient.on('connect', function (err) {
        console.log('Redis : connected successfully');
    });

    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use(
        session({
            store: new RedisStore({ client: redisClient, ttl: 60 * 60 }),
            secret: "secret",
            name: "telegram_test",
            resave: true,
            saveUninitialized: true,
            cookie: {
                maxAge: 1000 * 60 * 60  // 1 hour
            }
        })
    )

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(cors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
    }));

    app.use("/auth", authRoutes);
    app.use("/user", usersRoutes);
    app.use("/message", messagesRoutes);
}

module.exports = configuration;