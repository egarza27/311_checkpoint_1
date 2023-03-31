const router = require("express").Router();
const usersController = require("../controllers/users");

router.get("/users", usersController.list);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.create);

module.exports = router;
