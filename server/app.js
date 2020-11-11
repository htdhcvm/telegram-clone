require('dotenv').config();

const app = require("express")();




require("./config")(app);


app.listen(process.env.PORT, () => console.log(`Server was started on port ${process.env.PORT}`));