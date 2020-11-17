const connection = require("../Connection")

class Users {
    static async findOnId(id) {
        const res = await connection.query(`SELECT * FROM users where id = $1`, [id]);
        if (res.rowCount > 0) return res.rows[0];
        return false;
    }

    static async add(id, name, photo) {
        const res = await connection.query(`insert into users(id, name, photo) values($1, $2, $3) RETURNING *`,[id, name, photo])
        if (res) return res.rows[0];
        return false;
    }

    static async getAllNotCurrent(id) {
        return (await connection.query(`select * from users where id not in ($1)`, [id])).rows;
    }

    static async getCurrent(id) {
        return (await connection.query(`select name, photo from users where id = ($1)`), [id]).rows[0];
    }
}


module.exports = Users;