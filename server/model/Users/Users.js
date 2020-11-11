const connection = require("../Connection")

class Users {
    static async findOnId(id) {
        const res = await connection.query(`SELECT * FROM users where id = $$${id}$$`);
        if (res.rowCount > 0) return res.rows[0];
        return false;
    }

    static async add(id, name, photo) {
        const res = await connection.query(`insert into users(id, name, photo) values('${id}', '${name}', '${photo}') RETURNING *`)
        if(res) return res.rows[0];
        return false;
    }
}


module.exports = Users;