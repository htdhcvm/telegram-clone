require('dotenv').config();

const app = require("express")();

require("./config")(app);

const serverIO = app.listen(process.env.PORT, () => console.log(`Server was started on port ${process.env.PORT}`));
















const ModelRoom = require("./model/Rooms/Rooms");
const ModelUser = require("./model/Users/Users");
const ModelMessage = require("./model/Messages/Messages");
const ModelJoinMessageUser = require("./model/JoinMessageUser/JoinMessageUser");

const io = require("socket.io")(serverIO, {
    cors: true
});



const toCorrectIdRoom = (id) => {
    let idRoomArr = id.split("-");

    if (idRoomArr[0] > idRoomArr[1]) {
        let tmp = idRoomArr[0];
        idRoomArr[0] = idRoomArr[1];
        idRoomArr[1] = tmp;
    }

    return idRoomArr.join("-");
}




io.on("connection", (socket) => {
    console.log("Connect")
    socket.on("joinRoom", async (idRoom) => {
        console.log("Join - ", idRoom);

        let idWhomDiscussion = idRoom.split("-")[1];
        let idRoomCorrect = toCorrectIdRoom(idRoom);



        let findRoom = await ModelRoom.findOnId(idRoomCorrect)

        if (findRoom === 0) await ModelRoom.add(idRoomCorrect);

        socket.join(idRoomCorrect);

        let nameDiscassUser = (await ModelUser.findOnId(idWhomDiscussion)).name;

        io.to(idRoomCorrect).emit("successJoinRoom");
    })

    socket.on("addMessages", async (idCurrentRoom, message, idCurrentUser) => {
        let idRoomCorrect = toCorrectIdRoom(idCurrentRoom);

        let data = {};
        let resultAdd = await ModelMessage.add(idRoomCorrect, idCurrentUser, message);
        let resUser = await ModelUser.findOnId(resultAdd.id_user);
        console.log("resultAdd", resultAdd)
        console.log("resUser", resUser)

        data.text = resultAdd.text;
        data.name = resUser.name;
        data.photo = resUser.photo;

        io.to(idRoomCorrect).emit("addMessagesRes", {
            text: data.text,
            name: data.name,
            photo: data.photo
        });
    })

    socket.on("getAllMessages", async (idCurrentRoom, idCurrentUser) => {
        let idRoomCorrect = toCorrectIdRoom(idCurrentRoom);
        console.log("getAllMessages: ", idCurrentRoom, idCurrentUser)

        const listMessages = await ModelJoinMessageUser.getAllOnId(idRoomCorrect, idCurrentUser);
        if (listMessages.length > 0) {
            socket.emit("setAllMessages", listMessages)
        } else {
            socket.emit("setAllMessages", [])
        }

        // if (listMessages.rowCount > 0) {
        //     console.log("success");

        //     io.to(idRoomCorrect).emit("setAllMessages", listMessages.rows)
        // } else {
        //     console.log("error");

        //     io.to(idRoomCorrect).emit("setAllMessages", { status: "falid" });
        // }
    })

    socket.on("unsubscribeRoom", (idRoom) => {
        console.log("Leave - ", idRoom)
        socket.leave(idRoom);
    })

    socket.on('disconnect', () => {
        console.log("Disconnect");
    })
})