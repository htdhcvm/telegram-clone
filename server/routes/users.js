const router = require("express").Router();
const { checkUserMiddleware, checkonAuthMiddleware } = require("../middleware/checkUser");
const UserContoller = require("../controller/user.contoller");

router.get("/getAll", checkUserMiddleware, checkonAuthMiddleware, UserContoller.getAll);
router.get("/currentUser", checkUserMiddleware, checkonAuthMiddleware, UserContoller.currentUser);

module.exports = router;