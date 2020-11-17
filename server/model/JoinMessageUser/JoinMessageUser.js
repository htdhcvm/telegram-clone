const connection = require("../Connection")

class JoinMessageUser {
    static async getAllOnId(idCurrentRoom, idCurrentUser) {
        return (await connection.query(
            `
                select  m.text, m.time, u.name, u.photo, 
                    case m.id_user
                        when '${idCurrentUser}' then 'right'
                        else 'left'
                    end as side
                from messages m
                join users u
                    on m.id_user = u.id
                where m.id_room = '${idCurrentRoom}'  
                order by m.time
            `
        )).rows;
    }

}


module.exports = JoinMessageUser;