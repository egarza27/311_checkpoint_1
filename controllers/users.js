const { raw } = require("body-parser");
let { users } = require("../data/index");
const { use } = require("../routes/users");

module.exports = {
  list: (req, res) => res.json(users),
  show: (req, res) => {
    let userId = req.params.id;
    // res.json(users.find((user) => user.id === parseInt(userId)));
    users.find((user) => {
      if (user.id === parseInt(userId)) {
        return {
          id: parseInt(req.params.id),
          ...req.body,
        };
      }
      if (user.id !== parseInt(req.params.id)) {
        res.status(404).send("User not found");
      }
      return user;
    });
    // console.log(req.body);
    res.json(req.body);
  },
  create: (req, res) => {
    const user = {
      id: users.length + 1,
      ...req.body,
    };
    users.push(user);
    res.json(user);
    console.log(users);
  },
  update: (req, res) => {
    console.log(req.body);
    users = users.map((user) => {
      if (user.id === parseInt(req.params.id)) {
        return {
          id: parseInt(req.params.id),
          ...req.body,
        };
      }
      if (user.id !== parseInt(req.params.id)) {
        res.status(404).send("User not found");
      }
      return user;
    });
    res.json(req.body);
  },
  delete: (req, res) => {
    let userId = req.params.id;
    let deletedUser = users.filter((obj) => obj.id !== parseInt(userId));
    console.log(deletedUser);
    res.send("User deleted");
  },
};
