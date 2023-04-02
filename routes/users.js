const router = require("express").Router();
const usersController = require("../controllers/users");

router.get("/users", usersController.list);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.create);
router.delete("/users/:id", usersController.delete);
router.put("/users/:id", usersController.update);

module.exports = router;
