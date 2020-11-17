const connection = require("../Connection")

class Messages {
    static async add(idCurrentRoom, idCurrentUser, text) {
        let res = await connection.query(`insert into messages(text, time, id_user, id_room) values($1, $2, $3, $4) RETURNING  *`, [text, new Date().toUTCString(), idCurrentUser, idCurrentRoom])
        if (res.rowCount > 0) return res.rows[0];
        return false;
    }

    static async getAllOnIdRoom(id) {
        return await connection.query(`select * from messages where id_room=$1`, [id])
    }
}


module.exports = Messages;