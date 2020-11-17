const connection = require("../Connection")

class Rooms {
    static async findOnId(id) {
        return (await connection.query(`select * from rooms where id = '${id}'`)).rowCount
    }

    static async add(id) {
        await connection.query(`insert into rooms(id) values('${id}')`);
    }
}


module.exports = Rooms;